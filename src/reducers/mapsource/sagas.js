import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { MAP_LIST_REQUEST, MAP_LIST_FAILURE, MAP_LIST_SUCCESS } from './actions';
import {getList} from "./api"

export const getSourceMap = (state) => state.sourcemap

export function* fetchList(action) {
    try {
        let details = yield select(getSourceMap); 
        const response = yield call(()=>getList(action));
        const data = yield response.json();
        yield put({ type: MAP_LIST_SUCCESS, payroll: data });
    }
    catch (error) {
        yield put({ type: MAP_LIST_FAILURE });
    }
}

export function* loadList() {
    //yield takeLatest(MAP_LIST_REQUEST, fetchList);
}

export default function* mainSaga() {
    yield all([loadList()]);
}