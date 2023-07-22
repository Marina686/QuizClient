import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; 
import QuestionComponent from "./QuestionComponent";
import QuitModal from './QuitModal'

function ModalWindow(props) {
  const { isOpen, onClose, questions } = props;
  const [quitModalOpen, setQuitModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false); // State to track whether an option is selected

  const toggleQuitModal = () => {
    setQuitModalOpen(!quitModalOpen);
  };

  const handleQuit = () => {
    onClose(); // Return to Home component
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsOptionSelected(false); // Reset the option selection state for the next question
    }
  };

  // Function to be called when an option is selected in QuestionComponent
  const handleOptionSelected = () => {
    setIsOptionSelected(true);
  };

  const closeBtn = (
    <button className="close" onClick={toggleQuitModal} type="button">
      &times;
    </button>
  );

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionOptions = currentQuestion ? currentQuestion.options : [];

  return (
    <div>
      <Modal isOpen={isOpen} toggle={onClose} fullscreen>
        <ModalHeader toggle={onClose} close={closeBtn}>
          Quiz Questions
        </ModalHeader>
        <ModalBody>
          <div key={currentQuestion.num}>
            <h5>{currentQuestion.text}</h5>
            {/* Pass handleOptionSelected to QuestionComponent */}
            <QuestionComponent
              options={currentQuestionOptions}
              onOptionSelected={handleOptionSelected}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          {/* Disable "Submit Answer" button when no option is selected */}
          <Button color="secondary" onClick={onClose} disabled={!isOptionSelected}>
            Submit Answer
          </Button>
          <Button color="primary" onClick={handleNextQuestion}>
            Next Question
          </Button>
        </ModalFooter>
      </Modal>

      <QuitModal isOpen={quitModalOpen} toggle={toggleQuitModal} onQuit={handleQuit} />
    </div>
  );
}

export default ModalWindow;