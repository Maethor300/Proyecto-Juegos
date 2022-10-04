import axios from 'axios';
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES';


 export function fetchVideoGames(){
     return function (dispatch){
        axios.get('http://localhost:3001/games')
        .then((videogames) => {
            dispatch({
                type:FETCH_VIDEOGAMES,
                payload: videogames.data
            })
        })
     } 
 }
