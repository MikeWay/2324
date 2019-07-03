IF "%selfWrapped%"=="" (
  REM this is necessary so that we can use "exit" to terminate the batch file,
  REM and all subroutines, but not the original cmd.exe
  SET selfWrapped=true
  %ComSpec% /s /c ""%~0" %*"
  GOTO :EOF
)

cls
echo "Make sure you have met the pre-reqs. See $COURSE_HOME/testing.md"
echo "Starting tests"
set COURSE_HOME=C:\course2324
cd %COURSE_HOME%\Exercises
rmdir /s /q FlySharp 
call ng new FlySharp --enable-ivy --routing --style css
cd FlySharp
call npm install


FOR %%E in ("Ex2.2", "Ex3.1", "Ex4.1", "Ex4.2","Ex5.1","Ex5.2","Ex6.1","Ex6.2","Ex7.1","Ex7.2","Ex8.1","Ex9.1", "Final") DO (
CALL :run_test %%E
IF %ERRORLEVEL% NEQ 0 Exit 1
)


FOR %%E in ("DoNow21", "DoNow41", "DoNow51", "DoNow71","DoNow91") DO (
CALL :run_donow_test %%E
IF %ERRORLEVEL% NEQ 0 Exit 1
)

exit /B

:run_donow_test
cd %COURSE_HOME%\DoNows\%1
call ng e2e
IF %ERRORLEVEL% NEQ 0 Echo An error was found in the %1 start E2E & EXIT 1
EXIT /B


:run_test
call exStart %1
call ng e2e
IF %ERRORLEVEL% NEQ 0 Echo An error was found in the %1 start E2E & EXIT 1
EXIT /B


