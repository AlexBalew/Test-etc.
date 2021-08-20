import {
    makeHairStyle,
    moveUser, moveUserToOtherHouse, RemoveUsersBook, RenameCompaniesArray, ReplaceUsersBook,
    smarterUserReadAnotherBook, updateCompanies, upgradeUserLaptop,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./10.Immutability"


test('reference type test', () => {
    let user: UserWithLaptopType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        }
    }
    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(15)
    expect(user.hair).toBe(30)
    expect(awesomeUser.address).toBe(user.address) //toBe работает как строгое сравнение
})


test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        }
    }
    const movedUser = moveUser(user, 'Kiev', 48)


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})


test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        books: ['Onegin', 'Math', 'Refactoring']
    }
    const UpradedLaptop = upgradeUserLaptop(user, 'MacBook')

    expect(user).not.toBe(UpradedLaptop)
    expect(user.address.house).toBe(UpradedLaptop.address.house)
    expect(user.laptop).not.toBe(UpradedLaptop.laptop)
    expect(UpradedLaptop.laptop.title).toBe('MacBook')
})


test('move user to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        books: ['Onegin', 'Math', 'Refactoring']
    }
    const usersOtherHouse = moveUserToOtherHouse(user, 48)

    expect(user).not.toBe(usersOtherHouse)
    expect(user.books).toBe(usersOtherHouse.books)
    expect(user.laptop).toBe(usersOtherHouse.laptop)
    expect(user.address.house).not.toBe(usersOtherHouse.address.house)
    expect(usersOtherHouse.address.house).toBe(48)
})


test('add new book to users list', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        books: ['Onegin', 'Math', 'Refactoring']
    }
    const smarterUser = smarterUserReadAnotherBook(user, ['JS', 'TS', 'CSS'])

    expect(user).not.toBe(smarterUser)
    expect(user.laptop).toBe(smarterUser.laptop)
    expect(user.address.house).toBe(smarterUser.address.house)
    expect(user.books).not.toBe(smarterUser.books)
    expect(smarterUser.books).toEqual(['Onegin', 'Math', 'Refactoring', 'JS', 'TS', 'CSS'])
})

test('Replace one of an array objects', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        books: ['Onegin', 'Math', 'Refactoring', 'JS', 'TS', 'CSS']
    }
    const UsersWithReplacedBook = ReplaceUsersBook(user, 'CSS', 'React') as UserWithLaptopType & UserWithBooksType

    expect(user).not.toBe(UsersWithReplacedBook)
    expect(user.laptop).toBe(UsersWithReplacedBook.laptop)
    expect(user.address.house).toBe(UsersWithReplacedBook.address.house)
    expect(user.books).not.toBe(UsersWithReplacedBook.books)
    expect(UsersWithReplacedBook.books[5]).toBe('React')
})

test('remove one of an array objects', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        books: ['Onegin', 'Math', 'Refactoring', 'JS', 'TS', 'CSS']
    }
    const UserWithRemovedBook = RemoveUsersBook(user, 'JS') as UserWithLaptopType & UserWithBooksType

    expect(user).not.toBe(UserWithRemovedBook)
    expect(user.laptop).toBe(UserWithRemovedBook.laptop)
    expect(user.address.house).toBe(UserWithRemovedBook.address.house)
    expect(user.books).not.toBe(UserWithRemovedBook.books)
    expect(UserWithRemovedBook.books.length).toBe(5)
    expect(UserWithRemovedBook.books[3]).toBe('TS')
})


test('Rename company title', () => {
    let user: UserWithLaptopType & UserWithCompaniesType = {
        name: 'ALex',
        hair: 30,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Envy'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IsSoft'}, {id: 3, title: 'Andersen'}]
    }
    const UserWithRenamedCompaniesArray = RenameCompaniesArray(user, 3, 'Gismart') as UserWithLaptopType & UserWithCompaniesType

    expect(user).not.toBe(UserWithRenamedCompaniesArray)
    expect(user.laptop).toBe(UserWithRenamedCompaniesArray.laptop)
    expect(user.address.house).toBe(UserWithRenamedCompaniesArray.address.house)
    expect(user.companies).not.toBe(UserWithRenamedCompaniesArray.companies)
    expect(UserWithRenamedCompaniesArray.companies[2].title).toBe('Gismart')

})


test('Update company title', () => {


    let companies = {
        'Alex': [{id: 1, title: 'Epam'}, {id: 2, title: 'IsSoft'}, {id: 3, title: 'Andersen'}],
        'Bob': [{id: 1, title: 'Epam'}]
    }


    const updatedCompanyTitle = updateCompanies(companies, 'Alex', 3, 'Incubator')

    expect(updatedCompanyTitle['Alex']).not.toEqual(companies['Alex'])
    expect(updatedCompanyTitle['Bob']).toEqual(companies['Bob'])
    expect(updatedCompanyTitle['Alex'][2].title).toBe('Incubator')


})