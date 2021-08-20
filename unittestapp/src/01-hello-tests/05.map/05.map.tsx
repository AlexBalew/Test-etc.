

export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Bobo Jab", age: 65},
    {name: "Cox Han", age: 45},
    {name: "Eliot Reed", age: 33},
]


const alexTransformer = (man: ManType) => {
    return {
        stack: ["JS", "CSS", "HTML", "REACT", "NodeJS"],
        firstName: man.name.split('')[0],
        lastName: man.name.split('')[1],
    }
}


const devs1 = [
    {
        stack: ["JS", "CSS", "HTML", "REACT", "NodeJS"],
        firstName: "Bobo", lastName: "Jab"
    },
    {
        stack: ["JS", "CSS", "HTML", "REACT", "NodeJS"],
        firstName: "Cox", lastName: "Han"
    },
    {
        stack: ["JS", "CSS", "HTML", "REACT", "NodeJS"],
        firstName: "Eliot", lastName: "Reed"
    }
]

const devs2 = [
    alexTransformer(people[0]),
    alexTransformer(people[1]),
    alexTransformer(people[2]),
]

const devs3 = people.map(alexTransformer)
const devs4 = people.map( man => ({
    stack: ["JS", "CSS", "HTML", "REACT", "NodeJS"],
        firstName: man.name.split('')[0],
        lastName: man.name.split('')[1],
}))

const greetings = people.map
( man => `Hello ${man.name.split('')[0]}! Glad to see you here!`)













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

export type CityType = {
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


export const getStreetsTitlesOfGovBuldings = (governmentB: Array<governmentBuildingsType> ) => {
    return governmentB.map(b => b.address.street.title)
}















