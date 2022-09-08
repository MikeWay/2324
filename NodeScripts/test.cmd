@echo off
setlocal ENABLEDELAYEDEXPANSION

set COUNT=0

for %%X in (1 2 3 4) do (

  set /A COUNT=!COUNT! + 1

  echo !COUNT!
  echo !ERRORLEVEL!

)