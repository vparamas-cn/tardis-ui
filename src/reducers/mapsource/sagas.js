import { all, call, put, takeLatest } from 'redux-saga/effects';
import types from './types'
import { fetch } from '../../utils'
import query from '../../assets/constant/query'

export function* fetchList() {
    let response;
    try {
        let hasrow = false, size = 1000;
        do {
            response = yield call(fetch, query.sourceMap(size));
            const data = yield response.data;
            size += 1000;
            hasrow = data.data.sourceMap.hasNextPage;
            if (hasrow)
                size = data.data.sourceMap.totalElements;
            yield put({ type: types.MAP_LIST_SUCCESS, payroll: data });
        }
        while (hasrow)

    }
    catch (error) {
        yield put({ type: types.MAP_LIST_FAILURE });
    }
}

export function* loadList() {
    yield takeLatest(types.MAP_LIST_REQUEST, fetchList);
}

export default function* mainSaga() {
    yield all([loadList()]);
}