import React from "react";
import "../App.css";

const highlightText = (text, query) => {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span
        key={index}
        style={{ backgroundColor: "yellow", fontWeight: "bold" }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const QuestionList = ({
  results,
  toggleSolution,
  showSolution,
  query,
  className,
}) => (
  <ul type="none" className={className}>
    {results.map((question) => (
      <div className="question-card" key={question.id}>
        <li>
          <strong>✒️ {highlightText(question.title, query)}</strong> (
          {question.type})
          {question.type === "ANAGRAM" ? (
            <>
              <ol className="options-list">
                {question.shuffledBlocks.map((block, index) => (
                  <li key={index}>{highlightText(block.text, query)}</li>
                ))}
              </ol>
              <button onClick={() => toggleSolution(question.id)}>
                {showSolution[question.id] ? "Hide Solution" : "Show Solution"}
              </button>
              <div
                className={`solution ${
                  showSolution[question.id] ? "visible" : ""
                }`}
              >
                <p>
                  <span style={{ "fontSize": "0.8em" }}>✅ &nbsp; </span>
                  <strong> Solution:&nbsp;</strong> {question.solution}
                </p>
              </div> 
            </>
          ) : question.type === "MCQ" ? (
            <>
              <ol>
                {question.options.map((option, index) => (
                  <li key={index}>{highlightText(option.text, query)}</li>
                ))}
              </ol>
              <button onClick={() => toggleSolution(question.id)}>
                {showSolution[question.id] ? "Hide Solution" : "Show Solution"}
              </button>
              <div
                className={`solution ${
                  showSolution[question.id] ? "visible" : ""
                }`}
              >
                <p>
                <span style={{ "fontSize": "0.8em" }}>✅ &nbsp; </span>
                  <strong> Solution:&nbsp;</strong>{" "}
                  {question.options
                    .filter((option) => option.isCorrectAnswer)
                    .map((option) => option.text)
                    .join(", ")}
                </p>
              </div>
            </>
          ) : null}
        </li>
      </div>
    ))}
  </ul>
);

export default QuestionList;
