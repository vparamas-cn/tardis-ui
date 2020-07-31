import { SOURCE_LIST_REQUEST, SOURCE_LIST_SUCCESS, SOURCE_LIST_FAILURE, ACTION_SOURCE_REQUEST, ACTION_SOURCE_SUCCESS, ACTION_SOURCE_FAILURE, ACTION_RESET } from './actions'

const initialState = {
    isLoading: false,
    isactionLoading: false,
    data: [],
    search: "",
    filter: {},
    page: 1,
    size: 10,
    totalPage:1,
    totalElements:10,
    currentpage:1,
    actiondata:{message:"",data:{}}
}

const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SOURCE_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case SOURCE_LIST_SUCCESS: {
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
        case SOURCE_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case ACTION_SOURCE_REQUEST: {
            return {
                ...state,
                isactionLoading: true,
                actiondata:{ message: "",data :{} }
            }
        }
        case ACTION_SOURCE_SUCCESS: {
            var err = action.payroll.errors;
            return {
                ...state,
                isactionLoading: false,
                actiondata:{ message: err?"error":"success",data :err ? "getting server error" :"source added successfully!!"}
            }
        }
        case ACTION_SOURCE_FAILURE: {
            return {
                ...state,
                isactionLoading: false,
                actiondata:{ message: "error",data :"getting server error"}
            }
        }
        case ACTION_RESET: {
            return {
                ...state,
                isactionLoading: false,
                actiondata:{ message: "",data :""}
            }
        }
        default: return state;
    }

}

export default sourceReducer;