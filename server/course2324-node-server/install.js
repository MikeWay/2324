var Service = require('node-windows').Service;

var args = process.argv.slice(2);
let uninstall = false;

if (args[0]=='help'){
    console.log("Installs Flights Service as a windows service");
    console.log("node install.js to install");
    console.log("node install.js remove to uninstall");
} else if (args[0] == 'remove') {
    uninstall = true;
}

let COURSE_HOME = process.env.COURSE_HOME;

if (typeof COURSE_HOME == 'undefined'){
    COURSE_HOME = "C:\\course2324";
}

console.log("COURSE_HOME: ", COURSE_HOME);

// Create a new service object
var svc = new Service({
  name:'Flights Service',
  description: 'The nodejs.org example web server.',
  script: COURSE_HOME + '\\server\\course2324-node-server\\dist\\bundle.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log('Starting service.');
  svc.start();
});

svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

if(uninstall){
	console.log('Uninstalling service.');
    svc.uninstall();
} else {
	console.log('Installing service.');
    svc.install();
}
