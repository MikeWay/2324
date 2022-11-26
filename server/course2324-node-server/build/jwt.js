"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processLoginAndIssueToken = void 0;
const jwtgen = __importStar(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const RSA_PRIVATE_KEY = fs_1.default.readFileSync('./security/private.key');
function processLoginAndIssueToken(ctx) {
    const credentials = ctx.request.body;
    const email = credentials.email;
    const password = credentials.password;
    if (validateEmailAndPassword(email, password)) {
        const userId = "UID: 123456789"; /* IN a full implementation we would call something like: findUserIdForEmail(email);*/
        const jwtBearerToken = jwtgen.sign({}, RSA_PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 120,
            subject: userId
        });
        ctx.body = JSON.stringify({ token: jwtBearerToken, expiresIn: 120 });
    }
    else {
        // send status 401 Unauthorized
        ctx.status = 401;
    }
}
exports.processLoginAndIssueToken = processLoginAndIssueToken;
function validateEmailAndPassword(email, password) {
    if (email === 'user@learningtree.com' && password === 'password')
        return true;
    return false;
}
