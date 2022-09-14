#!/usr/bin/env node

// Script for course development purposes
// Builds each exercise, deploys it then runs the e2e tests on it
// The build + e2e cycle should verify that exercises do build and that
// they have not accidentally bee completed!

import * as shell from 'shelljs';
import * as yargs from 'yargs';

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

function beforeAll(cwd: string) {
  let options = { cwd };
  let prom = new Promise<void>((resolve, reject) => {
    const exStart = shell.exec('DEL /S /Q C:\\course2324\\Exercises\\FlySharp\\src\\app', options, (error, stdout, stderr) => {
      if (error) {
        console.log(stdout);
        //throw error;
        reject(error);

      }
      resolve();
    });
  });
  return prom;
}


function runATest(cwd: string, index: number) {
  let options = { cwd };
  let prom = new Promise<void>((resolve, reject) => {

    const exStart = shell.exec('exStart ' + EX_MAPPINGS[index], options, (error, stdout, stderr) => {
      if (error) {
        console.log(stdout);
        //throw error;
        reject(error);

      }
      console.log(stdout);
      //const child = shell.exec('ng e2e --spec cypress\\e2e\\**course-check.spec** --browser chrome --headless --record false --watch false', options, (error, stdout, stderr) => {
        const child = shell.exec('ng e2e --spec cypress\\e2e\\**course-check.spec** --browser=chrome --headless=true --exit=true --record=false --watch=false', options, (error, stdout, stderr) => {        
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


async function main() {

  console.log('This script will run all of the course  e2e tests');
  console.log('Before running you must create a new FlySharp application and enable the Cypress E2E testing capability');
  console.log('Verify that by checking that ng e2e actually works!');
  const argv = yargs.options({
    exHomeDir: {
      alias: 'exHomeDir',
      description: 'Home dir of FlySharp app',
      default: 'c:\\course2324\\Exercises\\FlySharp'
    }
  }).argv;

  await beforeAll(argv.exHomeDir);
  let i = 0;
  try {
    while (i < EX_MAPPINGS.length) {
      console.log("Starting runATest for " + EX_MAPPINGS[i]);
      await runATest(argv.exHomeDir, i);
      console.log("Back from runATest");
      i++;
    }
  } catch (e) {
    console.log("Error: " + e);
    console.log("Failed checking exercise: " + EX_MAPPINGS[i]);
  }
  console.log("All done. Calling process.exit()");
  process.exit();
}

main();



