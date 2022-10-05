import { FETCH_VIDEOGAMES,
         SEARCH_VIDEOGAMES } from "../actions";

const initialState = {
    videoGames: [],
    filteredVideoGames: []
}
 export default function reducer (state = initialState, action) {
    switch(action.type){
        case FETCH_VIDEOGAMES:
            return {
                ...state,
                videoGames:action.payload.data
                 
            }
        case SEARCH_VIDEOGAMES:
            return {
                ...state,
                videoGames:action.payload.data
            }
            default:
                return {
                    ...state
                }
    }
}
