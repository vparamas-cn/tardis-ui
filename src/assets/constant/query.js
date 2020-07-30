const query = {
    source: (params) => `
    query {
      source(page:${params.page}, size: ${params.size}){
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
    }`,
    addSource: (params) => `{
        query { 
           mutation{
            createSource(source: ${params.source}, description:${params.description} ,alias: ${params.alias}, availabilitySchedule: ${params.availabilitySchedule}, numPrevDays: ${params.numPrevDays}, isactive: ${params.isactive}, type: ${params.type}, dashTriggerId: ${params.dashTriggerId}){
                source{
                    source
                    description
                    dashTriggerId
                    numPrevDays
                    isactive
                }
            }
          }
        }`,
    updateSource: (params) => `{
        query { 
           mutation{
            updateSource(source: ${params.source}, description:${params.description} ,alias: ${params.alias}, availabilitySchedule: ${params.availabilitySchedule}, numPrevDays: ${params.numPrevDays}, isactive: ${params.isactive}, type: ${params.type}, dashTriggerId: ${params.dashTriggerId}){
                source{
                    source
                    description
                    dashTriggerId
                    numPrevDays
                    isactive
                }
            }
          }
        }`, 
    deleteSource: (params) =>`{
        query { 
            mutation{
            deleteSource(source: ${params.source}){
                deleteSource
            }
        }
    }`,  
}
export default query