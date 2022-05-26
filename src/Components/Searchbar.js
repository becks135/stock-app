import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({placeholderText, inputId, handleSubmit}) => {
    return(
        <form className="search-bar" onSubmit={e=>handleSubmit(e)}>
            <label htmlFor={inputId} className="sr-only">{placeholderText}</label>
            <input type="text" name={inputId} id={inputId} placeholder={placeholderText}/>
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}

export default SearchBar;