import { useParams, useNavigate } from "react-router-dom"
import Navigation from "../../layout/Navigation"
import { useEffect, useState } from "react";
import { useMovies } from "../../context/MovieContext";
import MovieForm from "../../components/MovieForm";
import { MovieService } from "../../services/MovieService";

const UpdateMovie = () => {
    const params = useParams()
    const navigate = useNavigate();

    const movieId = params.id;

    const { getMovieById } = useMovies();

    const [updateMovie, setUpdateMovie] = useState(null)

    const handleUpdate = async () => {
        await MovieService.update(movieId, updateMovie);
        navigate("/");
    };

    useEffect(() => {
        const movie = getMovieById(movieId)
        setUpdateMovie(movie)
    }, []);

    if (updateMovie === null)
        return <p>Movie not found</p>

    return (
        <>
            <Navigation />
            <MovieForm movie={updateMovie} setMovie={setUpdateMovie} onSubmit={handleUpdate} />
        </>
    )
}

export default UpdateMovie