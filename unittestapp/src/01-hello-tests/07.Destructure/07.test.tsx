import {MenType} from "./07.Destructure";


let props: MenType;

beforeEach(() => {
     let props = {
        nameA: "Alex",
        age: 33,
        hobbie: [{hobbie1: "Hobbie1"}, {hobbie2: "Hobbie2"}],
        address: {
            title: "Wright"
        }
    }
})


test(' ', () => {


    const age = props.age;
    const hobbie = props.hobbie;


    /*const {age, nameA} = props
    const {title} = props.address*/

    expect(props.age).toBe(33);
    expect(props.hobbie.length).toBe(2);
    expect(props.hobbie[0].hobbie1).toBe("Hobbie1");
    expect(props.hobbie[1].hobbie2).toBe("Hobbie2");
    expect(props.address.title).toBe("Wright");

})



