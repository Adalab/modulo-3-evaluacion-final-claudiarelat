import { useParams } from 'react-router';
import '../styles/Detail.scss'; 
import { getHouseClass, getHouseIcon } from '../services/houseUtils';

function DetailCharacter({ detailcharacterlist }) {
  const { id } = useParams();

  const character = detailcharacterlist.find((char) => char.id === id);

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <section className="detail-section">
        <h1 className="title">Harry Potter</h1>
        <article className="detail-card">
            <div className="detail-card__image-wrapper">
                <img
                src={character.image || 'https://placehold.co/220x280/black/white?text=Absconditus!&font=PlayfairDisplay'}
                alt={character.image ? character.name : 'No image available'}
                className="detail-card__image"
                />
            </div>
            <div className="detail-card__content">
                <h3 className="detail-card__name">{character.name}</h3>
                <p className="detail-card__text">Alternate Names: {character.alternate_names || 'None'}</p>
                <p className="detail-card__text">Species: {character.species || 'Unknown'}</p>
                <p className="detail-card__text">Gender: {character.gender || 'Non-binary'}</p>
                <p className="detail-card__text">Status: {character.alive ? 'Alive' : 'Dead'}</p>
                <p className={`card__house ${getHouseClass(character.house)}`}>
                    House: {getHouseIcon(character.house)} {character.house || 'Unknown'}
                </p>
            </div>
        </article>
    </section>
  );
}

export default DetailCharacter;


