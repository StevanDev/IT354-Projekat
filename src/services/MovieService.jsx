import axios from 'axios'

const movieApi = axios.create({
    baseURL: 'http://localhost:3000/movies'
});

export const MovieService = {
    getAll: async () => {
        const response = await movieApi.get("");
        return response.data;
    },
    create: async (movie) => {
        const response = await movieApi.post("", movie)
        return response.data
    },
    update: async (movieId, movie) => {
        await movieApi.put(`/${movieId}`, movie)
    },
    delete: async (movieId) => {
        await movieApi.delete(`/${movieId}`)
    },
    makeReservation: async (movieId, projectionId) => {
        const all = await MovieService.getAll();
        const movie = all.find(m => m.id === movieId);

        if (!movie) throw new Error('Movie does not exist!');

        const projectionIndex = movie.projections.findIndex(p => p.id === projectionId);
        if (projectionIndex === -1) throw new Error('Projection does not exist!');

        const projection = movie.projections[projectionIndex];

        if (projection.available_seats <= 0) {
            throw new Error('No seats available for this projection!');
        }

        movie.projections[projectionIndex] = {
            ...projection,
            available_seats: projection.available_seats - 1
        };

        await movieApi.put(`/${movieId}`, movie);
    }
}