@echo off
rem THIS SCRIPT DOES NOT CORRECTLY HANDLE ERRORLEVEL !
rem Instead: just run the command "runAllTests" it is a node script from the Course/NodeScripts directory and works just fine!



setlocal ENABLEDELAYEDEXPANSION
rm -rf C:\course2324\Exercises\FlySharp\src\app

FOR %%D IN (Ex6.1,Ex6.2,Ex7.1,Ex8.1,Ex8.2, Ex9.1)  DO (

 exStart %%D
 rem if "%%D" == "Ex8.2" cpAddIns Ex8.2
 rem ng e2e --spec cypress\e2e\**course-check.spec** --browser chrome --headless --record false --watch false
 echo %ERRORLEVEL% !ERRORLEVEL!
 rem C:\course2324\Exercises\FlySharp\node_modules\.bin\cypress run --spec C:\course2324\Exercises\FlySharp\cypress\e2e\course-check.spec.cy.ts
 if !ERRORLEVEL! NEQ 0 (
   echo Failure Reason Given is !errorlevel!
   GOTO :END
)
)

:END




rem (Ex2.1,Ex2.1_Bonus,Ex2.2,Ex2.2_Bonus,Ex2.2_Bonus_2,Ex3.1,Ex4.1,Ex4.1_Bonus,Ex4.1_Bonus_1,Ex4.1_Bonus_2,Ex4.2,Ex4.2_Bonus_1,Ex5.1,Ex5.1_Bonus_1,Ex5.2,Ex5.2_Bonus_1,Ex5.2_Bonus_2,Ex5.2_Bonus_3,Ex6.1,Ex6.1_Bonus_1,Ex6.1_Bonus_2,Ex6.2,Ex6.2_Bonus_1,Ex6.2_Bonus_2,Ex6.2_Bonus_3,Ex7.1,Ex7.1_Bonus_1,Ex7.2,Ex7.2_Bonus_1,Ex8.1,Ex8.1_Bonus_1,Ex8.1_Bonus_2,Ex8.2, Ex9.1,Ex9.1_Bonus_1) 
rem -- use the list without bonuses - there are no start scripts for them!
rem (Ex2.1,Ex2.2,Ex3.1,Ex4.1,Ex4.2,Ex5.1,Ex5.2,Ex6.1,Ex6.2,Ex7.1,Ex8.1,Ex8.2, Ex9.1) 