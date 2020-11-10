#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
// var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
// var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";
const SRC_DIR_ROOT = ".";
const TARGET_DIR_ROOT = "../../DoNow_Solutions/";
console.log(process.argv);
let exercise = process.argv[2];
let targetDir = TARGET_DIR_ROOT + exercise;
let destDir = targetDir + "/src";
let srcDir = SRC_DIR_ROOT + "/src";
if (process.argv.length < 3) {
    console.log("You must supply a donow number as the target");
    process.exit(1);
}
try {
    console.log(`Src ${srcDir} Dest ${destDir}`);
    fs.removeSync(destDir);
    fs.copySync(srcDir, destDir);
    console.log("Copy to solution " + exercise + " complete");
}
catch (err) {
    console.log("Failed to copy to solution: " + err);
}
