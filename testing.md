Testing the 2324 Load
=====================

On the real load: $COURSE_HOME is c:\course2324

Pre-reqs: All the normal course pre-reqs then you need to have the NPM scripts installed:

a) From the $COURSE_HOME\NodeScripts\src directory run "npm -g install"

b) From the $COURSE_HOME\server\course2324-node-server run "npm -g install"

Testing:


With $COURSE_HOME as the current directory:

Run flights-server  -- The Node.JS flights REST server

Run $COURSE_HOME\loadTest.bat -- should complete with no errors
