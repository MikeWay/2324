Setting up the Environment
==========================

1) You need Node.js (24+) and NPM

2) You should set up the COURSE_HOME environment variable to point to C:\course2324 or wherever you clone the course files

3) Clone the course files

4) Install the Flights Service as a service (optionally, you can run the Flights Service manually with npm start in the $COURSE_HOME/server/course2324-node-server directory )

5) Install @angular/cli

6) Test the installation by:
	cd to $COURSE_HOME\FlySharpSolution
	npm install
	ng serve
	
7) Open a browser to localhost:4200 and the solution app should be running



Installing the Flights Service as a Service
===========================================

1) Install node-windows globally: npm install -g node-windows

2) From $COURSE_HOME/server/course2324-node-server run: npm link node-windows

3) From $COURSE_HOME/server/course2324-node-server run: npm install

4) From $COURSE_HOME/server/course2324-node-server run npm build

5) From $COURSE_HOME/server/course2324-node-server run node install.js

6) Go to localhost:8080 and check you see: "REST data is served from /flightserver/flights"




