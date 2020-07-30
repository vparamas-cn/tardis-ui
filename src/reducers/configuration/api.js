import axios from 'axios'
import { api } from '../../assets/constant'

export const getList = (params) => {
    return axios.get(api, null, {
        query: `{
        source(page: ${params.page}, size: ${params.count}){
          currentPage
          totalPages
          totalElements
          size
          numberOfElements
          results{
            source
            description
            alias
            type
            isactive
            numPrevDays
            dashTriggerId
            availabilitySchedule
          }
        }
      }` });
}
export const addSource = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
        createSource(source: ${params.source}, description:${params.description} 
            ,alias: ${params.alias}, availabilitySchedule: ${params.availabilitySchedule}, numPrevDays: ${params.numPrevDays}, isactive: ${params.isactive}, type: ${params.type}, dashTriggerId: ${params.dashTriggerId}){
            source{
                source
                description
                dashTriggerId
                numPrevDays
                isactive
              }
        }
      }` });
}

export const updateSource = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
        updateSource(source: ${params.source}, description:${params.description} 
            ,alias: ${params.alias}, availabilitySchedule: ${params.availabilitySchedule}, numPrevDays: ${params.numPrevDays}, isactive: ${params.isactive}, type: ${params.type}, dashTriggerId: ${params.dashTriggerId}){
            source{
                source
                description
                dashTriggerId
                numPrevDays
                isactive
              }
        }
      }` });
}

export const deleteSource = (params) => {
    return axios.post(api, null, {
        query: `{
        mutation{
            deleteSource(source: ${params.source}){
                deleteSource
            }
      }` });
}