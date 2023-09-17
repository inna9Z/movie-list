import PropTypes from 'prop-types';
import './SearchBar.css';

const SearchBar = ({ setValue }) => {
    const handlerInputSearch = (e) => {
        const val = e.target.value;
        setValue(val);
    };

    return (
        <div className="search-bar">
            <input

                type="text"
                className="search-input"
                placeholder="Search for movie"
                onChange={handlerInputSearch}
            />
        </div>
    );
};

SearchBar.propTypes = {
    setValue: PropTypes.func,
};

export default SearchBar;
