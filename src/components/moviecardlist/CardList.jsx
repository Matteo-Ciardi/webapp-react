import MovieCard from "../moviecard/MovieCard"

import './CardList.css'

const CardList = ({ movies }) => {
    return (
        <div className="cardlist-container">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            ))}
        </div>
    );
}

export default CardList