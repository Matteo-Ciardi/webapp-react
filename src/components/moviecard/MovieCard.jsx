import { Link } from 'react-router-dom'

import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="card">
                <div className="img-box">
                    <Link to={`/detailpage/${movie.id}`}>
                        <img src={movie.image} />
                    </Link>
                </div>
                <div className="info">
                    <ul key={movie.id}>
                        <li>
                            <Link to={`/movies/${movie.id}`}>
                                <strong>{movie.title}</strong>
                            </Link>
                        </li>
                        <li>
                            {movie.director}
                        </li>
                        <li>
                            {movie.release_year}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MovieCard