const Song=(props:SongProps):JSX.Element =>{
    return (
    <div>
    <li> {props.title} by {props.artist}</li>
    </div>
    )
}

export default Song;
type SongProps={
    title: string,
    artist: string
}