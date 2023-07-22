import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import QuestionComponent from "./QuestionComponent";
import QuitModal from "./QuitModal";

function ModalWindow(props) {
  const { isOpen, onClose, questions } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quitModalOpen, setQuitModalOpen] = useState(false);

  const toggleQuitModal = () => {
    setQuitModalOpen(!quitModalOpen);
  };

  const toggleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      onClose();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleQuit = () => {
    onClose(); // Return to Home component
  };

  const closeBtn = (
    <button className="close" onClick={toggleQuitModal} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleNextQuestion} fullscreen>
        <ModalHeader toggle={toggleNextQuestion} close={closeBtn}>
          {questions[currentQuestion]?.text} {/* Display the current question text */}
        </ModalHeader>
        <ModalBody>
          {questions[currentQuestion]?.options ? (
            <QuestionComponent options={questions[currentQuestion]?.options} />
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleNextQuestion}>
            {currentQuestion === questions.length - 1 ? "Close" : "Next Question"}
          </Button>
        </ModalFooter>
      </Modal>
      <QuitModal
        isOpen={quitModalOpen}
        toggle={toggleQuitModal}
        onQuit={handleQuit}
      />
    </div>
  );
}

export default ModalWindow;
