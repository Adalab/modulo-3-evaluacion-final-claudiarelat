import '../styles/Cards.scss';
import { getHouseClass, getHouseIcon } from '../services/houseUtils';

function CharacterCard({ char }) {

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img
          src={char.image || 'https://placehold.co/220x280/black/white?text=Absconditus!&font=PlayfairDisplay'}
          alt={char.image ? char.name : 'No image available'}
          className="card__image"
        />
      </div>
      <div className="card__content">
        <h3 className="card__name">{char.name}</h3>
        <p className="card__species">Species: {char.species || 'Unknown'}</p>
        <p className={`card__house ${getHouseClass(char.house)}`}>
          House: {getHouseIcon(char.house)} {char.house || 'Unknown'}
        </p>
      </div>
    </article>
  );
}

export default CharacterCard;



