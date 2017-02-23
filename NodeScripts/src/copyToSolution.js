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
fs.copy(SRC_DIR_ROOT + "src", targetDir + "/src");
fs.copy(SRC_DIR_ROOT + "e2e", targetDir + "/e2e");
console.log("Copy to solution " + exercise + " complete");
