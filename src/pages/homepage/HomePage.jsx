import axios from "axios"
import { useState, useEffect } from "react"
import CardList from "../../components/moviecardlist/CardList";

import './HomePage.css'

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fecthMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => { console.log(error) })
    }

    useEffect(fecthMovies, []);

    return (
        <div className="main-container">
            <CardList
                movies={movies}
            />
        </div>
    );
}

export default HomePage