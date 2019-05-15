#!/usr/bin/env node
"use strict";
// Copies files rrom the AddIns directory (identified by the command line argument)
// To the exercises/FlySharp directory
exports.__esModule = true;
var fs = require("fs-extra");
console.log(process.argv);
var SRC_DIR_ROOT = ".";
var TARGET_DIR_ROOT = "../../Solutions/";
var exercise = process.argv[2];
var targetDir = TARGET_DIR_ROOT + exercise;
if (process.argv.length < 3) {
    console.log("You must supply an exercise number as the target");
    process.exit(1);
}
var srcDir = SRC_DIR_ROOT + "/src";
var destDir = targetDir + "/src";
try {
    fs.removeSync(targetDir);
    doCopy(srcDir, destDir);
    srcDir = SRC_DIR_ROOT + "/e2e";
    destDir = targetDir + "/e2e";
    doCopy(srcDir, destDir);
    console.log("Copy to solution " + exercise + " complete");
}
catch (err) {
    console.log("Failed to copy to solution: " + err);
}
function doCopy(srcDir, destDir) {
    console.log("Copying from " + srcDir + " to " + destDir);
    try {
        fs.ensureDirSync(destDir);
        fs.copySync(srcDir, destDir, { overwrite: true });
    }
    catch (err) {
        console.log("Failed to copy to solution: " + err);
    }
}
