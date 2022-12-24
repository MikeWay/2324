IF "%selfWrapped%"=="" (
  REM this is necessary so that we can use "exit" to terminate the batch file,
  REM and all subroutines, but not the original cmd.exe
  SET selfWrapped=true
  %ComSpec% /s /c ""%~0" %*"
  GOTO :EOF
)

cls
rem set COURSE_HOME=C:\course2324
rem cd %COURSE_HOME%\Exercises


FOR %%E in ("DoNow22", "DoNow41", "DoNow51", "DoNow71","DoNow81", "DoNow91") DO (
CALL :run_donow_update %%E
IF %ERRORLEVEL% NEQ 0 Exit 1
)

exit /B

:run_donow_update
cd %COURSE_HOME%\DoNows\%1
rmdir /s /q node_modules 
call npm install
IF %ERRORLEVEL% NEQ 0 Echo An error was found when updating node modules
EXIT /B




