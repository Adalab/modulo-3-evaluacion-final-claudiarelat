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
        <h1 className="second-title">Harry Potter</h1>
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
                <p className="detail-card__text"><strong>Species: </strong>{character.species || 'Unknown'}</p>
                <p className="detail-card__text"><strong>Gender: </strong>{character.gender || 'Non-binary'}</p>
                <p className="detail-card__text"><strong>Status: </strong>{character.alive ? 'alive' : 'dead'}</p>
                <p className={`card__house ${getHouseClass(character.house)}`}>
                    House: {getHouseIcon(character.house)} {character.house || 'Unknown'}
                </p>
                <p className="detail-card__text">
                  <strong>Alternate Names:</strong>{' '}
                  {character.alternate_names && character.alternate_names.length > 0
                  ? character.alternate_names.join(', ')
                  : 'none'}
                </p>
            </div>
        </article>
    </section>
  );
}

export default DetailCharacter;


