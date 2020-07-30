import { MAP_LIST_REQUEST, MAP_LIST_SUCCESS, MAP_LIST_FAILURE, ACTION_SOURCE_REQUEST, ACTION_SOURCE_SUCCESS, ACTION_SOURCE_FAILURE } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    search: "",
    filter: {},
    page: 1,
    size: 10,
    totalPage:1,
    totalElements:10,
    currentpage:1
}

const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case MAP_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case MAP_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: action.payroll.data.source.results,
                totalPage: action.payroll.data.source.totalPages,
                size: action.payroll.data.source.size,
                page: action.payroll.data.source.currentPage,
                totalrow: action.payroll.data.source.totalElements,
                currentpage: action.payroll.data.source.currentPage
            }
        }
        case MAP_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ACTION_SOURCE_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ACTION_SOURCE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
            }
        }
        case ACTION_SOURCE_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: return state;
    }

}

export default sourceReducer;