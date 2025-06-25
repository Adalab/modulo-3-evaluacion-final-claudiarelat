import { useState, useEffect } from 'react'
import './styles/App.scss'
import Header from './components/Header';
import FilterName from './components/FilterName';
import ListCharacters from './components/ListCharacters';
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
      <FilterName/>
     
    </>
  )
}

export default App
