// Purpose: Maps HTTP routes to controller functions.

const express = require("express"); //Imported express framework
const {
  getAllTask,
  createTask,
  editTask,
  deleteTask,
} = require("../controller/taskController");

const router = express.Router(); //Created a new router instance

router.get("/get", getAllTask); // Route to get all tasks from the controller, handled by getAllTask function in the controller

router.post("/create", createTask); // Route to create a new task fom the controller, handled by createTask function in the controller

router.patch("/:id", editTask); //Route to edit a specific task by its ID, handled by editTask function in the controller

router.delete("/:id", deleteTask); //Route to delete a specific task by its ID, handled by deleteTask function in the controller

module.exports = router; // Export the router to be used in the main server file app.js
