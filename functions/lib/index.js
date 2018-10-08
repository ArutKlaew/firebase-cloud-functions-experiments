"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require('firebase-functions');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
    response.send(`${Date.now()}`);
});
app.get('/hello/:name', (request, response) => {
    let name = request.params.name;
    response.send(`hello ${name}`);
});
exports.app = functions.https.onRequest(app);
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send('Hello from another function');
});
exports.helloAnother = functions.https.onRequest((request, response) => {
    response.send('This is also another functoin');
});
//# sourceMappingURL=index.js.map