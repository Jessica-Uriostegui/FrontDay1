import React, { useState } from 'react';
import './styles.css';



function MoviesList() {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over a number of years.', image: 'public/Shawshank.jfif' }, 
        { id: 2, title: 'The Godfather', genre: 'Crime', description: 'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.', image: 'public/The godfather.jfif' },
        { id: 3, title: '50 First Dates', genre: 'Comedy', description: 'Henry Roth a man afraid of commitment until he meets the beautiful Lucy.', image: 'public/50.jfif' },
        { id: 4, title: 'P.s I love you', genre: 'Romance', description: 'A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.', image: 'public/p.s.jpg' },
        { id: 5, title: 'In time of the butterflies', genre: 'Drama', description: 'A fictionalized account of the lives of the Mirabal sisters.', image: 'public/butterfliesjpg.jpg' },
        { id: 6, title: 'Love in time of the cholera', genre: 'Romance', description: 'Florentino Ariza waits for over fifty years for his one true love, Fermina.', image: 'public/cholera.jfif' },
        { id: 7, title: 'Legally Blonde', genre: 'Comedy', description: 'Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school.', image: 'public/legally.jfif' },
    ]);

    const [showDetails, setShowDetails] = useState({});
    const [showOnlyComedy, setShowOnlyComedy] = useState(false);

    const toggleDetails = (id) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [id]: !prevDetails[id],
        }));
    };

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleGenreView = () => {
        setShowOnlyComedy(!showOnlyComedy);
    };

    const displayedMovies = showOnlyComedy ? movies.filter(movie => movie.genre === 'Comedy') : movies;

    return (
        <div className="background">
            <div className="movie-list-container">
                <button onClick={toggleGenreView}>
                    {showOnlyComedy ? 'Show All Movies' : 'Show Only Comedy Movies'}
                </button>
                <ul>
                    {displayedMovies.map((movie) => (
                        <li key={movie.id} className="movie-item">
                            <div className="movie-info" onClick={() => toggleDetails(movie.id)} style={{ cursor: 'pointer', color: 'darkgoldenrod'}}>
                                <h3>{movie.title}</h3>
                            </div>
                            {showDetails[movie.id] && (
                                <div className="movie-details">
                                    <img src={movie.image} alt={movie.title} className="movie-image" />
                                    <p>{movie.description}</p>
                                </div>
                            )}
                            <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MoviesList;