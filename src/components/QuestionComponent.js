import React, { useState } from "react";
import './../App.css'; 

const QuestionComponent = ({ options, onOptionSelected }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
    onOptionSelected(); // Call the function to notify ModalWindow that an option is selected
  };

  return (
    <div>
      {options.map((option, index) => (
        <div
          className={`card ${selectedOptionIndex === index ? "selected" : ""}`}
          key={index}
          onClick={() => handleOptionClick(index)}
        >
          <div className="card-body">{option.text}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;