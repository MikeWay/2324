#!/usr/bin/env node
// Copies files from the Solutions directory (identified by the command line argument) 
// To the exercises/FlySharp directory

import * as fs from "fs-extra";


console.log(process.argv);

let TARGET_DIR_ROOT = ".";
let SRC_DIR_ROOT = "../../Solutions";


let exercise = process.argv[2];


if(process.argv.length < 3){
  console.log("You must supply a solution number to copy from");
  process.exit(1);
}

let srcDir = `${SRC_DIR_ROOT}/${exercise}/src`;
let destDir = TARGET_DIR_ROOT + "/src";

try {
    doCopy(srcDir, destDir);

    srcDir = `${SRC_DIR_ROOT}/${exercise}/e2e`;
    destDir = TARGET_DIR_ROOT + "/e2e";
    doCopy(srcDir, destDir);
    console.log("Copy from solution " + exercise + " complete");
} catch (err) {
    console.log("Failed to copy to solution: " + err);
}

function doCopy(srcDir : string, destDir : string){
  console.log("Copying from " + srcDir + " to " + destDir);
  try {
    if(fs.pathExistsSync(srcDir)){
      fs.copySync(srcDir, destDir,{overwrite: true});
      fs.copySync(srcDir, destDir);
    } else {
      console.log(`Failed as ${srcDir} could not be located!`);
    }
	} catch (err) {
		console.log("Failed to copy to solution: " + err);
	}

}
