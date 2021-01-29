#!/usr/bin/env node

// Script for course development purposes
// Builds each exercise, deploys it then runs the e2e tests on it
// The build + e2e cycle should verify that exercises do build and that
// they have not accidentally bee completed!

import { exec } from 'child_process';
//import {Promise} from 'es6-promise'

const EX_MAPPINGS = [
  "Ex2.2",
  "Ex3.1",
  "Ex4.1",
  "Ex4.2",
  "Ex5.1",
  "Ex5.2",
  "Ex6.1",
  "Ex6.2",
  "Ex6.3",
  "Ex7.1",
  "Ex7.2",
  "Ex8.1",
  "Ex9.1",
  "Final"
];


function runATest(index : number) {
    let options = { cwd: 'c:\\course2324\\Exercises\\FlySharp' };
    let prom = new Promise<void>((resolve, reject)=>{

    const exStart = exec('exStart ' + EX_MAPPINGS[index], options, (error, stdout, stderr) => {
      if (error) {
        console.log(stdout);
        //throw error;
        reject(error);

      }
      console.log(stdout);
      const child = exec('ng e2e', options, (error, stdout, stderr) => {
        console.log(stdout);
        if (error) {
          console.log(error);
          reject(error);
          
        }
        resolve();
      });

    });
});
return prom;
}


async function main(){
let i=0;
try{
while(i < EX_MAPPINGS.length){
  console.log("Starting runATest for " + EX_MAPPINGS[i]);
   await runATest(i);
   console.log("Back from runATest");
   i++;
}
} catch( e ) {
  console.log("Error: " + e);
}
}

main();

  // child.on('exit', function (code, signal) {
  //   console.log('child process exited with ' +
  //               `code ${code} and signal ${signal}`);
  // });

  // child.stdout.on('data', (data) => {
  //   console.log(`child stdout:\n${data}`);
  // });

  // child.stderr.on('err', (err) => {
  //   console.log(`child stdout:\n${err}`);
  // });

  // child.on('error', function (err) {
  //   console.log('child error', err);
  // });

