REST Server to support course 2324
==================================

Build using mvn package -- from the COMMAND LINE, (make sure the Eclipse build path includes a JDK if running from inside Eclipse).
The war file gets copies into C:\course2324\webapps which is configured as the hot deploy directory for Tomcat.

Expects an Airline database as defined by resources/application.properties

30/12/2016 -- added a new endpoint /flightssec which requires a basic auth request with user1 / secret1 as the credentials