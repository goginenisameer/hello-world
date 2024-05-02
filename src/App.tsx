import { useState } from "react"
import Candrink from "./components/canDrink"
import Greeting from "./components/greetings"
import SongList from "./components/songList"


function App() {
 
   const matsName="matt"

   const[age,setAge]=useState<number>(17)
   // age is stateful var
     //setAge is setter

  
    const haveBirtday=()=>{
     setAge((age)=>age+1)
     console.log("happy birthday"+age)
    };

  return (
    <>
    <p className="greeting">Hello </p>
    <hr/>
    <Greeting name={matsName} age={age} ageFunction={haveBirtday}/>
    <Candrink name={matsName} age={age} />
    <h1>Your favourite songs are</h1>
    <SongList/>
    </>
  )
}
export default App
