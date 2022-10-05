import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchVideoGames} from '../../store/actions/index';
import Videogame from '../Videogame/Videogame.jsx'
export default function Videogames(){
    let videogames = useSelector((state) => state.videoGames);
    let dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchVideoGames());
    },[])
    console.log(videogames)
    return <div>
        {videogames.map((videogames) => {
            
        return <Videogame name = {videogames.name} image = {videogames.background_image} />
        })}
      
    </div>
    
}
 