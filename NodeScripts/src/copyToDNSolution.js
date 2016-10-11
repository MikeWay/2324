#!/usr/bin/env node
var fs = requirejs('fs-extra')
var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";
console.log(process.argv);
let exercise = process.argv[2];
let targetDir = TARGET_DIR_ROOT + exercise + "\\src";
let srcDir = SRC_DIR_ROOT + exercise + "\\src";
if (process.argv.length < 3) {
    console.log("You must supply a donow number as the target");
    process.exit(1);
}
fs.copy(srcDir, targetDir);
targetDir = TARGET_DIR_ROOT + exercise + "\\e2e";
srcDir = SRC_DIR_ROOT + exercise + "\\e2e";
console.log("Copy to solution " + exercise + " complete");
