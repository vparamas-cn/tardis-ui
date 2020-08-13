import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetch } from '../../utils'
import types from './types'
import query from '../../assets/constant/query'

export function* fetchList(action) {
    let response;
    try {
        let hasrow = false, size = 100 ,data ={};
       do {
            let request = action.payroll;
            request.size = size;
            response = yield call(fetch, query.dashboardList(request));
            data = yield response.data;
            hasrow = data.data.dataAvailability.hasNextPage;
            if (hasrow)
                size = data.data.dataAvailability.totalElements;
           
        }
        while (hasrow)
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