import { createContext, useContext } from "react";
import { useEffect, useState } from "react"
import { MovieService } from "../services/MovieService"

const MovieContext = createContext()

const MovieProvider = ({ children }) => {
    const [data, setData] = useState([])

    const fetchMovies = async () => {
        const movies = await MovieService.getAll();
        console.log(movies);
        setData(movies);
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    const getMovieById = (movieId) => {
        const element = data.filter(movie => movie.id === movieId)
        console.log('Elements:', element)
        if (element.length === 0)
            return null

        return element[0]
    }

    const handleDelete = async (movieId) => {
        await MovieService.delete(movieId)
        const newData = data.filter(movie => movie.id != movieId)
        setData(newData)
    }

    const handleSave = async (newMovie) => {
        const newData = await MovieService.create(newMovie)
        setData([...data, newData])
    }

    const handleReservation = async (movieId, projectionId) => {
        try {
            await MovieService.makeReservation(movieId, projectionId);
            alert('Uspesno ste rezervisali mesto!')
            fetchMovies()
        } catch (error) {
            console.error(error);
        }
    }

    const values = {
        movies: data, getMovieById, handleDelete, handleSave, handleReservation
    }

    return (
        <MovieContext.Provider value={values}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovies = () => {
    const context = useContext(MovieContext)
    if (!context) {
        throw new Error('context must be used inside provider')
    }
    return context;
}

export default MovieProvider;