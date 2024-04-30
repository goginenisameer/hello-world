const Greeting=(props:GreetingProps):JSX.Element =>{
    return (
    <div>
    <p>Welcome {props.name} You are {props.age} years old</p>
    </div>
    )
}

export default Greeting;

type GreetingProps={
    name: string,
    age: number
}