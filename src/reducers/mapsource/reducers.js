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
        if (data[x].id === update.id) {
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
            let payrollupdate = action.payroll.updateSourceMap.sourceMap;
            var DataUpdate = updateData(state.data, payrollupdate);
            var FilterUpdate = updateData(state.filterData, payrollupdate);
            return {
                ...state,
                data: DataUpdate,
                filterData: FilterUpdate
            }
        }
        case ACTION_SOURCEMAP_DELETE: {
            let payrolldelete = action.payroll;
            let dataafterremoved = state.data.filter((e) => { return e.id !== payrolldelete.id })
            let filterdataafterremoved = state.filterData.filter((e) => {  return e.id !== payrolldelete.id })
            return {
                ...state,
                data: dataafterremoved,
                filterData: filterdataafterremoved,
                totalElements: state.totalElements - 1
            }
        }
        case FILTER_MAP_PAGINATION: {
            let datafilter = action.payroll;
            return {
                ...state,
                filter: datafilter.filter ? datafilter.filter : {},
                filterData: datafilter.filterData ? datafilter.filterData : [],
                page: datafilter.page ? datafilter.page : 1,
                size: datafilter.size ? datafilter.size : 5,
                totalPage: datafilter.totalPage ? datafilter.totalPage : 1,
                totalElements: datafilter.totalElements ? datafilter.totalElements : 0,
                pageBound: datafilter.pageBound ? datafilter.pageBound : { current: 1, upperbound: 1, lowerbound: 0 }
            }
        }
        default: return state;
    }

}

export default sourceReducer;