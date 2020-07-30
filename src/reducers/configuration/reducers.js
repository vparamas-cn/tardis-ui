import { SOURCE_LIST_REQUEST, SOURCE_LIST_SUCCESS, SOURCE_LIST_FAILURE, ADD_SOURCE_REQUEST, ADD_SOURCE_SUCCESS, ADD_SOURCE_FAILURE } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    search: "",
    filter: {},
    page: 1,
    count: 10,
    totalPage:1,
    totalrow:10,
    currentpage:1
}

const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SOURCE_LIST_REQUEST: {
            return {
                ...state,
                isLoading: false
            }
        }
        case SOURCE_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                data: action.payroll.results,
                totalPage: action.payroll.totalPages,
                count: action.payroll.size,
                page: action.payroll.currentPage,
                totalrow: action.payroll.totalElements,
                currentpage: action.payroll.currentPage
            }
        }
        case SOURCE_LIST_FAILURE: {
            return {
                ...state,
                isLoading: true
            }
        }
        default: return state;
    }

}

export default sourceReducer;