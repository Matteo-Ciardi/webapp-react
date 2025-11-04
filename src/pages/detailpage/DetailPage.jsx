import { useParams } from 'react-router-dom'

import './DetailPage.css'

const DetailPage = () => {
    const { id } = useParams();

    return (
        <>
            <div className="detail-page">
                <h1>Dettagli Film</h1>
                <p>ID film: {id}</p>
            </div>
        </>
    )
}

export default DetailPage