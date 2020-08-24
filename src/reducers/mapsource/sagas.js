import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import types from './types'
import { fetch ,paginationFilter} from '../../utils'
import query from '../../assets/constant/query'

const getsourceMap = state => state.map;

export function* fetchList() {
    let response;
    try {
        let hasrow = false, size = 1000, data={};
        do {
            response = yield call(fetch, query.sourceMap(size));
            data = yield response.data;
            size += 1000;
            hasrow = data.data.sourceMap.hasNextPage;
            if (hasrow)
                size = data.data.sourceMap.totalElements;
        }
        while (hasrow)
        yield put({ type: types.MAP_LIST_SUCCESS, payroll: data });
        let mapList = data.data.sourceMap.results;
        const map = yield select(getsourceMap);
        if(mapList.length > 0){
            let result = paginationFilter(map)
            result.page = 1;
            result.filter={};
            yield put({ type: types.FILTER_MAP_PAGINATION, payroll: result });
        }

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