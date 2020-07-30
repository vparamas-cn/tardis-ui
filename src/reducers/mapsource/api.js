import axios from 'axios'
import { api } from '../../assets/constant'

export const getList = (params) => {
    return axios.get(api, null, {
        query: `{
        sourceMap(page: ${params.page}, size: ${params.count}){
          currentPage
          totalPages
          totalElements
          size
          results{
            source,
            childSource,
            isoptional
          }
        }
      }` });
}
export const addSourceMap = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
        createSourceMap(source: ${params.source}, childSource:${params.childSource}, isoptional: ${params.isoptional} )
        {
              sourcemap{
                source,
                childSource,
                isoptional
                }
        }
      }` });
}

export const updateSourceMap = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
        updateSourceMap(source: ${params.source}, childSource:${params.childSource}, isoptional: ${params.isoptional} )
        {
              sourcemap{
                source,
                childSource,
                isoptional
                }
        }
      }` });
}

export const deleteSourceMap = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
            deleteSourceMap(source: ${params.source}, childSource:${params.childSource}){
                deleteSourceMap
            }
      }` });
}