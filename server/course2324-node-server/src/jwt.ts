import * as jwtgen from 'jsonwebtoken';
import fs from 'fs';
import { ParameterizedContext } from 'koa';
import { IRouterParamContext } from 'koa-router';


const RSA_PRIVATE_KEY = fs.readFileSync('./security/private.key');

export function processLoginAndIssueToken(ctx: ParameterizedContext<any, IRouterParamContext<any, {}>, any>) {
    const credentials = ctx.request.body as Credentials;
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
    } else {
        // send status 401 Unauthorized
        ctx.status = 401;
    }
}

function validateEmailAndPassword(email: string, password: string) {
    if (email === 'user@learningtree.com' && password === 'password')
        return true;
    return false
}

interface Credentials {
    email: string,
    password: string
}