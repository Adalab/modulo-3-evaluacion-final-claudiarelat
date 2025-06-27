import '../styles/Cards.scss';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

function ListCharacters({ charactersList }) {
  return (
    <section className="cards-container">
      {charactersList.map((item) => (
        <Link key={item.id} to={"/detail/" + item.id} className="card-link">
          <CharacterCard char={item} />
        </Link>
      ))}
    </section>
  );
}

export default ListCharacters;



