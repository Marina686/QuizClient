import React from "react";

const QuestionComponent = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div className="card" key={index}>
          <div className="card-body">{option}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;
