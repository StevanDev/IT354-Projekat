import ActorForm from "./ActorForm"
import ProjectionForm from "./ProjectionForm"
import { useState } from "react"
import { FaImage } from "react-icons/fa";

const MovieForm = ({ movie, setMovie, onSubmit }) => {
    const [imagePreview, setImagePreview] = useState(movie.image || null)

    const handleChange = (event) => {
        const value = event.target.value
        const key = event.target.name
        setMovie({ ...movie, [key]: value })
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setMovie({ ...movie, poster: file.name })
            setImagePreview(URL.createObjectURL(file))
        }
    }
    const setActors = (newActors) => {
        setMovie({ ...movie, actors: newActors })
    }

    const setProjections = (newProjections) => {
        setMovie({ ...movie, projections: newProjections })
    }
    return (
        <form className="movie-form-grid" onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
        }}>
            <input type="text" name="title" placeholder="Title" value={movie.title} onChange={handleChange} />
            <input type="text" name="genre" placeholder="Genre" value={movie.genre} onChange={handleChange} />
            <input type="number" name="year" placeholder="Year" value={movie.year} onChange={handleChange} />
            <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} />
            <ActorForm actors={movie.actors} setActors={setActors} />

            <label for="file-upload" class="custom-file-upload">
                <FaImage className="img-icon" />
                Upload Movie Cover
            </label>

            <input id="file-upload" type="file"
                accept="image/*"
                onChange={handleFileChange} />
            {imagePreview && <img src={imagePreview} alt="preview" style={{ width: "150px", marginTop: "10px" }} />}
            <input type="number" name="duration" placeholder="Duration" value={movie.duration} onChange={handleChange} />
            <input type="number" name="average_rating" placeholder="Rating" value={movie.average_rating} onChange={handleChange} />
            <ProjectionForm projections={movie.projections} setProjections={setProjections} />
            <button type="submit" className="submit-btn">Save changes</button>
        </form>
    )
}
export default MovieForm