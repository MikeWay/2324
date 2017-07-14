ECHO ON
SET BASE=c:\course2324\Solutions
REM Ex1.1 Ex1.2 Ex2.1 Ex2.1_Bonus
for %%D in (Ex1.1 Ex1.2 Ex2.1 Ex2.1_Bonus Ex2.2  Ex2.2_Bonus Ex2.2_Bonus_2 Ex3.1 Ex4.1 Ex4.1_Bonus Ex4.1_Bonus_1 Ex4.1_Bonus_2 Ex4.2 Ex4.2_Bonus_1  Ex5.1 Ex5.1_Bonus_1 Ex5.2 Ex5.2_Bonus_1 Ex5.2_Bonus_2 Ex5.2_Bonus_3 Ex6.1 Ex6.1_Bonus_1 Ex6.1_Bonus_2 Ex6.2 Ex6.2_Bonus_1 Ex6.2_Bonus_2 Ex6.2_Bonus_3 Ex7.1 Ex7.1_Bonus_1 Ex7.2 Ex7.2_Bonus_1 Ex8.1 Ex8.1_Bonus_1 Ex8.1_Bonus_2 Ex9.1 Ex9.1_Bonus_1
) do (

REM for %%D in (TEST) do (
 	echo %BASE%\%%D
	del %BASE%\%%D\src\typings.d.ts
	del %BASE%\%%D\src\tsconfig.json
	del %BASE%\%%D\src\typings.d.ts
	del %BASE%\%%D\src\tests.ts
	REM move %BASE%\%%D\src\css %BASE%\%%D\src\assets
	REM move %BASE%\%%D\src\images %BASE%\%%D\src\assets
	REM robocopy C:\course2324\Exercises\FlySharp\src\. %BASE%\%%D\src\. *.spec.ts /S
)
