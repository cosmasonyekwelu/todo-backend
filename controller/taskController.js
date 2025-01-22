// Purpose: Handles business logic and processes, incoming requests.
// Each controller must have request and response

// Status code: HTTP status code are standardized three-digit numbers that indicates the results of the request. A communication between the client and the server. E.G
// 200 OK: The request was successful. This works with the GET request.
// 201 CREATED: Works with a POST request.
// 404 PAGE NOT FOUND: Works with GET request.
// 500: INTERNAL SERVER ERROR.

const Task = require("../models/taskModel"); //Imported task model from model into controller

// ============================ CONTROLLER TO GET ALL TASK=====================================
const getAllTask = async (req, res) => {
  const tasks = await Task.find({}); //Retrieve all tasks from the database
  res.status(200).json({ tasks }); // Send the retrieved tasks in a JSON response and a status code of success
};

// =========================== CONTROLLER TO CREATE A NEW TASK ================================

const createTask = async (req, res) => {
  const { title, description, tags } = req.body; // Destructuring of post request required fields from the request.body of the website

  if (!title) {
    return res.status(400).json({ message: "Please provide a title" });
  }

  if (!description) {
    return res.status(400).json({ message: "Please provide a description" });
  }

  if (!tags) {
    return res.status(400).json({ message: "Please chose a tag" });
  }

  const task = await Task.create(req.body); // Create a new task with the request data

  res.status(201).json({ message: "Task created successfully", task }); // Send a status code with a message of success
};

// =========================== CONTROLLER FOR EDITING A TASK ================================

const editTask = async (req, res) => {
  const { id } = req.params; //Get the task ID from the request parameter

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body }); //update the task with the provided data that already exists with its id

  res.status(201).json({ message: "Task Updated Successfully" }); //Send the success  message if updated successfully
};

// =========================== CONTROLLER FOR DELETING A TASK ================================

const deleteTask = async (req, res) => {
  const { id } = req.params; //Get the task ID from the requested parameters
  const task = await Task.findOneAndDelete({ _id: id }); //Delete the task with the corresponding ID
  res.status(204).json({ message: "Task successfully Deleted" }); //Send a success message if deletion was successful
};

module.exports = { getAllTask, createTask, editTask, deleteTask }; //Export the controller functions to be used in the router
