import { all, call, put, takeLatest } from 'redux-saga/effects';
import { SOURCE_LIST_REQUEST, SOURCE_LIST_FAILURE, SOURCE_LIST_SUCCESS, SOURCE_TYPE_SUCCESS, SOURCE_TYPE_REQUEST } from './actions';
import { fetch } from '../../utils'
import query from '../../assets/constant/query'

export function* fetchList() {
    let response;
    try {
        let hasrow = false; let size = 1000;
        do{
        response = yield call(fetch,query.source(size));
        const data = yield response.data;
        size += 1000;
        hasrow = data.hasNextPage;
        yield put({ type: SOURCE_LIST_SUCCESS, payroll: data });
        }
        while(hasrow)
    }
    catch (error) {
        yield put({ type: SOURCE_LIST_FAILURE });
    }
}

export function* fetchType() {

    try {
        let response = yield call(fetch,query.sourceType());
        const data = yield response.data;
        yield put({ type: SOURCE_TYPE_SUCCESS, payroll: data });
    }
    catch (error) {

    }
}


export function* loadList() {
    yield takeLatest(SOURCE_LIST_REQUEST, fetchList);
    yield takeLatest(SOURCE_TYPE_REQUEST, fetchType);
}

export default function* mainSaga() {
    yield all([loadList()]);
}