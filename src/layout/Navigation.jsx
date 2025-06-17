import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
    const { logout, isAdmin } = useAuth()

    return (
        <nav>
            <div className="nav-left">
                <NavLink to={'/'}>Home</NavLink>
                {isAdmin && <NavLink to={'/movies/create'}>Create Movie</NavLink>}
            </div>

            <div className="nav-right">
                <button onClick={logout}>Log Out</button>
            </div>
        </nav>
    );
}

export default Navigation