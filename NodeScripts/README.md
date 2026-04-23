================
Utilities to copy files into the right place to create the exercise environment and to perform E2E testing of the load.


To install on your machine.

1) From the $COURSE_HOME/NodeScripts directory 
    a) run 'npm install'
    b) run 'npm run build'
    c) run "npm -g install"

The scripts once installed are:
        "cpAddIns" - student script - copies add ins to ex
        "cpToDNSolution" - dev - copies donow to solution
        "cpToSolution" - dev - copies ex to solution
        "cpFromSolution" deprecated
        "exStart" - student used to start each exercise. Instructor can also use to copy the solution into the FlySharp dir. Note special exercise number of Final used to copy the ex9.2 solution
        "upgrd"
        "runAllTests" - deprecated