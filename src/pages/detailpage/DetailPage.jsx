import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

import ReviewForm from '../../components/reviewform/ReviewForm';

import './DetailPage.css'

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const redirect = useNavigate();

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect('/404')
            })
    }

    useEffect(fetchMovie, []);

    const renderReview = () => {
        return movie?.reviews.map(review => {
            return (
                <>
                    
                </>
            )
        })
    }

    return (
        <div className="detail-page">
            <div>
                <h1>{movie?.title}</h1>
                <img className="big-img" src={movie?.image} alt={movie?.title} />
                <p><strong>Regista:</strong> {movie?.director}</p>
                <p><strong>Anno:</strong> {movie?.release_year}</p>
            </div>

            <div>
                <h2>Recensioni</h2>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <ul>
                        {movie.reviews.map((review) => (
                            <li key={review.id}>
                                <p><strong>{review.name}</strong> ({review.vote}/10)</p>
                                <p>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nessuna recensione disponibile.</p>
                )}
            </div>
        </div>
    );
}

export default DetailPage