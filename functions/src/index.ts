const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')

const app = express()
admin.initializeApp(functions.config().firebase)

const db = admin.firestore();
console.log(functions.config().firebase)


app.get('/',(request, response) => {
    response.send('App created')
})

app.get('/hello/:name',(request, response) => {
    let name = request.params.name
    response.send(`hello ${name}`)
})

exports.app = functions.https.onRequest(app);

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send('Hello from another function')
})

export const helloAnother = functions.https.onRequest((request, response) => {
    response.send('This is also another functoin')
})