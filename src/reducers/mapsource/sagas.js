import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { MAP_LIST_FAILURE, MAP_LIST_SUCCESS ,MAP_LIST_REQUEST , ACTION_SOURCE_REQUEST, ACTION_SOURCE_SUCCESS, ACTION_SOURCE_FAILURE } from './actions';
import { fetch } from '../../assets/constant'

export const getSourceMap = (state) => state.map

export function* fetchList(action) {
    try {
        let details = yield select(getSourceMap); 
        const response = yield call(fetch,action.payroll);
        const data = yield response.json();
        yield put({ type: MAP_LIST_SUCCESS, payroll: data });
    }
    catch (error) {
        yield put({ type: MAP_LIST_FAILURE });
    }
}
export function* actionHandler(action) {
    try {
        const response = yield call(fetch,action.payroll);
        const data = yield response.data;
        yield put({ type: ACTION_SOURCE_SUCCESS, payroll: data });
    }
    catch (error) {
        yield put({ type: ACTION_SOURCE_FAILURE });
    }
}

export function* loadList() {
    yield takeLatest(MAP_LIST_REQUEST, fetchList);
    yield takeLatest(ACTION_SOURCE_REQUEST, actionHandler);
}

export default function* mainSaga() {
    yield all([loadList()]);
}