IF "%selfWrapped%"=="" (
  REM this is necessary so that we can use "exit" to terminate the batch file,
  REM and all subroutines, but not the original cmd.exe
  SET selfWrapped=true
  %ComSpec% /s /c ""%~0" %*"
  GOTO :EOF
)

cls
echo "Make sure you have met the pre-reqs. See $COURSE_HOME/testing.md"
echo "About to run ng update on all DoNows"
set COURSE_HOME=C:\course2324

FOR %%E in ("DoNow22", "DoNow41", "DoNow51", "DoNow71","DoNow91") DO (
CALL :run_donow_update %%E
IF %ERRORLEVEL% NEQ 0 Exit 1
)

exit /B

:run_donow_update
cd %COURSE_HOME%\DoNows\%1
call ng update --all --force
IF %ERRORLEVEL% NEQ 0 Echo An error was found when updating
rem next line special when updating to A8
call npm install typescript@"<3.5"
IF %ERRORLEVEL% NEQ 0 Echo An error was found when install typescript
EXIT /B




