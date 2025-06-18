import { Navigate, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, isAuthenticated } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()
        await login(email, password)
    }

    if (isAuthenticated) return <Navigate to={"/"} />
    return (
        <div className='login-register'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    placeholder='email'
                    onChange={(event) => { setEmail(event.target.value) }} />
                <input
                    type="password"
                    value={password}
                    placeholder='password'
                    onChange={(event) => { setPassword(event.target.value) }} />
                <button type='submit'>Login</button>
            </form>
            <NavLink to={'/register'}>
                U dont have account? Then register!
            </NavLink>
        </div>
    )
}

export default Login