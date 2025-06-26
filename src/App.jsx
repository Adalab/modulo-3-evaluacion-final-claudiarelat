import { useState, useEffect } from 'react'
import './styles/App.scss'
import Header from './components/Header';
import Filters from './components/Filters';
import CardsCharacters from './components/CardsCharacters';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .then(data => {
      setCharacters(data);
    })

  }, [])
  

  return (
    <>
      <Header/>
      <Filters/>
      <CardsCharacters charactersList={characters}/>
    </>
  )
}

export default App
