import { SOURCE_LIST_REQUEST, SOURCE_LIST_SUCCESS, SOURCE_LIST_FAILURE, ACTION_SOURCE_ADD, ACTION_SOURCE_UPDATE, ACTION_SOURCE_DELETE, FILTER_SOURCE_PAGINATION, SOURCE_TYPE_SUCCESS } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    filterData: [],
    filter: {},
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 5,
    pageBound: { current: 1, upperbound: 1, lowerbound: 0 },
    sourceType:[]
}
const updateData = (data, update) => {
    for (var x in data) {
        if (data[x].source === update.source) {
            data[x] = update
        }
    }
    return data
}
const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SOURCE_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                data: []
            }
        }
        case SOURCE_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: state.data.concat(action.payroll.data.source.results),
                totalElements: action.payroll.data.source.totalElements,
            }
        }
        case SOURCE_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ACTION_SOURCE_ADD: {
            return {
                ...state,
                data: state.data.concat(action.payroll),
                filterData: state.filterData.concat(action.payroll),
                totalElements: state.totalElements + 1
            }
        }
        case ACTION_SOURCE_UPDATE: {
            let payrolldata = action.payroll;
            var DataUpdate = updateData(state.data, payrolldata);
            var FilterUpdate = updateData(state.filterData, payrolldata);
            return {
                ...state,
                data: DataUpdate,
                filterData: FilterUpdate
            }
        }
        case ACTION_SOURCE_DELETE: {
            let payrolldata = action.payroll;
            return {
                ...state,
                data: state.data.filter((e, i) => e.source !== payrolldata.source),
                filterData: state.filterData.filter((e, i) => e.source !== payrolldata.source),
                totalElements: state.totalElements - 1
            }
        }
        case FILTER_SOURCE_PAGINATION: {
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
        case SOURCE_TYPE_SUCCESS: {
            return {
                ...state,
                sourceType : action.payroll.data.sourceType
            }
        }
        default: return state;
    }

}

export default sourceReducer;