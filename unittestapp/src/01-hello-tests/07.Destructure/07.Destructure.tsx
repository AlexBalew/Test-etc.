import React, {useState} from "react";


export type hobbieType = {
    hobbie1: string
    hobbie2: string
}

export type addressType = {
    title: string
}

export type MenType = {
    nameA: string
    age: number
    hobbie: Array<hobbieType>
    address: addressType
}

type PropsType = {
    title: string
    man: MenType
}

const [message, setMessage] = useState<string>("Howdy")

export const manComponent: React.FC<PropsType> = (props) => {

    const {title} = props;
    const {nameA} = props.man;

    return <div>
        <h1>{title}</h1>
        <hr/>
           <div>{nameA}</div>
    </div>
}