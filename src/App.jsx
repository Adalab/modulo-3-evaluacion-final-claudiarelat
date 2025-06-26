import { useState, useEffect } from 'react'
import './styles/App.scss'
import Header from './components/Header';
import Filters from './components/Filters';
import ListCharacters from './components/ListCharacters';

function App() {

  const [characters, setCharacters] = useState([]); //array vacío

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data => {
      setCharacters(data);
    })

  }, [])

  const [filterName, setFilterName] = useState(''); 

  const [filterHouse, setFilterHouse] = useState("all"); 

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
      <Header/>
      <Filters inputName={filterName} setInputName={setFilterName} selectHouse={filterHouse} setSelectHouse={setFilterHouse}/>
      
      {characters.length > 0 && filtered.length === 0 ? (
      <p className="no-results">
      No characters match the name ‘{filterName}’.
      </p>
      ) : (
      <ListCharacters charactersList={filtered} />
      )}
    </>
  )
}

export default App
