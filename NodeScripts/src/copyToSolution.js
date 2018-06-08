#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
console.log(process.argv);
let SRC_DIR_ROOT = ".";
let TARGET_DIR_ROOT = "../../Solutions/";
let exercise = process.argv[2];
let targetDir = TARGET_DIR_ROOT + exercise;
if (process.argv.length < 3) {
    console.log("You must supply an exercise number as the target");
    process.exit(1);
}
let srcDir = SRC_DIR_ROOT + "/src";
let destDir = targetDir + "/src";
try {
    fs.removeSync(destDir);
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
