import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Protected = ({ reqRoles }) => {
    const { isAuthenticated, currentUser } = useAuth()

    if (!isAuthenticated)
        return <Navigate to={"/login"} />
    if (!reqRoles.includes(currentUser.user_type))
        return <Navigate to={"/"} />
    return <Outlet />
}

export default Protected