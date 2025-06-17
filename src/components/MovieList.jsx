import MovieListElement from "./MovieListElement"

const MovieList = ({ movies, onDelete, onReservation }) => {
    return (
        <>
            {movies.map((movie, index) => <MovieListElement movie={movie} onDelete={onDelete} onReservation={onReservation} key={index} />)}
        </>
    )
}

export default MovieList