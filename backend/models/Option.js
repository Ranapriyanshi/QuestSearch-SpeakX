const mongoose = require("mongoose");

/**
 * Option Schema
 * Represents an option for multiple-choice questions.
 */
const OptionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    isCorrectAnswer: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = OptionSchema;
