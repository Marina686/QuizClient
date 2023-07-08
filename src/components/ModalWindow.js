import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./../App.css";
import QuitModal from "./QuitModal";

function ModalWindow(props) {
  const { isOpen, onClose } = props;
  const questions = [
    {
      question: "What is a Dockerfile?",
      options: [
        "A. Docker can build images automatically by reading the instructions from a file called Dockerfile.",
        "B. Docker can build audio automatically by reading the instructions from a file called Dockerfile.",
        "C. Docker cannot build images automatically by reading the instructions from a file called Dockerfile.",
      ],
    },
    {
      question: "What does the FROM instruction do in a Dockerfile?",
      options: [
        "A. FROM is an invalid instruction.",
        "B. FROM adds files from your Docker client’s current directory.",
        "C. FROM specifies the creator of the image.",
        "D. FROM creates a layer from a base Docker image.",
      ],
    },
    // Add more questions here...
  ];

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
          {questions[currentQuestion].question}
        </ModalHeader>
        <ModalBody>
          {questions[currentQuestion].options.map((option, index) => (
            <div className="card" key={index}>
              <div className="card-body">{option}</div>
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleNextQuestion}>
            {currentQuestion === questions.length - 1 ? "Close" : "Next Question"}
          </Button>
        </ModalFooter>
      </Modal>
      <QuitModal isOpen={quitModalOpen} toggle={toggleQuitModal} onQuit={handleQuit} />
    </div>
  );
}

export default ModalWindow;