import axios from "axios"

import { useState, useEffect } from "react"
import { useGlobal } from "../../context/DefaultContext";

import CardList from "../../components/moviecardlist/CardList";

import './HomePage.css'

const HomePage = () => {
    const { setIsLoading } = useGlobal();
    const [movies, setMovies] = useState([]);

    const fecthMovies = () => {
        setIsLoading(true);
        axios.get('http://localhost:3000/movies')
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => { console.log(error) })
            .finally(() => { setIsLoading(false) })
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