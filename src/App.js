import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './components/Home';
import ModalWindow from './components/ModalWindow';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container-fluid">
      <Header />
      <Home onCardClick={handleCardClick} />
      <Home onCardClick={handleCardClick} />
      <Home onCardClick={handleCardClick} />
      <Home onCardClick={handleCardClick} />
      <Home onCardClick={handleCardClick} />

      {isModalOpen &&
        ReactDOM.createPortal(
          <ModalWindow isOpen={isModalOpen} onClose={handleCloseModal} />,
          document.getElementById('modal-root')
        )}
    </div>
  );
}

export default App;