import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useGlobal } from '../../context/DefaultContext';

import ReviewForm from '../../components/reviewform/ReviewForm';
import ReviewCard from '../../components/reviewcard/ReviewCard';

import './DetailPage.css'

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    const { setiIsLoading } = useGlobal();
    const redirect = useNavigate();

    const fetchMovie = () => {
        setiIsLoading
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect('/404')
            })
            .finally(() => { setIsLoading(false) })
    }

    useEffect(fetchMovie, []);

    const renderReview = () => {
        return movie?.reviews.map(review => {
            return (
                <ReviewCard reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <div className="detail-page">
            <div className='detail-movie-card'>
                <div className='detail-title'>
                    <h1>{movie?.title}</h1>
                </div>
                <div className='detail-bg'>
                    <img className="big-img" src={movie?.image} alt={movie?.title} />

                    <div className='detail-info'>
                        <p><strong>Regista:</strong> {movie?.director}</p>
                        <p><strong>Anno:</strong> {movie?.release_year}</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className='review-title'>Recensioni</h2>
                {renderReview()}
            </div>
            <div>
                <h2 className='add-review-title'>Aggiungi recensione</h2>
                <ReviewForm idProp={id} reloadReviews={fetchMovie} />
            </div>
        </div>
    );
}

export default DetailPage