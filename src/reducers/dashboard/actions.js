import types from './types'

export const PipelineRecords = (data) => {
    return {
        type: types.PIPELINE_LIST_REQUEST,
        payroll: data
    }
}


export const UpdateFilterPagination = (data) => {
    return {
        type: types.FILTER_PIPELINE_PAGINATION,
        payroll: data
    }
}
