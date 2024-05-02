const Candrink=(props:drinkProps):JSX.Element =>{
/* const isallowedinUK:boolean=props.age>18;
const isallowedinUS:boolean=props.age>21; */

    return(
        <ul>
           {/*  <li style={{display:isallowedinUK?"block":"none"}} >{props.name} you can drink in UK</li>
            <li style={{display:isallowedinUS?"block":"none"}} >{props.name} you can drink in Texas</li>
            <li style={{display:isallowedinUK?"none":"block"}} >{props.name} you can't drink in UK</li>
            <li style={{display:isallowedinUS?"none":"block"}} >{props.name} you can't drink in Texas</li> */}
            <li> {props.name}, {props.age>21 ? "you can drink in US" :" you can't drink in US"}  </li>
            <li> {props.name}, {props.age>18 ? "you can drink in UK" :" you can't drink in UK"}  </li>
        </ul>
    )
}

export default Candrink

type drinkProps={
    name: string,
    age: number
}