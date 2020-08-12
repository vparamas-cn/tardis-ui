import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetch } from '../../utils'
import types from './types'

export function* fetchList(action) {
    let response;
    try {
        response = yield call(fetch, action.payroll);
        const data = yield response.data;
        yield put({ type: types.PIPELINE_LIST_SUCCESS, payroll: data });
    }
    catch (error) {
        
    }
}

export function* loadList() {
    yield takeLatest(types.PIPELINE_LIST_REQUEST, fetchList);
}

export default function* mainSaga() {
    yield all([loadList()]);
}