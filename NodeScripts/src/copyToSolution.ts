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

try {
    fs.removeSync(targetDir);
    doCopy(srcDir, destDir);
    srcDir = SRC_DIR_ROOT + "/cypress/e2e";
    destDir = targetDir + "/cypress/e2e";
    doCopy(srcDir, destDir);
    console.log("Copy to solution " + exercise + " complete");
} catch (err) {
    console.log("Failed to copy to solution: " + err);
}

function doCopy(srcDir : string, destDir : string){
  console.log("Copying from " + srcDir + " to " + destDir);
  try {
    fs.ensureDirSync(destDir);
    fs.copySync(srcDir, destDir,{overwrite: true, filter: (src: string, dest: string) => {
      if(src.endsWith('protractor.conf.js') || src.endsWith('tsconfig.json') || src.endsWith('polyfills.ts')){
        return false;
      } else {
        return true;
      }
    } // end filter fn
  });
	} catch (err) {
		console.log("Failed to copy to solution: " + err);
	}

}




