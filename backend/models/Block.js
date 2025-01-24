const mongoose = require("mongoose");

/**
 * Block Schema
 * Represents a block element in a question, typically used for anagrams or puzzles.
 */
const BlockSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    showInOption: { type: Boolean, default: true },
    isAnswer: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = BlockSchema;
