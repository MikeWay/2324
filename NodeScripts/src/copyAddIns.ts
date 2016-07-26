/// <reference path="./typings/index.d.ts" />
// #!/usr/bin/env node
// Edit JS: remove the <reference make the shenbang the top line in the file
// Copies files rrom the AddIns directory (identified by the command line argument)
// To the exercises/FlySharp directory

import * as fs from "fs-extra";


var SRC_DIR_ROOT = "C:\\Course2324\\AddIns\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\Exercises\\FlySharp\\";


let exercise = process.argv[2];

let srcDir = SRC_DIR_ROOT + exercise;

if(process.argv.length < 3){
  console.log("You must supply an exercise number to copy from");
  process.exit(1);
}

console.log("Copy from " + srcDir + " to " + TARGET_DIR_ROOT);

fs.copy(srcDir, TARGET_DIR_ROOT,  (err: Error) => {if (err) console.log("Failure" + err)});

console.log("Copy add ins to exercise " + exercise + " complete");
