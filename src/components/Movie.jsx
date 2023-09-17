import PropTypes from 'prop-types';
import './Movie.css'
import { BiHeartCircle } from "react-icons/bi";
import { useState } from 'react';




const Movie = ({ title, year, poster }) => {

    const [liked, setLiked] = useState(false);

    const toggleLiked = () => {
        setLiked(!liked);
    }
    return (
        <div className="movie">
            <div className="movie-image-container">
                <img src={poster} alt={title} className="movie-image" />
                <button onClick={toggleLiked} className="like-button">
                    <BiHeartCircle className={liked ? 'icon like' : 'icon'} />

                </button>
            </div>
            <h2 className="movie-title">{title}</h2>
            <p >Year: {year}</p>
        </div>
    );
};


Movie.propTypes = {
    poster: PropTypes.string,
    year: PropTypes.string,
    title: PropTypes.string,
}

export default Movie
