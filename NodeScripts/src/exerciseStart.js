#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const EX_MAPPINGS = {
    "Ex2.2": "Ex2.1_Bonus",
    "Ex3.1": "Ex2.2_Bonus_2",
    "Ex4.1": "Ex3.1",
    "Ex4.2": "Ex4.1_Bonus_2",
    "Ex5.1": "Ex4.2",
    "Ex5.2": "Ex5.1_Bonus_1",
    "Ex6.1": "Ex5.2_Bonus_3",
    "Ex6.2": "Ex6.1_Bonus_2",
    "Ex7.1": "Ex6.2_Bonus_3",
    "Ex7.2": "Ex7.1_Bonus_1",
    "Ex8.1": "Ex7.2_Bonus_1",
    "Ex9.1": "Ex8.1_Bonus_1"
};
/*
Ex2.1_Bonus
Ex2.2_Bonus_2
Ex3.1
Ex5.1
Ex5.2_Bonus
Ex6.1_Bonus
Ex6.2_Bonus
Ex7.1
Ex7.2_Bonus
Ex8.1
Ex9.1
*/
const SRC_DIR_ROOT = "C:\\Course2324\\Solutions\\";
const BACKUP_DIR_ROOT = "C:\\Course2324\\Backup\\";
const TARGET_DIR_ROOT = "C:\\Course2324\\Exercises\\FlySharp";
const SRC_DIR = "\\src";
const E2E_DIR = "\\e2e";
let exercise = process.argv[2];
function doBackup(exercise) {
    // Backup src
    let destDir = BACKUP_DIR_ROOT + exercise + SRC_DIR;
    let srcDir = TARGET_DIR_ROOT + SRC_DIR;
    console.log("About to copy " + srcDir + " to " + destDir);
    try {
        fs.mkdirsSync(destDir);
    }
    catch (err) {
        console.log("Failed to create backup directories");
    }
    try {
        fs.copySync(srcDir, destDir);
    }
    catch (err) {
        console.log("Failure" + err);
    }
    // Backup e2e
    destDir = BACKUP_DIR_ROOT + exercise + E2E_DIR;
    srcDir = TARGET_DIR_ROOT + E2E_DIR;
    console.log("About to copy " + srcDir + " to " + destDir);
    try {
        fs.mkdirsSync(destDir);
    }
    catch (err) {
        console.log("Failed to create directories");
    }
    try {
        fs.copySync(srcDir, destDir);
    }
    catch (err) {
        console.log("Failure backing up" + err);
    }
}
if (process.argv.length < 3) {
    console.log("Initialises an exercise to a standard start point");
    console.log("Usage exStart [Exercise Number].");
    console.log("You must supply an exercise number to copy from");
    process.exit(1);
}
// Locate the exercise in the EX_MAPPINGS
let exSource = EX_MAPPINGS[exercise];
if (exSource == null) {
    console.log("Unknown exercise name [" + exercise + "]. Did you type it correctly?");
    process.exit(1);
}
doBackup(exercise);
// Set up the srcDir based on the lookup of the solutions directory
let srcDir = SRC_DIR_ROOT + exSource;
console.log("Copy from " + srcDir + " to " + TARGET_DIR_ROOT);
try {
    fs.copy(srcDir, TARGET_DIR_ROOT, 'clobber');
}
catch (err) {
    console.log("Failure copying to ex dir" + err);
}
console.log("Setting up " + exercise + " complete");
