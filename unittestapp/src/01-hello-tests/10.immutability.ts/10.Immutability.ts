import {strict} from "assert";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = {
    companies: Array<companiesType>
}

export type companiesType = {
    id: number
    title: string
}

export function makeHairStyle(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
    //copy.hair = u.hair / power
    //обязательно ретурн, т.к. копия создана и изменена внутри функции
}

export function moveUser(u: UserWithLaptopType, city: string, house: number) {
    return {...u, address: {...u.address, city}}
    /* copy.address = {
         ...copy.address, city: city}*/
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType,
                                     house: number) {
    return {...u, address: {...u.address, house}}
    /* copy.address = {
         ...copy.address, city: city}*/
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

export function smarterUserReadAnotherBook(u: UserWithLaptopType & UserWithBooksType,
                                           books: Array<string>) {
    return {...u, books: [...u.books, ...books]}
}

export function ReplaceUsersBook(u: UserWithBooksType,
                                 oldBook: string,
                                 newBook: string) {
    return {...u, books: u.books.map(b => b === oldBook ? newBook : b)}
}

export function RemoveUsersBook(u: UserWithBooksType,
                                bookToRemove: string) {
    return {...u, books: [...u.books.filter(b => b !== bookToRemove)]}
}

export function RenameCompaniesArray(u: UserWithCompaniesType,
                                     id: number, title: string) {
    return {
        ...u, companies: u.companies.map(c =>
            c.id === id ? {...c, title} : c)
    }
}


export const updateCompanies = (companies: { [key: string]: Array<companiesType> },
                                userName: string,
                                companyID: number,
                                newTitle: string) => {

    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(c =>
        c.id === companyID ? {...c, title: newTitle} : c)

    return companyCopy
}