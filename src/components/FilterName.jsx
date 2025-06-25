import '../styles/Filters.scss';

function FilterName () {

    return (
        <form>
            <input 
                className="input_name"
                autoComplete="off"
                type="search" 
                name="search"
                placeholder="Search by character name"
            />
        </form>
    )
}

export default FilterName; 