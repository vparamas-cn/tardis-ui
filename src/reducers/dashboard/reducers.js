import types from './types'
const initialState = {
    data: [],
    filterData: [],
    page: 1,
    size: 5,
    totalPage: 1,
    totalElements: 0,
    pageBound: { current: 1, upperbound: 1, lowerbound: 0 },
    sourceNames: [],
    startdate:new Date(),
    endcount:1,
    filter:false
}

const sourceReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.PIPELINE_LIST_REQUEST: {
            return {
                ...state,
                data: [],
                filterData: [],
                pageBound: { current: 1, upperbound: 1, lowerbound: 0 },
                page: 1,
                totalPage: 1,
                totalElements: 0,
                sourceNames: [],
                startdate:new Date(),
                endcount:1,
                filter:false
            }
        }
        case types.PIPELINE_LIST_SUCCESS: {
            return {
                ...state,
                data: action.payroll.data.dataAvailability.results.filter
                    ((e) => e !== null),
                totalElements: action.payroll.data.dataAvailability.totalElements
            }
        }
       case types.FILTER_PIPELINE_PAGINATION: {
            let datafilter = action.payroll;
            return {
                ...state,
                filterData: datafilter.filterData ? datafilter.filterData.filter
                ((e) => e !== null) : [],
                page: datafilter.page ? datafilter.page : 1,
                size: datafilter.size ? datafilter.size : 5,
                sourceNames: datafilter.sourceNames ? datafilter.sourceNames : [],
                totalPage: datafilter.totalPage ? datafilter.totalPage : 1,
                totalElements: datafilter.totalElements ? datafilter.totalElements : 0,
                pageBound: datafilter.pageBound ? datafilter.pageBound : { current: 1, upperbound: 1, lowerbound: 0 },
                startdate:datafilter.startdate ? datafilter.startdate:new Date(),
                endcount:datafilter.endcount ? datafilter.endcount:1,
                filter:datafilter.filter ? datafilter.filter:false
            }
        }
        default: return state;
    }

}

export default sourceReducer;