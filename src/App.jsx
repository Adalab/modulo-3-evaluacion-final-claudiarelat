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

  const filteredName = characters.filter(character => character.name.toLowerCase().includes(filterName.toLowerCase())); 
  

  return (
    <>
      <Header/>
      <Filters inputName={filterName} psetFilterName={setFilterName}/>
      <ListCharacters charactersList={filteredName}/>
    </>
  )
}

export default App
