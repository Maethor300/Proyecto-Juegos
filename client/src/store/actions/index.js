import axios from 'axios';
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES';


 export function fetchVideoGames(){
     return function (dispatch){
        axios.get('http://localhost:3001/games')
        .then((videogames1) => {
            dispatch({
                type:FETCH_VIDEOGAMES,
                payload: videogames1
            })
        })
     } 
 }
