import { MAP_LIST_REQUEST, MAP_LIST_SUCCESS, MAP_LIST_FAILURE, ACTION_SOURCEMAP_ADD, ACTION_SOURCEMAP_UPDATE, ACTION_SOURCEMAP_DELETE, FILTER_MAP_PAGINATION } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    filterData: [],
    filter: {},
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 0,
    pageBound: { current: 1, upperbound: 1, lowerbound: 0 }
}
const updateData = (data, update) => {
    for (var x in data) {
        if (data[x].source.source === update.source && data[x].childSource.source === update.childSource) {
            data[x].isoptional = update.isoptional;
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
                data: [],
                filterData: [],
                pageBound: { current: 1, upperbound: 1, lowerbound: 0 },
                page: 1,
                totalPage: 1,
                totalElements: 0,
            }
        }
        case MAP_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.payroll.data.sourceMap.results.filter
                    ((e) => e !== null)),
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
                totalElements: state.totalElements + 1
            }
        }
        case ACTION_SOURCEMAP_UPDATE: {
            let payroll = action.payroll;
            var DataUpdate = updateData(state.data, payroll);
            var FilterUpdate = updateData(state.filterData, payroll);
            return {
                ...state,
                data: DataUpdate,
                filterData: FilterUpdate
            }
        }
        case ACTION_SOURCEMAP_DELETE: {
            let payroll = action.payroll;
            return {
                ...state,
                data: state.data.filter((e, i) => { return e.source.source !== payroll.source.source && e.childSource.source !== payroll.childSource.source }),
                filterData: state.filterData.filter((e, i) =>{ return e.source.source !== payroll.source.source && e.childSource.source !== payroll.childSource.source}),
                totalElements: state.totalElements - 1
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
                totalElements: data.totalElements ? data.totalElements : 0,
                pageBound: data.pageBound ? data.pageBound : { current: 1, upperbound: 1, lowerbound: 0 }
            }
        }
        default: return state;
    }

}

export default sourceReducer;