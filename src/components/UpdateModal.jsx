import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';

const UpdateModal = ({ isOpen, character, onClose, onUpdateCharacter }) => {
  if (!isOpen) return null;

  const [name, setName] = useState(character.name);
  const [location, setLocation] = useState(character.location.name);
  const [status, setStatus] = useState(character.status);
  
  useEffect(() => {
    setName(character.name);
    setLocation(character.location.name);
    setStatus(character.status);
  }, [character]);

  const handleSubmitUpdate = () => {
    const updatedCharacter = {
      ...character,
      name,
      location: {
        ...character.location,
        name: location,
      },
      status,
    };
    onUpdateCharacter(updatedCharacter);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>×</button>
        <h2>Editing Character</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(edit) => setName(edit.target.value)} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(edit) => setLocation(edit.target.value)} />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input type="text" value={status} onChange={(edit) => setStatus(edit.target.value)} />
        </div>
        <button onClick={handleSubmitUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateModal;
