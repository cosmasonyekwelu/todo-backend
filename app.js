require("dotenv").config(); //2: Import dotenv to access environment variables

const express = require("express"); //1: Import Express Framework

const mongoose = require("mongoose"); //3: Import mongoose to connect to the database after installation

const cors = require("cors"); //4: Import cors to enable Cross-Origin Resource Sharing

// After installation of express, then connect it to app.js

const app = express(); //Spinning up the server

const port = 3000; //Defined the port number for the server

//CORS (Cross-Origin Resource Sharing) when the frontend and the backend are from different origins(domain, protocol, or port), the browser blocks the request due to security reasons. To allow the request, we need to enable CORS.

app.use(cors()); //Middleware to enable CORS

const taskRouter = require("./routes/taskRouter"); //import the taskRouter from routes folder to be used in app.js

//Middleware: is like a middleman that processes a request before it reaches the database

app.use(express.json()); //Middleware to parse incoming json request from postman allowing access to the req.body

app.use("/api/task", taskRouter); //Mount the taskRouter at /api/task, all task related routes starts with /api/task

const start = async () => {
  try {
    // Connecting MongoDB using mongoose to our server
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected database");

    // Stat the server and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // Log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};
start();
// FOLDERS TO BE CREATED
// 1. MODEL
// 2. CONTROLLER
// 3. ROUTES

//onyecosmas
//T9IYvIm04JCyIDFT
//mongodb+srv://onyecosmas:T9IYvIm04JCyIDFT@cluster0.5e9pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
