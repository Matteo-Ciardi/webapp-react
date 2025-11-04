import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="card">
                <div className="img-box">
                    <img src={movie.image} />
                </div>
                <div className="info">
                    <ul key={movie.id}>
                        <li><strong>{movie.title}</strong></li>
                        <li>{movie.director}</li>
                        <li>{movie.release_year}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MovieCard