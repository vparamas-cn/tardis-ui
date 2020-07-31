import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { SOURCE_LIST_REQUEST, SOURCE_LIST_FAILURE, SOURCE_LIST_SUCCESS, ACTION_SOURCE_REQUEST, ACTION_SOURCE_SUCCESS, ACTION_SOURCE_FAILURE } from './actions';
import { fetch } from '../../assets/constant'
import { ACTION_MAP_SUCCESS } from '../mapSource/actions';

export const getSource = (state) => state.source

export function* fetchList(action) {
    try {
        let details = yield select(getSource); 
        const response = yield call(fetch,action.payroll);
        const data = yield response.data;
        yield put({ type: SOURCE_LIST_SUCCESS, payroll: data });
    }
    catch (error) {
        yield put({ type: SOURCE_LIST_FAILURE });
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
    yield takeLatest(SOURCE_LIST_REQUEST, fetchList);
    yield takeLatest(ACTION_SOURCE_REQUEST, actionHandler);
}

export default function* mainSaga() {
    yield all([loadList()]);
}