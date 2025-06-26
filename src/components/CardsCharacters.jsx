import '../styles/Cards.scss';

function CardsCharacters({ charactersList }) {

  const getHouseClass = (house) => {
  switch (house.toLowerCase()) {
    case 'gryffindor':
      return 'gryffindor';
    case 'hufflepuff':
      return 'hufflepuff';
    case 'ravenclaw':
      return 'ravenclaw';
    case 'slytherin':
      return 'slytherin';
    default:
      return 'no-house';
    }
  };


  const getHouseIcon = (house) => {
  switch ((house || '').toLowerCase()) {
    case 'gryffindor':
      return '🦁';
    case 'hufflepuff':
      return '🦡';
    case 'ravenclaw':
      return '🦅';
    case 'slytherin':
      return '🐍';
    default:
      return '❓'; 
    }
  };


  return (
    <section className="cards-container">
      {charactersList.map((char, index) => (
        <article key={index} className="card">
          <img
            src={char.image || 'https://placehold.co/220x280/black/white?text=Absconditus!&font=PlayfairDisplay'}
            alt={char.image ? char.name : 'No image available'}
            className="card__image"
          />
          <div className="card__content">
            <h3 className="card__name">{char.name}</h3>
            <p className="card__species">Species: {char.species || 'Unknown'}</p>
            <p className={`card__house ${getHouseClass(char.house || '')}`}>
              House: {getHouseIcon(char.house)} {char.house || 'Unknown'}
            </p>

          </div>
        </article>
      ))}
    </section>
  );
}

export default CardsCharacters;
