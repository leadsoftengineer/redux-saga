/**
 smolynx2019@hotmail.com
 **/
import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionTypes';
const movieReducers = (movies = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        // case ADD_MOVIE:
        //     return [
        //         ...movies,
        //         action.newMovie
        //     ];
        default:
            return movies; //state does not change
    }
}

export default movieReducers;