

const Greeting=(props:GreetingProps):JSX.Element =>{

    const pets: string[]=["dog","cat","snail"]
    //array destructuriong
    /* const[elizabeth,lucy,tamsen]=pets;
    console.log(elizabeth) */


   
    return (
    <div>
    <p>Welcome {props.name} You are {props.age} years old</p>
    <button onClick={props.ageFunction}>Happy birthday</button>
    </div>
    )
}

export default Greeting;

type GreetingProps={
    name: string,
    age: number,
    ageFunction: ()=>void
}