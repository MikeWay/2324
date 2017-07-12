Setting up the Environment
==========================

1) You need Node.js (8) and NPM

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

3) From $COURSE_HOME/server/course2324-node-server run npm build

4) From $COURSE_HOME/server/course2324-node-server run node install.js

5) Go to localhost:8080 and check you see: "REST data is served from /flightserver/flights"


HISTORIC Setting up the environment
==========================

Notes for configuring once the repo is cloned onto a VM

1) Install the ltree support node module. Cd to C:\Course2324\NodeScripts\src
	Run npm install -g
	Provides access to utilities including
	   cpAddIns - copies addins to the exercise folder
	   cpToDNSolution - copies donows DoNow solutions foler
		(var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
		var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";)
   cpToSolution - copies from the exercise dir to the solutions folder
   
2) Run mklink in lots of folders! -  all the Donows and the exercise folders   


3) MySql root password = rootpw

