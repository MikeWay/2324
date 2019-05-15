#!/usr/bin/env node
"use strict";
// Copies files rrom the AddIns directory (identified by the command line argument)
// To the exercises/FlySharp directory
exports.__esModule = true;
var fs = require("fs-extra");
var SRC_DIR_ROOT = "../../AddIns/";
var TARGET_DIR_ROOT = ".";
var exercise = process.argv[2];
var srcDir = SRC_DIR_ROOT + exercise;
if (process.argv.length < 3) {
    console.log("You must supply an exercise number to copy from");
    process.exit(1);
}
console.log("Copy from " + srcDir + " to " + TARGET_DIR_ROOT);
fs.copy(srcDir, TARGET_DIR_ROOT, function (err) { if (err)
    console.log("Failure" + err); });
console.log("Copy add ins to exercise " + exercise + " complete");
