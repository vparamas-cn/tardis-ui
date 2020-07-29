import { combineReducers } from 'redux';
import { all, fork} from 'redux-saga/effects'
import sourceReducers, {saga as sourceSaga} from './configuration'



export function* rootSaga() {
    yield all([
        fork(sourceSaga)
    ])
}

export default combineReducers({
    source: sourceReducers
});