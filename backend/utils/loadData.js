require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Question = require("../models/Question")

const questionsFilePath = path.join(__dirname, "../data/questions.json");
let questionsData = JSON.parse(fs.readFileSync(questionsFilePath, "utf-8"));

const convertObjectId = (obj) => {
  if (obj && obj.hasOwnProperty("$oid")) {
    return obj.$oid;
  }
  return obj;
};

questionsData = questionsData.map((question) => {
  question._id = convertObjectId(question._id);
  question.siblingId = convertObjectId(question.siblingId);
  return question;
});

const loadData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Clear existing data
    await Question.deleteMany({});
    console.log("Existing questions deleted");

    // Insert JSON data into MongoDB
    await Question.insertMany(questionsData);
    console.log("Questions successfully loaded into the database");
    process.exit(0);
  } catch (error) {
    console.error("Error loading data:", error);
    process.exit(1);
  }
};

loadData();
