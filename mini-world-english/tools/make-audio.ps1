param([string]$Json, [string]$OutDir, [string]$Only = '', [int]$Bitrate = 32000)
# Renders bilingual audio tracks. Input JSON: [{ "out": "name", "segs": [["zh","..."],["en","..."],["slow","..."],["en2","..."],["pause",600]] }]
# All text comes from the UTF-8 JSON file, so this script itself stays plain ASCII.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Speech
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
$asAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncActionWithProgress`1' })[0]
function Await($op, [Type]$type) { $t = $asTask.MakeGenericMethod($type).Invoke($null, @($op)); $t.Wait(-1) | Out-Null; $t.Result }
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.Transcoding.MediaTranscoder, Windows.Media.Transcoding, ContentType = WindowsRuntime] | Out-Null
[Windows.Media.MediaProperties.MediaEncodingProfile, Windows.Media.MediaProperties, ContentType = WindowsRuntime] | Out-Null

$ZH = 'Microsoft Huihui Desktop'; $EN = 'Microsoft Zira Desktop'; $EN2 = 'Microsoft David Desktop'
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)
$tracks = Get-Content -Raw -Encoding UTF8 $Json | ConvertFrom-Json
New-Item -ItemType Directory -Force $OutDir | Out-Null
$folder = Await ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync((Resolve-Path $OutDir).Path)) ([Windows.Storage.StorageFolder])
$slow = New-Object System.Speech.Synthesis.PromptStyle([System.Speech.Synthesis.PromptRate]::Slow)
$out = @()

foreach ($tr in $tracks) {
  if ($Only -and $tr.out -ne $Only) { continue }
  $wav = Join-Path $env:TEMP ($tr.out + '.wav')
  $s = New-Object System.Speech.Synthesis.SpeechSynthesizer
  $s.SetOutputToWaveFile($wav, $fmt)
  $pb = New-Object System.Speech.Synthesis.PromptBuilder
  foreach ($seg in $tr.segs) {
    $kind = $seg[0]; $val = $seg[1]
    if ($kind -eq 'pause') { $pb.AppendBreak([TimeSpan]::FromMilliseconds([int]$val)); continue }
    $voice = $EN; if ($kind -eq 'zh') { $voice = $ZH } elseif ($kind -eq 'en2' -or $kind -eq 'slow2') { $voice = $EN2 }
    $pb.StartVoice($voice)
    if ($kind -eq 'slow' -or $kind -eq 'slow2') { $pb.StartStyle($slow); $pb.AppendText([string]$val); $pb.EndStyle() } else { $pb.AppendText([string]$val) }
    $pb.EndVoice()
    $pb.AppendBreak([TimeSpan]::FromMilliseconds(350))
  }
  $s.Speak($pb); $s.Dispose()

  $name = $tr.out + '.m4a'
  $src = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($wav)) ([Windows.Storage.StorageFile])
  $dst = Await ($folder.CreateFileAsync($name, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])
  $profile = [Windows.Media.MediaProperties.MediaEncodingProfile]::CreateM4a([Windows.Media.MediaProperties.AudioEncodingQuality]::Low)
  $profile.Audio.ChannelCount = 1; $profile.Audio.SampleRate = 22050; $profile.Audio.Bitrate = $Bitrate
  $tc = New-Object Windows.Media.Transcoding.MediaTranscoder
  $prep = Await ($tc.PrepareFileTranscodeAsync($src, $dst, $profile)) ([Windows.Media.Transcoding.PrepareTranscodeResult])
  if (-not $prep.CanTranscode) { throw ('cannot transcode ' + $tr.out + ': ' + $prep.FailureReason) }
  $t = $asAction.MakeGenericMethod([double]).Invoke($null, @($prep.TranscodeAsync())); $t.Wait(-1) | Out-Null
  $secs = [math]::Round((Get-Item $wav).Length / 44100)
  Remove-Item $wav
  $out += [pscustomobject]@{ id = $tr.out; seconds = $secs; bytes = (Get-Item (Join-Path $OutDir $name)).Length }
  Write-Output ($tr.out + ' ' + $secs + 's ' + (Get-Item (Join-Path $OutDir $name)).Length)
}
$out | ConvertTo-Json | Set-Content -Encoding UTF8 (Join-Path $OutDir '_durations.json')
