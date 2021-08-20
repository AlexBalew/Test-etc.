

export const userArray = ['Alex', 'Katya', 'Bob', 'Mike']

export const userObj = {
    '0': 'Alex',
    '1': 'Katya',
    '2': 'Bob',
    '3': 'Mike',
}

export type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users1: UsersType = {
    '6792': {id: 1001, name: 'Alex'},
    '1123': {id: 123, name: 'Katya'},
    '2545': {id: 1048, name: 'Bob'},
    '356': {id: 99, name: 'Mike'},
}

let user = { id: 100500, name: 'Claus'}

users1[user.id] = user;
delete users1[user.id]
users1[user.id].name = 'Peter'



export const usArray = [
    {id: 1001, name: 'Alex'},
    {id: 123, name: 'Katya'},
    {id: 1048, name: 'Bob'},
    {id: 99, name: 'Mike'}
]
