import { useState } from "react"
import Navigation from "../../layout/Navigation"
import MovieForm from "../../components/MovieForm"
import { MovieService } from "../../services/MovieService"
import { useMovies } from "../../context/MovieContext"
import { useNavigate } from "react-router-dom";


const CreateMovie = () => {
    const { handleSave } = useMovies()
    const navigate = useNavigate();

    const handleCreateMovie = () => {
        handleSave(newMovie)
        navigate("/")
    }

    const [newMovie, setNewMovie] = useState({
        title: "",
        genre: "",
        year: undefined,
        director: "",
        actors: [],
        poster: "",
        duration: undefined,
        average_rating: undefined,
        projections: []
    })

    return (
        <>
            <Navigation />
            <MovieForm movie={newMovie} setMovie={setNewMovie} onSubmit={handleCreateMovie} />
        </>
    )
}

export default CreateMovie