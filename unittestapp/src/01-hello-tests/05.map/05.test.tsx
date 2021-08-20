import {CityType, getStreetsTitlesOfGovBuldings, ManType} from "./05.map";

let people: Array<ManType> = [
    {name: "Bobo Jab", age: 65},
    {name: "Cox Han", age: 45},
    {name: "Eliot Reed", age: 33},
]

beforeEach(() => {
    people = [
        {name: "Bobo Jab", age: 65},
        {name: "Cox Han", age: 45},
        {name: "Eliot Reed", age: 33},
    ]
})

test('Shoul return correct greetings', () => {
    const greetings = people.map
    (man => `Hello ${man.name.split(' ')[0]}! Glad to see you here!`)


    expect(greetings.length).toBe(3);
    expect(greetings[0]).toBe("Hello Bobo! Glad to see you here!")
    expect(greetings[1]).toBe("Hello Cox! Glad to see you here!")
    expect(greetings[2]).toBe("Hello Eliot! Glad to see you here!")
})









let city: CityType;


    beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    builtAt: 2012,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "White street"
                        }
                    }
                },
                {
                    builtAt: 2008,
                    repaired: false,
                    address: {
                        number: 100,
                        street: {
                            title: "Happy street"
                        }
                    }
                },
                {
                    builtAt: 2020,
                    repaired: false,
                    address: {
                        number: 101,
                        street: {
                            title: "Happy street"
                        }
                    }
                }],
            governmentBuildings: [
                {
                    type: "HOSPITAL",
                    budget: 200000,
                    staffCount: 200,
                    address: {
                        street: {
                            title: "Central str"
                        }
                    }
                },
                {
                    type: "FIRE-STATION",
                    budget: 500000,
                    staffCount: 1000,
                    address: {
                        street: {
                            title: "South str"
                        }
                    }
                }
            ],
            citizensNumber: 1000000
        }
    })



    // 01. создайте функцию, чтобы тесты прошли
    test('List of streets titles on which government buildings situated at', () => {
        let streetNames = getStreetsTitlesOfGovBuldings(city.governmentBuildings)


        expect(streetNames.length).toBe(2)
        expect(streetNames[0]).toBe("Central str")
        expect(streetNames[1]).toBe("South str")
    })
