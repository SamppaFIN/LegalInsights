Param(
  [string]$DatabaseUrl = $env:DATABASE_URL
)

if (-not $DatabaseUrl) {
  Write-Error "DATABASE_URL not set. Provide -DatabaseUrl or set env var."; exit 1
}

Get-ChildItem -Path "db/schema" -Filter *.sql | Sort-Object Name | ForEach-Object {
  Write-Host "Applying $($_.Name)"
  psql -v ON_ERROR_STOP=1 "$DatabaseUrl" -f $_.FullName | Out-Host
}

