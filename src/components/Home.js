import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Home = ({ onCardClick, questions }) => {
  const numQuestions = questions ? questions.length : 0;

  return (
    <div className="card col-sm-12 " onClick={onCardClick}>
      <div className="card-body">
        <h4>Test1</h4>
        <p>{numQuestions} Questions</p>
        <div className="arrowIcon">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default Home;