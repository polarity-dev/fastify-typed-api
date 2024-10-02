import { User } from "$types/users"

const users = [{
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password"
}, {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    password: "password"
}]

export default class UserService {
    static getUsers = (): User[] => {
        return users
    }

    static getUser = (id: number): User | undefined => {
        return users.find(user => user.id === id)
    }
}