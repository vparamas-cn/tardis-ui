import { combineReducers } from 'redux';
import { all, fork} from 'redux-saga/effects'
import maintennaceReducers, {saga as maintennaceSaga} from './maintennace'



export function* rootSaga() {
    yield all([
        fork(maintennaceSaga)
    ])
}

export default combineReducers({
    maintennace: maintennaceReducers
});