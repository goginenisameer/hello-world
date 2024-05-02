import { useState } from "react";
import Song from "./song";

const SongList =():JSX.Element =>{
    const [isVisible, setIsvisible] = useState<boolean>(false);
    const toggleSongs=()=>{
       
        setIsvisible((isVisible) => !isVisible);  
    };

    const initialSongList: SongType[] = [
        {title : 'Last thing on my mind', artist: 'steps', votes : 0},
        {title : 'If you\'re over me', artist: 'Years and years', votes : 0},
        {title : '9 to 5', artist: 'Dolly Parton', votes: 0},
        {title : 'Toms Diner', artist: 'Vega', votes: 0}
    ];


    const [songs,setSongs]=useState<SongType[]>(initialSongList)
    const votingFunction = (index : number) => {
        debugger
        const updatedSongs = songs
            .map( (song, i) => i === index ? {...song, votes : song.votes + 1} : song);
        setSongs(updatedSongs);
    }


    const displaySongs:JSX.Element[]=
    songs.map((s,idx)=><Song song={s} key={idx} VoteFunction={()=>votingFunction(idx)}/>)
    //let [song1, setSong1] = useState<SongType>({title : 'Last thing on my mind', artist: 'steps', votes : 0});
   // let [song2, setSong2] = useState<SongType>({title : 'If you\'re over me', artist: 'Years and years', votes : 0});


    /* const voteSong1 = () :void => {
        setSong1({...song1, votes : song1.votes + 1});
    }

    const voteSong2 = () :void => {
        setSong2({...song2, votes : song2.votes + 1});
    } */
    
    return (
        <div>
        <ul id="songlist" style={{display:isVisible?"block":"none"}}> 
        
                {displaySongs}
   
   
    </ul>
   <button  onClick={toggleSongs}>{isVisible?"Hide songs":"Show songs"}</button>
   </div>
    )
}

export default SongList;

   

export type SongType = {title: string, artist: string, votes: number};    






   



