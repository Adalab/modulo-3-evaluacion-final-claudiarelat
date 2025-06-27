import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'; 
import './styles/App.scss';
import Header from './components/Header';
import Filters from './components/Filters';
import ListCharacters from './components/ListCharacters';
import DetailCharacter from './components/DetailCharacter';

function App() {
  const [characters, setCharacters] = useState([]);

  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState("all");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then(response => response.json())
      .then(data => {
        setCharacters(data);
      });
  }, []);

  const filtered = characters
    .filter(character =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter(character => {
      if (filterHouse === "all") return true;
      if (filterHouse === 'Unknown') return character.house === '';
      return character.house === filterHouse;
    });

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Header />
              <Filters
                inputName={filterName}
                setInputName={setFilterName}
                selectHouse={filterHouse}
                setSelectHouse={setFilterHouse}
              />
              {characters.length > 0 && filtered.length === 0 ? (
                <p className="no-results">
                  No characters match the name ‘{filterName}’.
                </p>
              ) : (
                <ListCharacters charactersList={filtered} />
              )}
            </>
          }
        />
        <Route path="/detail/:id" element={<DetailCharacter detailcharacterlist={characters}/>} />
        <Route path="*" element={<p className="error">Error 404: Page not found</p>} />
      </Routes>
    </>
  );
}

export default App;

