import {userObj} from "./08_01Arr";


type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType


beforeEach( ()=> {
    users = {
        '6792': {id: 1001, name: 'Alex'},
        '1123': {id: 123, name: 'Katya'},
        '2545': {id: 1048, name: 'Bob'},
        '356': {id: 99, name: 'Mike'},
    }



} )


test("Should update exact user from obj", ()=> {
    users['356'].name = 'Miker'

    expect(users['356'].name).toBe('Miker');

})


    test("Should delete exact user from obj", ()=> {
        delete users['356']

        expect(users['356']).toBeUndefined();


    })