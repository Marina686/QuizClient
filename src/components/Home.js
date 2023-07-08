import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Home = ({ onCardClick }) => {
  return (
     
      <div className="card col-sm-12 " onClick={onCardClick}>
        <div className="card-body">
          <h4>Test1</h4>
          <p>10 Questions</p>
          <div className="arrowIcon" ><FontAwesomeIcon icon={faAngleRight} />
          </div>
          
        </div>
      </div>
    
  );
};

export default Home;