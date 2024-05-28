import { useState, useEffect } from 'react';
import './App.css';
import UpdateModal from './components/UpdateModal.jsx';
import SummaryTableModal from './components/SummaryTableModal.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching data from https://rickandmortyapi.com/api/character:', error);
      });
  }, []);

  const handleClickImage = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseUpdater = () => {
    setIsModalOpen(false);
  };

  const handleUpdateCharacter = (updatedCharacter) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === updatedCharacter.id ? updatedCharacter : char
      )
    );
  };

  const openSummaryModal = () => {
    setIsSummaryModalOpen(true);
  };

  const handleCloseSummary = () => {
    setIsSummaryModalOpen(false);
  };

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <h4><button onClick={openSummaryModal}>Check summary</button></h4>
      <div className="characters">
        {characters.map(character => (
          <div className="character-card">
            <img
              src={character.image}
              alt={character.name}
              onClick={() => handleClickImage(character)}
              className="character-image"
            />
            <h2>{character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Type: {character.type}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Episode: {character.episode}</p>
            <p>Location: {character.location.name}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>
      {selectedCharacter && (
        <UpdateModal isOpen={isModalOpen} character={selectedCharacter} onClose={handleCloseUpdater} onUpdateCharacter={handleUpdateCharacter}
        />
      )}
      <SummaryTableModal
        isOpen={isSummaryModalOpen}
        characters={characters}
        onClose={handleCloseSummary}
      />
    </>
  );
}

export default App;
