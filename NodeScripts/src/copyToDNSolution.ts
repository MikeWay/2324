#!/usr/bin/env node
import * as fs from "fs-extra";

// var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
// var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";

const SRC_DIR_ROOT = "."; // CWD
const TARGET_DIR_ROOT = "..";


console.log(process.argv);

// let exercise = process.argv[2];
//Identify the DoNow from the cwd

const CWD = process.cwd();
const DO_NOW = CWD.slice(CWD.lastIndexOf('/') + 1);


let destDir = `${TARGET_DIR_ROOT}/${DO_NOW}-sol` ;
//let destDir = `${targetDir}_SOL`;
let srcDir = SRC_DIR_ROOT;

// if(process.argv.length < 3){
//   console.log("You must supply a donow number as the target. e.g. DoNow22");
//   process.exit(1);
// }


try {

  console.log(`Src ${srcDir} Dest ${destDir}`)
  fs.removeSync(destDir);
  fs.copySync(srcDir, destDir);

  console.log("Copy to solution " + DO_NOW + " complete");
 } catch (err) {
  console.log("Failed to copy to solution: " + err);
 }
