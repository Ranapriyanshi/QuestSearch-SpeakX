const Question = require("../../models/Question")

const searchQuestions = async (call, callback) => {
  const { query, type, page, limit } = call.request;

  const currentPage = Math.max(1, page || 1);
  const perPage = Math.min(100, limit || 10);

  try {
    const filter = { title: new RegExp(query, "i") };
    if (type) {
      filter.type = type;
    }

    const questions = await Question.find(filter)
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    const total = await Question.countDocuments(filter);

    callback(null, {
      questions: questions.map((q) => ({
        id: q._id.toString(),
        title: q.title,
        type: q.type,
        anagramType: q.anagramType || null,
        blocks: q.blocks || [],
        options: q.options || [],
        solution: q.solution || "",
      })),
      total,
    });
  } catch (error) {
    console.error("Error in searchQuestions:", error);
    callback(error);
  }
};

module.exports = { searchQuestions };
