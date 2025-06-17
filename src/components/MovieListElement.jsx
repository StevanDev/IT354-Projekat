import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import { useAuth } from "../context/AuthContext";
import "./MovieCard.css";

const MovieListElement = ({ movie, onDelete, onReservation }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAdmin } = useAuth()

    return (
        <div className="movie-preview">
            <div className="card">
                <div className="card_left">
                    <img
                        src={
                            movie.poster?.startsWith("http")
                                ? movie.poster
                                : new URL(`../assets/images/${movie.poster}`, import.meta.url).href
                        }
                        alt={movie.title}
                    />
                </div>
                <div className="card_right">
                    <h1>{movie.title}</h1>
                    <div className="card_right__details">
                        <ul>
                            <li>{movie.year}</li>
                            <li>{movie.duration} min</li>
                            <li>{movie.genre}</li>
                        </ul>
                    </div>
                    <div className="card_right__review">
                        <p><b>Režiser:</b> {movie.director}</p>
                        <div>
                            <b>Glumci:</b>
                            <div className="card_actors">
                                {movie.actors.map((actor, index) => (
                                    <p key={index}>
                                        {actor}
                                        {index < movie.actors.length - 1 ? "," : ""}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <p><b>Prosečna ocena:</b> {movie.average_rating}⭐</p>
                    </div>
                    <div className="card_buttons">
                        {location.pathname !== `/movies/${movie.id}` &&
                            <div className="card_right__button">
                                <a onClick={() => navigate(`/movies/${movie.id}`)}>Detalji</a>
                            </div>
                        }
                        {isAdmin && <>
                            <div className="card_right__button">
                                <a onClick={() => navigate(`/movies/${movie.id}/update`)}>Ažuriraj</a>
                            </div>
                            <div className="card_right__button">
                                <a onClick={() => { onDelete(movie.id) }}>Obrisi</a>
                            </div>
                        </>
                        }
                    </div>

                </div>
            </div>
            {location.pathname === `/movies/${movie.id}` &&
                <div className="projections-section">
                    <h3>Projekcije:</h3>
                    <div className="projections-grid">
                        {movie.projections.map((projection, index) => (
                            <div key={index} className="projection-card">
                                <p><span className="emoji">🆔</span> <b>ID:</b> {projection.id}</p>
                                <p><span className="emoji">📅</span> <b>Datum:</b> {projection.date_time}</p>
                                <p><span className="emoji">🎬</span> <b>Sala:</b> {projection.room}</p>
                                <p>
                                    <span className="emoji">🪑</span> <b>Mesta:</b>
                                    <span className="seats">
                                        {projection.available_seats}/{projection.total_seats}
                                    </span>
                                </p>
                                <p>
                                    <span className="emoji">💰</span> <b>Cena:</b>
                                    <span className="price"> {projection.ticket_price} RSD</span>
                                </p>
                                {
                                    !isAdmin && projection.available_seats !== 0 &&
                                    <button onClick={() => {
                                        onReservation(movie.id, projection.id)
                                    }}>Rezerviši mesto</button>
                                }
                            </div>

                        ))}
                    </div>
                </div>
            }

        </div>

    );
};

export default MovieListElement;
