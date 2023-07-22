import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import ModalWindow from './components/ModalWindow';
import './App.css'; 
import axios from 'axios';
import { mapDbModelsToQuestions } from './utility/utility';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {    
    setModalOpen(false);
  };

  useEffect(() => {    
    axios
      .get("http://localhost:3001/api/Db")  
      .then((response) => {
        const questions = mapDbModelsToQuestions(response.data);
        console.log("Setting questions state:", questions); // Logging for debugging
        setQuestions(questions);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setQuestions([]);
      });
  }, []);
    
  return (
    <div className="container-fluid"> 
      <Header /> 
      <Home onCardClick={handleCardClick} questions={questions} />
      {isModalOpen && (
        ReactDOM.createPortal(
          <ModalWindow
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            questions={questions}
          />,
          document.getElementById("modal-root")
        )
      )}
    </div>
  );
}

export default App;
