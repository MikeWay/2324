cls
echo "Make sure you have met the pre-reqs. See $COURSE_HOME/testing.md"
echo "Starting tests"
set COURSE_HOME=C:\course2324
cd %COURSE_HOME%\Exercises
rem rmdir /s /q FlySharp 
rem call ng new FlySharp
cd FlySharp
rem call npm install


FOR %%E in ("Ex2.2", "Ex3.1", "Ex4.1", "Ex4.2","Ex5.1","Ex5.2","Ex6.1","Ex6.2","Ex7.1","Ex7.2","Ex8.1","Ex9.1", "Final") DO (
CALL :run_test %%E
IF %ERRORLEVEL% NEQ 0 Exit /b
)
exit /B

:run_test
call exStart %1
call ng e2e
IF %ERRORLEVEL% NEQ 0 Echo An error was found in the %1 start E2E & EXIT /b
EXIT /b


