#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var fs = require("fs-extra");
// var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
// var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";
var SRC_DIR_ROOT = ".";
var TARGET_DIR_ROOT = "../../DoNow_Solutions/";
console.log(process.argv);
var exercise = process.argv[2];
var targetDir = TARGET_DIR_ROOT + exercise;
var destDir = targetDir + "/src";
var srcDir = SRC_DIR_ROOT + "/src";
if (process.argv.length < 3) {
    console.log("You must supply a donow number as the target");
    process.exit(1);
}
try {
    console.log("Src " + srcDir + " Dest " + destDir);
    fs.removeSync(destDir);
    fs.copySync(srcDir, destDir);
    console.log("Copy to solution " + exercise + " complete");
}
catch (err) {
    console.log("Failed to copy to solution: " + err);
}
