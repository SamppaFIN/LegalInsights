Param(
  [string]$DatabaseUrl = $env:DATABASE_URL
)

if (-not $DatabaseUrl) {
  Write-Error "DATABASE_URL not set. Provide -DatabaseUrl or set env var."; exit 1
}

$psql = (Get-Command psql -ErrorAction SilentlyContinue).Path
if (-not $psql) { $psql = "C:\\Program Files\\PostgreSQL\\18\\bin\\psql.exe" }

Get-ChildItem -Path "db/tests" -Filter *.sql | Sort-Object Name | ForEach-Object {
  Write-Host "Running test $($_.Name)"
  & "$psql" -v ON_ERROR_STOP=1 "$DatabaseUrl" -f $_.FullName | Out-Host
}

