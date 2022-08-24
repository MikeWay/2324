rem This script is intended to allo the automated upgrade of Angular versions for the DNs
rem I've not had a lot of suceess and would recomend just copying the dependencies from a 
rem new package.json and then running npm install manually

FOR %%D IN ( DoNow22,DoNow41,DoNow51,DoNow71,DoNow81,DoNow91 ) DO (

 rem start "%%D" /D C:\course2324\DoNows\%%D\ ng update @angular/cli @angular/core@13
 start "%%D" /D C:\course2324\DoNows\%%D\ npm install --force
)




rem (Ex2.1,Ex2.1_Bonus,Ex2.2,Ex2.2_Bonus,Ex2.2_Bonus_2,Ex3.1,Ex4.1,Ex4.1_Bonus,Ex4.1_Bonus_1,Ex4.1_Bonus_2,Ex4.2,Ex4.2_Bonus_1,Ex5.1,Ex5.1_Bonus_1,Ex5.2,Ex5.2_Bonus_1,Ex5.2_Bonus_2,Ex5.2_Bonus_3,Ex6.1,Ex6.1_Bonus_1,Ex6.1_Bonus_2,Ex6.2,Ex6.2_Bonus_1,Ex6.2_Bonus_2,Ex6.2_Bonus_3,Ex7.1,Ex7.1_Bonus_1,Ex7.2,Ex7.2_Bonus_1,Ex8.1,Ex8.1_Bonus_1,Ex8.1_Bonus_2,Ex9.1,Ex9.1_Bonus_1) 
