import '../styles/Cards.scss';

function CardsCharacters({ characters }) {
  return (
    <section className="cards-container">
      {characters.map((char) => (
        <article key={char.name} className="card">
          <img
            src={char.image || 'https://via.placeholder.com/220x280?text=No+Image'}
            alt={char.name}
            className="card__image"
          />
          <div className="card__content">
            <h3 className="card__name">{char.name}</h3>
            <p className="card__species">Species: {char.species || 'Unknown'}</p>
            <p className="card__house">House: {char.house || 'No House'}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default CardsCharacters;
