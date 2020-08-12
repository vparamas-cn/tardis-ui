import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetch } from '../../utils'
import query from '../../assets/constant/query'
import types from './types'

export function* fetchList() {
    let response;
    try {
        let hasrow = false, size = 1000, datalist = [];
        do {
            response = yield call(fetch, query.source(size));
            const data = yield response.data;
            size += 1000;
            hasrow = data.data.source.hasNextPage;
            if (hasrow)
                size = data.data.source.totalElements;
            yield put({ type: types.SOURCE_LIST_SUCCESS, payroll: data });
        }
        while (hasrow)

    }
    catch (error) {
        yield put({ type: types.SOURCE_LIST_FAILURE });
    }
}

export function* fetchType() {

    try {
        let response = yield call(fetch, query.sourceType());
        const data = yield response.data;
        yield put({ type: types.SOURCE_TYPE_SUCCESS, payroll: data });
    }
    catch (error) {

    }
}


export function* loadList() {
    yield takeLatest(types.SOURCE_LIST_REQUEST, fetchList);
    yield takeLatest(types.SOURCE_TYPE_REQUEST, fetchType);
}

export default function* mainSaga() {
    yield all([loadList()]);
}