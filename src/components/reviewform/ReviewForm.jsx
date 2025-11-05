import axios from 'axios'

import { useState } from 'react'

const reviewForm = ({ idProp, reloadReviews }) => {
    const defaultValues = {
        name: "Anonymus",
        text: "",
        vote: 1
    }

    const [formData, setFormData] = useState(defaultValues);

    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData8({ ...formData, [name]: value })
    }

    const apiUrl = `http://localhost:3000/api/movies/${idProp}/reviews`;

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
        <form>
            <div className='name-field'>
                <label>Nome:</label>
                <input type='text' name='name' value={formData.name} onChange={setFieldValue} />
            </div >

            <div className='review-field'>
                <label>Recensione:</label>
                <textarea className='revie-field' name='text' value={formData.text} onChange={setFieldValue} />
            </div>

            <button type='submit'>INVIA</button>
        </form>
    )
}

export default reviewForm