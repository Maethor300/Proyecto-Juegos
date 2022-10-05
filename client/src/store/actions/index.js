import axios from 'axios';
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES';
export const SEARCH_VIDEOGAMES = 'SEARCH_VIDEOGAMES';

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
 export function searchVideoGames(search){
     return function(dispatch){
        axios.get('http://localhost:3001/games/search?name='+ search)
        .then((videogames2) =>{
             dispatch({
                type:SEARCH_VIDEOGAMES,
                payload: videogames2
             })
        })
     }
}
