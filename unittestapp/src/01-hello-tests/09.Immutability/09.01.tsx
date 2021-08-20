export type UserType = {
    name: string
    age: number
}

let user = {
    name: 'Alex',
    age: 33
}

function increaseAge (user: UserType) {
    user.age++
}