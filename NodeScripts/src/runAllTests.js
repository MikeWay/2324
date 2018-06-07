#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
//import {Promise} from 'es6-promise'
const EX_MAPPINGS = [
    "Ex2.2",
    "Ex3.1",
    "Ex4.1",
    "Ex4.2",
    "Ex5.1",
    "Ex5.2",
    "Ex6.1",
    "Ex6.2",
    "Ex6.3",
    "Ex7.1",
    "Ex7.2",
    "Ex8.1",
    "Ex9.1",
    "Final"
];
function runATest(index) {
    let options = { cwd: 'c:\\course2324\\Exercises\\FlySharp' };
    let prom = new Promise((resolve, reject) => {
        const exStart = child_process_1.exec('exStart ' + EX_MAPPINGS[index], options, (error, stdout, stderr) => {
            if (error) {
                console.log(stdout);
                //throw error;
                reject(error);
            }
            console.log(stdout);
            const child = child_process_1.exec('ng e2e', options, (error, stdout, stderr) => {
                console.log(stdout);
                if (error) {
                    console.log(error);
                    reject(error);
                }
                resolve();
            });
        });
    });
    return prom;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        try {
            while (i < EX_MAPPINGS.length) {
                console.log("Starting runATest for " + EX_MAPPINGS[i]);
                yield runATest(i);
                console.log("Back from runATest");
                i++;
            }
        }
        catch (e) {
            console.log("Error: " + e);
        }
    });
}
main();
// child.on('exit', function (code, signal) {
//   console.log('child process exited with ' +
//               `code ${code} and signal ${signal}`);
// });
// child.stdout.on('data', (data) => {
//   console.log(`child stdout:\n${data}`);
// });
// child.stderr.on('err', (err) => {
//   console.log(`child stdout:\n${err}`);
// });
// child.on('error', function (err) {
//   console.log('child error', err);
// });
