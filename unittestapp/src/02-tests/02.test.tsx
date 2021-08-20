import React from "react";

let city: CityType;

type HousesType = {
    builtAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number: number
    street: StreetType
}

type AddressGovType = {
    street: StreetType
}

type StreetType = {
    title: string
}

type CityType = {
    title: string
    houses: Array<HousesType>
    citizensNumber: number
    governmentBuildings: Array<governmentBuildingsType>
}

type governmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressGovType
}


beforeEach( ()=> {
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

//01. Создайте тип на CityType
//02. Заполните объект City, чтобв тесты ниже прошли

test('test city should contain 3 houses', ()=> {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("White street")

    expect(city.houses[1].builtAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(false)
    expect(city.houses[1].address.number).toBe(100)
    expect(city.houses[1].address.street.title).toBe("Happy street")

    expect(city.houses[2].builtAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe("Happy street")
})

//01. Дополните тип governmentBuildingsType
//02. Заполните объект City, чтобв тесты ниже прошли
test('test city should have hospital and firestation', ()=> {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe("Central str")


    expect(city.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe("South str")
})

