import React from 'react';
import '../assets/css/style.css';

const SummaryTableModal = ({ isOpen, characters, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Summary Table of First 10 Characters</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {characters.slice(0, 10).map(character => (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.location.name}</td>
                <td>{character.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTableModal;
