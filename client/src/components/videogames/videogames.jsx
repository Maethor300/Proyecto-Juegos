import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchVideoGames} from '../../store/actions/index'
export default function Videogames(){
    let videogames = useSelector((state) => state.videoGames);
    let dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchVideoGames());
    },[])
    console.log(videogames)
    return (
        <div></div>
    )
}
 