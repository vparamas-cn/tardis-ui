import { combineReducers } from 'redux';
import { all, fork} from 'redux-saga/effects'
import sourceReducers, {saga as sourceSaga} from './configuration'
import sourceMapReducers, {saga as sourceMapSaga} from './mapSource'



export function* rootSaga() {
    yield all([
        fork(sourceSaga),
        fork(sourceMapSaga)
    ])
}

export default combineReducers({
    source: sourceReducers,
    map: sourceMapReducers
});