import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set the app element for accessibility
Modal.setAppElement('#root');

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [errors, setErrors] = useState({ title: '', description: '', link: '' });
  const [submitError, setSubmitError] = useState('');

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setErrors({ title: '', description: '', link: '' }); // Clear errors on close
    setSubmitError('');
  };

  const validateForm = () => {
    const newErrors = { title: '', description: ''};
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }
    if (!link.trim() || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(link)) {
      newErrors.link = 'A valid URL is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const cardData = {
      title,
      description,
      link,
    };

    try {
      const response = await fetch('http://localhost:3000/api/v1/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Card created:', result);
      
      closeModal();
    } catch (error) {
      console.error('Error posting data:', error);
      setSubmitError('There was a problem submitting your request. Please try again later.');
    }
  };

  return (
    <div>
      <nav className="header">
        <div className="logo">Abstract | Help Center</div>
        <button className="request-btn" onClick={openModal}>Submit a request</button>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Submit a Request"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Submit a Request</h2>
        {submitError && <p className="error-message">{submitError}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
            {errors.title && <p className="error-message">{errors.title}</p>}
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              
            />
            {errors.description && <p className="error-message">{errors.description}</p>}
          </div>
          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              
            />
            {errors.link && <p className="error-message">{errors.link}</p>}
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={closeModal}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default Navbar;
