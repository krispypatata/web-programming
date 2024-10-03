/*

CMSC 100 Week 4 - Web Servers
Notes:
    To run this program, run:
        npm install
        node index.js

    * You need to install the used packages first since the node_modules folder is ignored by git

*/

const express = require('express');
const bodyParser =require('body-parser');

const app = express();

// use the body parser package to parse the message in the body that is received by the POST endpoint
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// GET endpoint for 'home'
app.get('/', (req, res) => {
    // http://localhost:3001/

    // res.send() is similar to return in functions; code after that is not executed anymore
    res.send("Hello!");
});

app.get('/greeting', (req, res) => {
    //http://localhost:3001/greeting?name="Alexander"

    // req.query holds the URL parameters of GET requests
    console.log(req.query);
    res.send('Hello '+ req.query.name);
})

app.post('/submit-data', (req, res) => {
    //http:localhost:3001/submit-data

    // req.body holds the message sent by POST requests
    const { fname, password, message } = req.body;

    // console.log(req.body.fname);
    console.log("["+ fname + "]: "+ message);
    res.send("Received a POST request");
});

// the server listens at port 3001
app.listen(3001, () => { 
    console.log("Server started at port 3001")
});
