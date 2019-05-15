#!/usr/bin/env node
"use strict";
// Copies files from the Solutions directory 
// (identified by the command line argument)
// To the exercises/FlySharp directory
// Slightly different to the exStart script as it is intended to be used 
// when upgrading exercises to a new Angular version and it does not create a backup
exports.__esModule = true;
var fs = require("fs-extra");
var EX_MAPPINGS = {
    "Ex1.2": "Ex1.1",
    "Ex2.2": "Ex2.1_Bonus",
    "Ex3.1": "Ex2.2_Bonus_2",
    "Ex4.1": "Ex3.1",
    "Ex4.2": "Ex4.1_Bonus_2",
    "Ex5.1": "Ex4.2_Bonus_1",
    "Ex5.2": "Ex5.1_Bonus_1",
    "Ex6.1": "Ex5.2_Bonus_3",
    "Ex6.2": "Ex6.1_Bonus_2",
    "Ex6.3": "Ex6.2",
    "Ex7.1": "Ex6.3_Bonus_3",
    "Ex7.2": "Ex7.1_Bonus_1",
    "Ex8.1": "Ex7.2_Bonus_1",
    "Ex9.1": "Ex8.1_Bonus_2",
    "Final": "Ex9.1_Bonus_1"
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
//const SRC_DIR_ROOT = "C:\\Course2324\\Solutions\\";
//const BACKUP_DIR_ROOT = "C:\\Course2324\\Backup\\";
//const TARGET_DIR_ROOT = "C:\\Course2324\\Exercises\\FlySharp";
var SRC_DIR_ROOT = "../../Solutions/";
var TARGET_DIR_ROOT = ".";
var SRC_DIR = "/src";
var E2E_DIR = "/e2e";
var exercise = process.argv[2];
if (process.argv.length < 3) {
    console.log("Initialises an exercise to a standard start point");
    console.log("Usage exStart [Exercise Number].");
    console.log("You must supply an exercise number to copy from");
    console.log("Available exercise starts are:");
    for (var exName in EX_MAPPINGS) {
        if (EX_MAPPINGS.hasOwnProperty(exName)) {
            console.log(exName);
        }
    }
    process.exit(1);
}
// Locate the exercise in the EX_MAPPINGS
var exSource = EX_MAPPINGS[exercise];
if (exSource == null) {
    console.log("Unknown exercise name [" + exercise + "]. Did you type it correctly?");
    process.exit(1);
}
// Set up the srcDir based on the lookup of the solutions directory
var srcDir = SRC_DIR_ROOT + exSource;
console.log("Copy from " + srcDir + " to " + TARGET_DIR_ROOT);
try {
    fs.copySync(srcDir + "/src/index.html", TARGET_DIR_ROOT + "/src/index.html", { overwrite: true });
    fs.copySync(srcDir + "/src/app", TARGET_DIR_ROOT + "/src/app", { overwrite: true });
}
catch (err) {
    console.log("Failure copying to ex dir" + err);
}
console.log("Setting up " + exercise + " complete");
