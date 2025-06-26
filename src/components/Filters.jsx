import '../styles/Filters.scss';

function Filters({ inputName, psetFilterName }) {

  const handleNameChange = (ev) => {
    ev.preventDefault(); 

    psetFilterName(ev.target.value); 
  }

  return (
    <form className="filters" onSubmit={e => e.preventDefault()}>
      <input
        className="filter-input"
        type="search"
        name="search"
        placeholder="Search by character name"
        value={inputName}
        autoComplete="off"
        onChange={handleNameChange}
      />

      <select
        className="filter-select"
        name="house"
        // onChange={handleHouseChange}
        defaultValue="all"
      >
        <option value="all">✨ All houses</option>
        <option value="Gryffindor">🦁 Gryffindor</option>
        <option value="Slytherin">🐍 Slytherin</option>
        <option value="Ravenclaw">🦅 Ravenclaw</option>
        <option value="Hufflepuff">🦡 Hufflepuff</option>
      </select>
    </form>
  );
}

export default Filters;




