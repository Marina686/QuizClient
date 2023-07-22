import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";

function QuitModal({ isOpen, toggle, onQuit }) {
  const size = "sm";

  return (
    <div>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        size={size}
        className="text-center"
      >
        <ModalBody>
          <h5 className="mb-4">Quit Quiz</h5>
          <div className="d-grid gap-2">
            <Button color="primary" onClick={onQuit}>
              Quit Quiz
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Continue Quiz
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default QuitModal;
