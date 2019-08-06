/**
 smolynx2019@hotmail.com
 **/

//Saga effects
import { fork } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
//Add movie
import { watchAddNewMovie } from './movieSagas';

export default function* rootSaga() {
    yield [
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
    ];
}