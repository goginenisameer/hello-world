import Greeting from "./components/greetings"
import SongList from "./components/songList"


function App() {
  

  return (
    <div>
    <p className="greeting">Hello </p>
    <hr/>
    <Greeting name="matt" age={23}/>
    <Greeting name="tasmin" age={21}/>
    <h1>Your favourite songs are</h1>
    <SongList/>
    </div>
  )
}
export default App
