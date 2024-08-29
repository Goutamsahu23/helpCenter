import React, { useEffect, useState } from 'react';
import Card from './Card';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CardsGrid = ({ searchQuery }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/cards')
      .then(response => response.json())
      .then(data => setCards(data));
  }, []);

  const openModal = (cardTitle) => {
    console.log(`Opening modal for card: ${cardTitle}`);
    fetch(`http://localhost:3000/api/v1/cards/${cardTitle}`)
      .then(response => response.json())
      .then(data => {
        console.log('Card data:', data);
        setSelectedCard(data);
        setModalIsOpen(true);
      })
      .catch(err => console.error('Error fetching card data:', err));
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCard(null);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="card-section">
      {filteredCards.length > 0 ? (
        filteredCards.map(card => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            onClick={() => openModal(card.title)}
          />
        ))
      ) : (
        <p>No cards available</p>
      )}
      {selectedCard && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Card Details"
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <h2>{selectedCard.title}</h2>
          <p>{selectedCard.description}</p>
          <a href={selectedCard.link} target="_blank" rel="noopener noreferrer">{selectedCard.link}</a>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default CardsGrid;
