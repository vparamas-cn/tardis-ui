export const MAP_LIST_REQUEST= "MAP_LIST_REQUEST";
export const MAP_LIST_SUCCESS= "MAP_LIST_SUCCESS";
export const MAP_LIST_FAILURE= "MAP_LIST_FAILURE";
export const ACTION_SOURCE_REQUEST= "ACTION_SOURCE_REQUEST";
export const ACTION_SOURCE_SUCCESS= "ACTION_SOURCE_SUCCESS";
export const ACTION_SOURCE_FAILURE= "ACTION_SOURCE_FAILURE";

export const SourceMapRecords = (data) =>{
    return {
        type: MAP_LIST_REQUEST,
        payroll: data
    }
}

export const ActionSource = (data) =>{
    return {
        type: ACTION_SOURCE_REQUEST,
        payroll: data
    }
}
