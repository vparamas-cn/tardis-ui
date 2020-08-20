import types from './types'
const initialState = {
    isLoading: false,
    data: [],
    filterData: [],
    filter: {},
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 0,
    pageBound: false,
    sourceType: [],
    updatecount: 0,
    sourceList:[],
    AlertList:[]
}
const UpdatePageBound = (totalPage,pageBound) =>{
    if(!pageBound){
        if (totalPage > 5) {
        pageBound = { current: 5, upperbound: 5, lowerbound: 0 }
        }
        else {
        pageBound = { current: totalPage, upperbound: totalPage, lowerbound: 0 }
        }
    }
    return pageBound;
}
const slackReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SLACK_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                data: [],
                filterData: [],
                filter: {},
                updatecount: 0,
                pageBound: false,
                page: 1,
                totalPage: 1,
                totalElements: 0,
            }
        }
        case types.SLACK_LIST_SUCCESS: {
            let slackdata = action.payroll.data.slackSubscription;
            return {
                ...state,
                isLoading: false,
                data: slackdata.results.filter
                    ((e) => e !== null),
                totalElements: slackdata.totalElements,
                page: slackdata.currentPage,
                totalPage: slackdata.totalPages,
                totalElements: slackdata.totalElements,
                size: slackdata.size,
                pageBound: UpdatePageBound(slackdata.totalPages, state.pageBound)
            }
        }
        case types.SLACK_LIST_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        case types.FILTER_SLACK_PAGINATION: {
            let datafilter = action.payroll;
            return {
                ...state,
                filter: datafilter.filter ? datafilter.filter : {},
                filterData: datafilter.filterData ? datafilter.filterData.filter
                ((e) => e !== null) : [],
                page: datafilter.page ? datafilter.page : 1,
                size: datafilter.size ? datafilter.size : 5,
                totalPage: datafilter.totalPage ? datafilter.totalPage : 1,
                totalElements: datafilter.totalElements ? datafilter.totalElements : 0,
                pageBound: datafilter.pageBound ? datafilter.pageBound : { current: 1, upperbound: 1, lowerbound: 0 }
            }
        }
        case types.FILTER_SLACK_LIST_REQUEST: {
            return {
                ...state,
                isLoading: true,
                sourceList:[],
                AlertList:[]
            }
        }
        case types.SOURCE_SLACK_LIST_SUCCESS: {
            return {
                ...state,
                sourceList: action.payroll.data.source.results.filter
                    ((e) => e !== null)
            }
        }
        case types.ALERT_SLACK_LIST_SUCCESS: {
            return {
                ...state,
                AlertList: action.payroll.data.slackAlertLevel.results.filter
                    ((e) => e !== null)
            }
        }
        default: return state;
    }

}

export default slackReducer;