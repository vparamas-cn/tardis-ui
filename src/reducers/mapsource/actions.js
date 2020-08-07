export const MAP_LIST_REQUEST = "MAP_LIST_REQUEST";
export const MAP_LIST_SUCCESS = "MAP_LIST_SUCCESS";
export const MAP_LIST_FAILURE = "MAP_LIST_FAILURE";
export const ACTION_SOURCEMAP_ADD = "ACTION_SOURCEMAP_ADD";
export const ACTION_SOURCEMAP_UPDATE = "ACTION_SOURCEMAP_UPDATE";
export const ACTION_SOURCEMAP_DELETE = "ACTION_SOURCEMAP_DELETE";
export const FILTER_MAP_PAGINATION = "FILTER_MAP_PAGINATION";

export const SourceMapRecords = () => {
    return {
        type: MAP_LIST_REQUEST
    }
}

export const ActionSource = (data) => {
    return {
        type: data.actiontype === "delete" ? ACTION_SOURCEMAP_DELETE : data.actiontype === "update" ? ACTION_SOURCEMAP_UPDATE : ACTION_SOURCEMAP_ADD,
        payroll: data
    }
}

export const UpdateFilterPagination = (data) => {
    return {
        type: FILTER_MAP_PAGINATION,
        payroll: data
    }
}