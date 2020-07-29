import { SOURCE_LIST_REQUEST, SOURCE_LIST_SUCCESS, SOURCE_LIST_FAILURE, ADD_SOURCE_REQUEST, ADD_SOURCE_SUCCESS, ADD_SOURCE_FAILURE } from './actions'

const initialState = {
    isLoading: false,
    data: [{
        "source": "GA Components",
        "description": "GA and related Components",
        "alias": "Traffic/GA",
        "availabilitySchedule": "16:00:00",
        "numPrevDays": 1,
        "isactive": false
      }],
    search: "",
    filter: {},
    page: 1,
    count: 10
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
                data: action.payroll
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