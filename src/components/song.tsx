import { SongType } from "./songList";

const Song=(props:SongProps):JSX.Element =>{

   

    return (
    <div>
    <li> {props.song.title} by {props.song.artist} has {props.song.votes}</li>
    <button onClick={props.VoteFunction}>Vote</button>
    </div>
    
    )
}

export default Song;
type SongProps = {song: SongType, VoteFunction : ()=>void};
