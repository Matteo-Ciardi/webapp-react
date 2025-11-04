import axios from "axios"
import { useState, useEffect } from "react"
import CardList from "../../components/moviecardlist/CardList";

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
        <div>
            <h1>Lista dei Film</h1>
            <CardList
                movies={movies}
            />
        </div>
    );
}

export default HomePage