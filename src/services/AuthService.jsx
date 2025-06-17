import axios from 'axios'
import bcrypt from 'bcryptjs'

const authApi = axios.create({
    baseURL: 'http://localhost:3000/users'
});

export const AuthService = {
    create: async (user) => {
        const response = await authApi.post("", { ...user, password: bcrypt.hashSync(user.password, 10) })
        return response.data
    },
    login: async (email, password) => {
        const allUsers = await authApi.get("")
        const user = allUsers.data.filter(u => u.email === email)
        if (user.length === 0)
            throw new Error("User not exist!");
        if (bcrypt.compareSync(password, user[0].password)) {
            return user[0]
        }
        throw new Error("Password not valid!");
    },
    register: async (firstName, lastName, email, password) => {
        const allUsers = await authApi.get("")
        const user = allUsers.data.filter(u => u.email === email)
        if (user.length !== 0)
            throw new Error("User already exist!")
        await authApi.post("", { firstName, lastName, email, password: bcrypt.hashSync(password, 10), user_type: "regular" })
        const logged = await AuthService.login(email, password)
        return logged
    }
}