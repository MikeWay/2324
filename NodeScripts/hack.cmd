FOR %%D IN ( Ex7.2,Ex7.2_Bonus_1,Ex8.1,Ex8.1_Bonus_1,Ex8.1_Bonus_2,Ex9.1,Ex9.1_Bonus_1 ) DO (

 rem del C:\course2324\Solutions\%%D\cypress\integration\spec.ts
 rem rmdir C:\course2324\Solutions\%%D\cypress\integration
 rem mkdir C:\course2324\Solutions\%%D\cypress\e2e\
 rem copy  C:\course2324\Exercises\FlySharp\cypress\e2e\spec.cy.ts C:\course2324\Solutions\%%D\cypress\e2e\.
 rem del C:\course2324\Solutions\%%D\e2e\src\app.e2e-spec.ts

 rem COPY C:\course2324\Exercises\FlySharp\src\app\payment\payment.component.html C:\course2324\Solutions\%%D\src\app\payment\.
 COPY C:\course2324\Solutions\Ex7.1_Bonus_1\src\app\buy-flight\buy-flight.component.ts C:\course2324\Solutions\%%D\src\app\buy-flight\.
)




rem (Ex2.1,Ex2.1_Bonus,Ex2.2,Ex2.2_Bonus,Ex2.2_Bonus_2,Ex3.1,Ex4.1,Ex4.1_Bonus,Ex4.1_Bonus_1,Ex4.1_Bonus_2,Ex4.2,Ex4.2_Bonus_1,Ex5.1,Ex5.1_Bonus_1,Ex5.2,Ex5.2_Bonus_1,Ex5.2_Bonus_2,Ex5.2_Bonus_3,Ex6.1,Ex6.1_Bonus_1,Ex6.1_Bonus_2,Ex6.2,Ex6.2_Bonus_1,Ex6.2_Bonus_2,Ex6.2_Bonus_3,Ex7.1,Ex7.1_Bonus_1,Ex7.2,Ex7.2_Bonus_1,Ex8.1,Ex8.1_Bonus_1,Ex8.1_Bonus_2,Ex9.1,Ex9.1_Bonus_1) 
