import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({placeholderText, handleSubmit}) => {
    return(
        <form>
            <label htmlFor="search-query" className="sr-only">{placeholderText}</label>
            <input type="text" name="search-query" id="search-query" placeholder={placeholderText}/>
            <button onClick={handleSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default SearchBar;