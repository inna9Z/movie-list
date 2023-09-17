import Movie from "./Movie";

import PropTypes from 'prop-types';

import './MovieList.css'

const MovieList = ({ data }) => {

    return (
        <div className="movie-list">
            {data.map((movie) => (
                <Movie
                    key={movie.imdbID}
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}

                />
            ))}
        </div>
    );
};

MovieList.propTypes = {
    data: PropTypes.array.isRequired

}

export default MovieList;
