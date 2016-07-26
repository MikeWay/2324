#!/usr/bin/env node
"use strict";
var fs = require("fs-extra");
var SRC_DIR_ROOT = "C:\\Course2324\\DoNows\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\DoNow_Solutions\\";
console.log(process.argv);
var exercise = process.argv[2];
var targetDir = TARGET_DIR_ROOT + exercise + "\\src";
var srcDir = SRC_DIR_ROOT + exercise + "\\src";
if (process.argv.length < 3) {
    console.log("You must supply a donow number as the target");
    process.exit(1);
}
fs.copy(srcDir, targetDir);
console.log("Copy to solution " + exercise + " complete");
