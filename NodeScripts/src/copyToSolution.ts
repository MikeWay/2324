/// <reference path="./typings/index.d.ts" />
// #!/usr/bin/env node
// Edit JS: remove the <reference make the shenbang the top line in the file
import * as fs from "fs-extra";

var SRC_DIR_ROOT = "C:\\Course2324\\Exercises\\FlySharp\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\Solutions\\";


console.log(process.argv);

let exercise = process.argv[2];

let targetDir = TARGET_DIR_ROOT + exercise + "\\src";

if(process.argv.length < 3){
  console.log("You must supply an exercise number as the target");
  process.exit(1);
}

fs.copy(SRC_DIR_ROOT + "src", targetDir);

console.log("Copy to solution " + exercise + " complete");
