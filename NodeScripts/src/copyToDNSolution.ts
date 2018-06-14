#!/usr/bin/env node
import * as fs from "fs-extra";

var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";


console.log(process.argv);

let exercise = process.argv[2];

let targetDir = TARGET_DIR_ROOT + exercise ;
let destDir = targetDir + "\\src";
let srcDir = SRC_DIR_ROOT + exercise + "\\src";

if(process.argv.length < 3){
  console.log("You must supply a donow number as the target");
  process.exit(1);
}


try {
  fs.removeSync(destDir);
  fs.copySync(srcDir, targetDir);

  console.log("Copy to solution " + exercise + " complete");
 } catch (err) {
  console.log("Failed to copy to solution: " + err);
 }
