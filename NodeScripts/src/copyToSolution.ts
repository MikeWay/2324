#!/usr/bin/env node

// Copies files rrom the AddIns directory (identified by the command line argument)
// To the exercises/FlySharp directory

import * as fs from "fs-extra";




console.log(process.argv);

let SRC_DIR_ROOT = ".";
let TARGET_DIR_ROOT = "../../Solutions/";


let exercise = process.argv[2];

let targetDir = TARGET_DIR_ROOT + exercise ;

if(process.argv.length < 3){
  console.log("You must supply an exercise number as the target");
  process.exit(1);
}
let srcDir = SRC_DIR_ROOT + "/src";
let destDir = targetDir + "/src";

doCopy(srcDir, destDir);

srcDir = SRC_DIR_ROOT + "/e2e";
destDir = targetDir + "/e2e";
doCopy(srcDir, destDir);
console.log("Copy to solution " + exercise + " complete");

function doCopy(srcDir : string, destDir : string){
  console.log("Copying from " + srcDir + " to " + destDir);
  try {
    fs.ensureDir(destDir);
    fs.copy(srcDir, destDir);
	} catch (err) {
		console.log("Failed to copy to solution: " + err);
	}

}




