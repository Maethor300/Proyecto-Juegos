import { FETCH_VIDEOGAMES } from "../actions";

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
            default:
                return {
                    ...state
                }
    }
}
 