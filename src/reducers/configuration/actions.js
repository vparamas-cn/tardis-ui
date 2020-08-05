export const SOURCE_LIST_REQUEST = "SOURCE_LIST_REQUEST";
export const SOURCE_LIST_SUCCESS = "SOURCE_LIST_SUCCESS";
export const SOURCE_LIST_FAILURE = "SOURCE_LIST_FAILURE";
export const SOURCE_TYPE_REQUEST = "SOURCE_TYPE_REQUEST";
export const SOURCE_TYPE_SUCCESS = "SOURCE_TYPE_SUCCESS";
export const ACTION_SOURCE_ADD = "ACTION_SOURCE_ADD";
export const ACTION_SOURCE_UPDATE = "ACTION_SOURCE_UPDATE";
export const ACTION_SOURCE_DELETE = "ACTION_SOURCE_DELETE";
export const FILTER_SOURCE_PAGINATION = "FILTER_SOURCE_PAGINATION";

export const SourceRecords = (data) => {
    return {
        type: SOURCE_LIST_REQUEST,
        payroll: data
    }
}

export const ActionSource = (data) => {
    return {
        type: data.type === "add" ? ACTION_SOURCE_ADD : data.type === "update" ? ACTION_SOURCE_UPDATE : ACTION_SOURCE_DELETE,
        payroll: data
    }
}

export const UpdateFilterPagination = (data) => {
    return {
        type: FILTER_SOURCE_PAGINATION,
        payroll: data
    }
}

export const SourceType = () => {
    return {
        type: SOURCE_TYPE_REQUEST
    }
}