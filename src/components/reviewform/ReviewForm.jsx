import axios from 'axios'

import { useState } from 'react'

import './ReviewForm.css'

const ReviewForm = ({ idProp, reloadReviews }) => {
    const defaultValues = {
        name: "",
        text: "",
        vote: 1
    }

    const [formData, setFormData] = useState(defaultValues);

    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const apiUrl = `http://localhost:3000/movies/${idProp}/reviews`;

    const handleSubmit = e => {
        e.preventDefault();

        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                setFormData(defaultValues)
                reloadReviews();
            })
            .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='name-field'>
                <label className='name-label'>Nome:</label>
                <input type='text' name='name' value={formData.name} onChange={setFieldValue} />
            </div >

            <div className='review-field'>
                <label className='review-label'>Recensione:</label>
                <textarea name='text' value={formData.text} onChange={setFieldValue} />
            </div>

            <div className='vote-field'>
                <label className='vote-label'>Voto:</label>
                <input name='vote' type='number' min="1" max="5" value={formData.vote} onChange={setFieldValue} />
            </div>

            <button className='send-btn' type='submit'>INVIA</button>
        </form>
    )
}

export default ReviewForm