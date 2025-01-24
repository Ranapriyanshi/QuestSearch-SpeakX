const mongoose = require("mongoose");
const BlockSchema = require("./Block");
const OptionSchema = require("./Option");

/**
 * Question Schema
 * Represents a question in the database, including various types like MCQ, Anagrams, etc.
 */
const QuestionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    anagramType: { type: String },
    blocks: [BlockSchema],
    options: [OptionSchema],
    solution: { type: String },
    siblingId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
