import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetch } from '../../utils'
import query from '../../assets/constant/query'
import types from './types'

export function* fetchList() {
    let response;
    try {
        let hasrow = false, size = 1000;
        do {
            response = yield call(fetch, query.slack({size}));
            const data = yield response.data;
            size += 1000;
            hasrow = data.data.slackSubscription.hasNextPage;
            if (hasrow)
                size = data.data.slackSubscription.totalElements;
            yield put({ type: types.SLACK_LIST_SUCCESS, payroll: data });
        }
        while (hasrow)

    }
    catch (error) {
        yield put({ type: types.SLACK_LIST_FAILURE });
    }
}

export function* fetchFilter() {

    let response;
    try {
        let hasrow = false, size = 1000, data = {};
        do {
            response = yield call(fetch, query.sourceDash(size));
            data = yield response.data;
            size += 1000;
            hasrow = data.data.source.hasNextPage;
            if (hasrow)
                size = data.data.source.totalElements;

        }
        while (hasrow)
        yield put({ type: types.SOURCE_SLACK_LIST_SUCCESS, payroll: data });
        let responsealert = yield call(fetch, query.slackalert());
        const dataalert = yield responsealert.data;
        yield put({ type: types.ALERT_SLACK_LIST_SUCCESS, payroll: dataalert });
    }
    catch (error) {

    }
}


export function* loadList() {
    yield takeLatest(types.SLACK_LIST_REQUEST, fetchList);
    yield takeLatest(types.FILTER_SLACK_LIST_REQUEST, fetchFilter);
}

export default function* mainSaga() {
    yield all([loadList()]);
}