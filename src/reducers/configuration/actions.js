export const SOURCE_LIST_REQUEST= "SOURCE_LIST_REQUEST";
export const SOURCE_LIST_SUCCESS= "SOURCE_LIST_SUCCESS";
export const SOURCE_LIST_FAILURE= "SOURCE_LIST_FAILURE";
export const ADD_SOURCE_REQUEST= "ADD_SOURCE_REQUEST";
export const ADD_SOURCE_SUCCESS= "ADD_SOURCE_SUCCESS";
export const ADD_SOURCE_FAILURE= "ADD_SOURCE_FAILURE";
export const UPDATE_SOURCE_REQUEST= "UPDATE_SOURCE_REQUEST";
export const UPDATE_SOURCE_SUCCESS= "UPDATE_SOURCE_SUCCESS";
export const UPDATE_SOURCE_FAILURE= "UPDATE_SOURCE_FAILURE";
export const DELETE_SOURCE_REQUEST= "DELETE_SOURCE_REQUEST";
export const DELETE_SOURCE_SUCCESS= "DELETE_SOURCE_SUCCESS";
export const DELETE_SOURCE_FAILURE= "DELETE_SOURCE_FAILURE";

export const SourceRecords = (data) =>{
    return {
        type: SOURCE_LIST_REQUEST,
        payroll: data
    }
}

export const AddSource = (data) =>{
    return {
        type: ADD_SOURCE_REQUEST,
        payroll: data
    }
}

export const UpdateSource = (data) =>{
    return {
        type: UPDATE_SOURCE_REQUEST,
        payroll: data
    }
}

export const DeleteSource = (data) =>{
    return {
        type: DELETE_SOURCE_REQUEST,
        payroll: data
    }
}
