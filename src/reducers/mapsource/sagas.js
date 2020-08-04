import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MAP_LIST_FAILURE, MAP_LIST_SUCCESS ,MAP_LIST_REQUEST } from './actions';
import { fetch } from '../../assets/constant'
import query from '../../assets/constant/query'

export function* fetchList(action) {
    let response;
    try {
        let hasrow = false; let size = 1000;
        do{
        response = yield call(fetch,query.sourceMap(size));
        const data = yield response.data;
        size += 1000;
        hasrow = data.hasNextPage;
        yield put({ type: MAP_LIST_SUCCESS, payroll: data });
        }
        while(hasrow)
    }
    catch (error) {
        yield put({ type: MAP_LIST_FAILURE });
    }
}

export function* loadList() {
    yield takeLatest(MAP_LIST_REQUEST, fetchList);
}

export default function* mainSaga() {
    yield all([loadList()]);
}