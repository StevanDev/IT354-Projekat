import { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, isAuthenticated } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault()
        await register(firstName, lastName, email, password)
    }

    if (isAuthenticated) return <Navigate to={"/"} />
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={firstName} placeholder='First Name' onChange={(event) => { setFirstName(event.target.value) }} />
                <input type="text" value={lastName} placeholder='Last Name' onChange={(event) => { setLastName(event.target.value) }} />
                <input type="email" value={email} placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
                <input type="pasword" value={password} placeholder='Password' onChange={(event) => { setPassword(event.target.value) }} />
                <button type='submit'>Register</button>
            </form>
            <NavLink to={'/login'}>U already have an account? Log in!</NavLink>
        </>
    )
}

export default Register