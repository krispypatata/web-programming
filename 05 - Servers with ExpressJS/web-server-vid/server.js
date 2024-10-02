// Import the necessary packages
const express = require("express");
const bodyParser = require("body-parser");

// Instantiate the server
const app = express();

// Use the body parser package to parse the message in the body that is received by the POST endpoint
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET endpoint for 'home'
app.get("/", (req, res) => {
  // res.send() is similar to return in a function; Code after res.send() is not executed anymore
  res.send("Hello");
});

app.get("/greeting", (req, res) => {
  // req.query holds the URL parameters of GET requests
  console.log(req.query);
  res.send("Hello " + req.query.name);
});

// GET & POST
app.post("/submit-data", (req, res) => {
  // req.body holds the message sent by POST requests
  // console.log(req.body.fname);
  console.log('\nReceived a POST request to /submit-data');
  console.log('\n/submit-data');
  const { fname, password, message } = req.body;
  console.log(`[${fname}]: ${message}`)
  // { method: "POST", form: data },
  res.send('Received a POST request!');
});

// The server listens at port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
