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
rem for debugging GOTO :RUNTESTSNOW
rmdir /s /q FlySharp 
call ng new FlySharp --routing --style css
cd FlySharp
call npm install
call ng add @cypress/schematic@2.1.1 --e2e --component --skip-confirmation


rem the following is a NodeJS script from NodeScripts
call runAllTests
IF %ERRORLEVEL% NEQ 0 Exit 1

:RUNTESTSNOW

FOR %%E in ("DoNow22", "DoNow41", "DoNow51", "DoNow71") DO (
CALL :run_donow_test %%E
IF %ERRORLEVEL% NEQ 0 GOTO :END
)

GOTO :END
rem exit /B

:run_donow_test
cd %COURSE_HOME%\DoNows\%1
call ng e2e --browser=chrome --headless=true --exit=true --record=false --watch=false
IF %ERRORLEVEL% NEQ 0 Echo An error was found in the %1 start E2E
EXIT /B


:END
echo "ALL OK"