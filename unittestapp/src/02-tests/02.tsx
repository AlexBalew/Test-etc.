export type AddressType = {
    city: string
    country: string
    street: string
}

type ExactTechType = {
    id: number
    exactTech: string
}

type StudentType = {
    id: number
    name: string
    age: number
    address: AddressType
    technologies: Array<ExactTechType>
}

const Student: StudentType = {
    id: 1,
    name: 'Alex',
    age: 33,
    address: {
        city: 'Minsk',
        country: 'Belarus',
        street: 'Beruta, 22'
    },
    technologies: [
        {
            id: 1,
            exactTech: 'HTML',
        },
        {
            id: 1,
            exactTech: 'CSS',
        },
        {
            id: 1,
            exactTech: 'React',
        },
        {
            id: 1,
            exactTech: 'JS',
        }
    ]
}

console.log(Student.technologies[3].exactTech)