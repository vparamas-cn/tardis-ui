import { MAP_LIST_REQUEST, MAP_LIST_SUCCESS, MAP_LIST_FAILURE, ACTION_SOURCEMAP_ADD, ACTION_SOURCEMAP_UPDATE, ACTION_SOURCEMAP_DELETE, FILTER_MAP_PAGINATION } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    filterData: [],
    filter: {},
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 5,
    pageBound: { current: 1, upperbound: 1, lowerbound: 0 }
}
const updateData = (data, update) => {
    for (var x in data) {
        if (data[x].source.source === update.source.source && data[x].childSource.source === update.childSource.source) {
            data[x] = update
        }
    }
    return data
}
const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case MAP_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                data:[]
            }
        }
        case MAP_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.payroll.data.sourceMap.results),
                totalElements: action.payroll.data.sourceMap.totalElements,
            }
        }
        case MAP_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ACTION_SOURCEMAP_ADD: {
            return {
                ...state,
                data: state.data.concat(action.payroll),
                filterData: state.filterData.concat(action.payroll),
            }
        }
        case ACTION_SOURCEMAP_UPDATE: {
            var data = action.payroll;
            var DataUpdate = updateData(state.data, data);
            var FilterUpdate = updateData(state.filterData, data);
            return {
                ...state,
                data: DataUpdate,
                filterData: FilterUpdate
            }
        }
        case ACTION_SOURCEMAP_DELETE: {
            var data = action.payroll;
            return {
                ...state,
                data: state.data.filter((e, i) => e.source.source !== data.source.source && e.childSource.source !== data.childSource.source),
                filterData: state.filterData.filter((e, i) =>e.source.source !== data.source.source && e.childSource.source !== data.childSource.source),
            }
        }
        case FILTER_MAP_PAGINATION: {
            var data = action.payroll;
            return {
                ...state,
                filter: data.filter ? data.filter : {},
                filterData: data.filterData ? data.filterData : [],
                page: data.page ? data.page : 1,
                size: data.size ? data.size : 5,
                totalPage: data.totalPage ? data.totalPage : 1,
                totalElements: data.totalElements ? data.totalElements : 5,
                pageBound: data.pageBound ? data.pageBound : { current: 1, upperbound: 1, lowerbound: 0 }
            }
        }
        default: return state;
    }

}

export default sourceReducer;