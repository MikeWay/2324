/// <reference path="./typings/index.d.ts" />
// #!/usr/bin/env node
// Edit JS: remove the <reference make the shenbang the top line in the file
// Copies files rrom the AddIns directory (identified by the command line argument)
// To the exercises/FlySharp directory

import * as fs from "fs-extra";

const EX_MAPPINGS = {
	"Ex2.2" : "Ex2.1_Bonus",
	"Ex3.1" : "Ex2.2_Bonus_2"
	/*
	"" : "",
	"" : "",
	"" : "",
	"" : "",
	"" : "",
	"" : "",
	"" : ""*/
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
var SRC_DIR_ROOT = "C:\\Course2324\\Solutions\\";
var TARGET_DIR_ROOT = "C:\\Course2324\\Exercises\\FlySharp\\";


let exercise = process.argv[2];


if(process.argv.length < 3){
  console.log("Initialises an exercise to a standard start point");
  console.log("Usage exStart [Exercise Number].");
  console.log("You must supply an exercise number to copy from");
  process.exit(1);
}

// Locate the exercise in the EX_MAPPINGS

let exSource = EX_MAPPINGS[exercise];
if(exSource == null){
	console.log("Unknown exercise name [" + exercise + "]. Did you type it correctly?");
	process.exit(1);
}

let srcDir = SRC_DIR_ROOT + exSource;

console.log("Copy from " + srcDir + " to " + TARGET_DIR_ROOT);

fs.copy(srcDir, TARGET_DIR_ROOT,  (err: Error) => {if (err) console.log("Failure" + err)});

console.log("Setting up " + exercise + " complete");



