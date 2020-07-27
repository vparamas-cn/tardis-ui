import { MAINTENNACE_LIST_REQUEST, MAINTENNACE_LIST_SUCCESS, MAINTENNACE_LIST_FAILURE, ADD_MAINTENNACE_REQUEST, ADD_MAINTENNACE_SUCCESS, ADD_MAINTENNACE_FAILURE } from './actions'

const initialState = {
    isLoading: false,
    data: [],
    currentpage: 1,
    noofpage: 5
}

const maintennaceReducer = (state = initialState, action) => {

    switch (action.type) {
        case MAINTENNACE_LIST_REQUEST: {
            return {
                ...state,
                isLoading: false
            }
        }
        case MAINTENNACE_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: true,
                data: action.payroll
            }
        }
        case MAINTENNACE_LIST_SUCCESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        default: return state;
    }

}

export default maintennaceReducer;