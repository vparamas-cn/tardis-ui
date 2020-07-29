import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { SOURCE_LIST_REQUEST, SOURCE_LIST_FAILURE, SOURCE_LIST_SUCCESS } from './actions';
import {getList} from "./api"

export const getSource = (state) => state.source

export function* fetchList(action) {
    try {
        let details = yield select(getSource); 
        const response = yield call(()=>getList(action));
        const data = yield response.json();
        yield put({ type: SOURCE_LIST_SUCCESS, payroll: data });
    }
    catch (error) {
        yield put({ type: SOURCE_LIST_FAILURE });
    }
}

export function* loadList() {
    //yield takeLatest(SOURCE_LIST_REQUEST, fetchList);
}

export default function* mainSaga() {
    yield all([loadList()]);
}