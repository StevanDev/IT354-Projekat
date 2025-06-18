
import MovieList from "../components/MovieList"
import { useMovies } from "../context/MovieContext"
import Navigation from "../layout/Navigation"

const Home = () => {
    const { movies, handleDelete, handleReservation } = useMovies()

    const handleDeleteMovie = (id) => {
        if (window.confirm("Da li ste sigurni da želite da obrišete ovaj film?")) {
            handleDelete(id)
        }
    }

    return (
        <>
            <Navigation />
            <div className="container">
                <h1 className="movielist-header">Movie List</h1>
                <MovieList movies={movies} onDelete={handleDeleteMovie} onReservation={handleReservation} />
            </div>
        </>
    )
}

export default Home