import '../styles/Cards.scss';
import CharacterCard from './CharacterCard';

function ListCharacters({ charactersList }) {
  return (
    <section className="cards-container">
      {charactersList.map((item, index) => (
        <CharacterCard key={index} char={item} />
      ))}
    </section>
  );
}

export default ListCharacters;


