export const MAP_LIST_REQUEST= "MAP_LIST_REQUEST";
export const MAP_LIST_SUCCESS= "MAP_LIST_SUCCESS";
export const MAP_LIST_FAILURE= "MAP_LIST_FAILURE";
export const ADD_MAP_REQUEST= "ADD_MAP_REQUEST";
export const ADD_MAP_SUCCESS= "ADD_MAP_SUCCESS";
export const ADD_MAP_FAILURE= "ADD_MAP_FAILURE";
export const UPDATE_MAP_REQUEST= "UPDATE_MAP_REQUEST";
export const UPDATE_MAP_SUCCESS= "UPDATE_MAP_SUCCESS";
export const UPDATE_MAP_FAILURE= "UPDATE_MAP_FAILURE";
export const DELETE_MAP_REQUEST= "DELETE_MAP_REQUEST";
export const DELETE_MAP_SUCCESS= "DELETE_MAP_SUCCESS";
export const DELETE_MAP_FAILURE= "DELETE_MAP_FAILURE";

export const SourceMapRecords = (data) =>{
    return {
        type: MAP_LIST_REQUEST,
        payroll: data
    }
}

export const AddSourceMap = (data) =>{
    return {
        type: ADD_MAP_REQUEST,
        payroll: data
    }
}

export const UpdateSourceMap = (data) =>{
    return {
        type: UPDATE_MAP_REQUEST,
        payroll: data
    }
}

export const DeleteSourceMap = (data) =>{
    return {
        type: DELETE_MAP_REQUEST,
        payroll: data
    }
}
