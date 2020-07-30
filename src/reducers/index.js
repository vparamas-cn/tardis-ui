import { combineReducers } from 'redux';
import { all, fork} from 'redux-saga/effects'
import sourceReducers, {saga as sourceSaga} from './configuration'
import sourcemapReducers, {saga as sourcemapSaga} from './mapsource'



export function* rootSaga() {
    yield all([
        fork(sourceSaga),
        fork(sourcemapSaga)
    ])
}

export default combineReducers({
    source: sourceReducers,
    sourcemap: sourcemapReducers
});