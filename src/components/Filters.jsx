import '../styles/Filters.scss';

function Filters({ inputName, setInputName, selectHouse, setSelectHouse }) {

  const handleNameChange = (ev) => {
    ev.preventDefault(); 

    setInputName(ev.target.value); 
  }

  const handleHouseChange = (ev) => {
    ev.preventDefault();
    
    setSelectHouse(ev.target.value);
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
        value={selectHouse}
        onChange={handleHouseChange}
      >
        <option value="all">✨ All houses</option>
        <option value="Gryffindor">🦁 Gryffindor</option>
        <option value="Slytherin">🐍 Slytherin</option>
        <option value="Ravenclaw">🦅 Ravenclaw</option>
        <option value="Hufflepuff">🦡 Hufflepuff</option>
        <option value="Unknown">❓ Unknown</option>
      </select>
    </form>
  );
}

export default Filters;




