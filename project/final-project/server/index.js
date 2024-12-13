// Necessary import statement(s)
import express from "express";
import connectToDatabase from "./config/database.js";

// Instantiate the server
const app = express();

// Port number
const PORT = 3000;

// Use the body-parser that comes with the express package
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Establish connection with MongoDB
connectToDatabase();

// TODO: Delete this later
// Initial Endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
