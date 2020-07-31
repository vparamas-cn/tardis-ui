export const SOURCE_LIST_REQUEST= "SOURCE_LIST_REQUEST";
export const SOURCE_LIST_SUCCESS= "SOURCE_LIST_SUCCESS";
export const SOURCE_LIST_FAILURE= "SOURCE_LIST_FAILURE";
export const ACTION_SOURCE_REQUEST= "ACTION_SOURCE_REQUEST";
export const ACTION_SOURCE_SUCCESS= "ACTION_SOURCE_SUCCESS";
export const ACTION_SOURCE_FAILURE= "ACTION_SOURCE_FAILURE";
export const ACTION_RESET = "ACTION_RESET";

export const SourceRecords = (data) =>{
    return {
        type: SOURCE_LIST_REQUEST,
        payroll: data
    }
}

export const ActionSource = (data) =>{
    return {
        type: ACTION_SOURCE_REQUEST,
        payroll: data
    }
}

