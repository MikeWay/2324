FOR %%D IN (Ex2.1,Ex2.2,Ex3.1,Ex4.1,Ex4.2,Ex5.1,Ex5.2,Ex6.1,Ex6.2,Ex7.1,Ex8.1,Ex8.2, Ex9.1)  DO (

 exStart %%D
 if "%%D" == "Ex8.2" cpAddIns Ex8.2
 ng e2e
)




rem (Ex2.1,Ex2.1_Bonus,Ex2.2,Ex2.2_Bonus,Ex2.2_Bonus_2,Ex3.1,Ex4.1,Ex4.1_Bonus,Ex4.1_Bonus_1,Ex4.1_Bonus_2,Ex4.2,Ex4.2_Bonus_1,Ex5.1,Ex5.1_Bonus_1,Ex5.2,Ex5.2_Bonus_1,Ex5.2_Bonus_2,Ex5.2_Bonus_3,Ex6.1,Ex6.1_Bonus_1,Ex6.1_Bonus_2,Ex6.2,Ex6.2_Bonus_1,Ex6.2_Bonus_2,Ex6.2_Bonus_3,Ex7.1,Ex7.1_Bonus_1,Ex7.2,Ex7.2_Bonus_1,Ex8.1,Ex8.1_Bonus_1,Ex8.1_Bonus_2,Ex8.2, Ex9.1,Ex9.1_Bonus_1) 
rem -- use the list without bonuses - there are no start scripts for them!
rem (Ex2.1,Ex2.2,Ex3.1,Ex4.1,Ex4.2,Ex5.1,Ex5.2,Ex6.1,Ex6.2,Ex7.1,Ex8.1,Ex8.2, Ex9.1) 