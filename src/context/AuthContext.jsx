import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "../services/AuthService";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)

    const login = async (email, password) => {
        try {
            const user = await AuthService.login(email, password)
            setCurrentUser(user)
            localStorage.setItem("user", JSON.stringify(user))
        } catch (error) {
            localStorage.clear()
            setCurrentUser(null)
            alert("Invalid credentials")
        }

    }

    const register = async (firstName, lastName, email, password) => {
        try {
            const user = await AuthService.register(firstName, lastName, email, password)
            setCurrentUser(user)
            localStorage.setItem("user", JSON.stringify(user))
        } catch (error) {
            console.error(error)
            alert("Failed to create a user!")
        }
    }

    const logout = () => {
        setCurrentUser(null)
        localStorage.clear()
    }

    useEffect(() => {
        const rawUser = localStorage.getItem("user")
        const user = JSON.parse(rawUser)
        setCurrentUser(user)
    }, [])

    const isAuthenticated = currentUser !== null;

    const isAdmin = isAuthenticated && currentUser.user_type === "admin"

    const values = { currentUser, login, isAuthenticated, logout, register, isAdmin }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('context must be used inside provider')
    }
    return context
}

export default AuthProvider;