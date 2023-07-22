import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import QuestionComponent from "./QuestionComponent";

function ModalWindow(props) {
  const { isOpen, onClose, questions } = props;
  const [quitModalOpen, setQuitModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const toggleQuitModal = () => {
    setQuitModalOpen(!quitModalOpen);
  };

  const handleQuit = () => {
    onClose(); // Return to Home component
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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
          Quiz Questions {/* Add a title for the modal */}
        </ModalHeader>
        <ModalBody>
          <div key={currentQuestion.num}>
            <h5>{currentQuestion.text}</h5>
            <QuestionComponent options={currentQuestionOptions} />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleNextQuestion}>
            Next Question
          </Button>
          <Button color="secondary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalWindow;