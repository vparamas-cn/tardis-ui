import { combineReducers } from 'redux';
import { all, fork} from 'redux-saga/effects'
import sourceReducers, {saga as sourceSaga} from './configuration'
import sourceMapReducers, {saga as sourceMapSaga} from './mapSource'
import dashboardMapReducers, {saga as dashboardMapSaga} from './dashboard'
import slackMapReducers, {saga as slackMapSaga} from './slack'

export function* rootSaga() {
    yield all([
        fork(sourceSaga),
        fork(sourceMapSaga),
        fork(dashboardMapSaga),
        fork(slackMapSaga),
    ])
}

export default combineReducers({
    source: sourceReducers,
    map: sourceMapReducers,
    dashboard: dashboardMapReducers,
    slack: slackMapReducers,
});