import types from './types'

export const SlackRecords = (data) => {
    return {
        type: types.SLACK_LIST_REQUEST,
        payroll: data
    }
}

export const UpdateFilterPagination = (data) => {
    return {
        type: types.FILTER_SLACK_PAGINATION,
        payroll: data
    }
}

export const FilterSlackRecords = (data) => {
    return {
        type: types.FILTER_SLACK_LIST_REQUEST,
        payroll: data
    }
}