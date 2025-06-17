import { useParams, useNavigate } from "react-router-dom"
import Navigation from "../../layout/Navigation"
import MovieListElement from "../../components/MovieListElement"
import { useMovies } from "../../context/MovieContext"
import { useEffect, useState } from "react"

const Movie = () => {
    const navigate = useNavigate()
    const params = useParams()
    const movieId = params.id

    const { getMovieById, handleReservation, handleDelete } = useMovies()

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const movieData = getMovieById(movieId)
        setMovie(movieData)
    }, []);

    const handleDeleteMovie = (id) => {
        if (window.confirm("Da li ste sigurni da želite da obrišete ovaj film?")) {
            handleDelete(id)
            navigate("/")
        }
    }

    if (movie === null)
        return <p>Movie not found!</p>
    return (
        <>
            <Navigation />
            <MovieListElement movie={movie} onDelete={handleDeleteMovie} onReservation={handleReservation} />
        </>
    )
}

export default Movie