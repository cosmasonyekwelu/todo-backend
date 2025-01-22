// Purpose: Defines data Models or Schemers for database integrations

const mongoose = require("mongoose"); //Import Mongoose

const schema = mongoose.Schema; //Shortcut to access Mongoose schema class

// Define the schema for task based UI, if there is a price/number then it will be number
const taskSchema = new schema({
  title: String, //Title of the task
  description: String, //Description of the task
  tags: String, // Tag associated with the "urgent or important"
});

module.exports = mongoose.model("task", taskSchema); //Export the model to be used for Request operations in the controller
