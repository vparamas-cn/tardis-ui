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
    addSource: (params) => 
    ` mutation{\n            createSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} , type:  \"${params.type}\", dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n                    isactive\n                    alias\n                    availabilitySchedule\n                    type\n                }\n            }\n } `
    ,
    updateSource: (params) => 
    ` mutation{\n            updateSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} , dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n                    isactive\n                    alias\n                    availabilitySchedule\n                    type\n                }\n            }\n } `
    ,
    deleteSource: (params) =>
    ` mutation{\n  deleteSource(source: \"${params.source}\"){\n    deleteSource\n  }\n} `,  
    sourceMap: (params) => `
    query {
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
    }`,
    addSourceMap: (params) => `{
        query { 
           mutation{
            createSourceMap(source: ${params.source}, childSource:${params.childSource}, isoptional: ${params.isoptional} ){
              sourceMap{
                source,
                childSource,
                isoptional
              }
            }
          }
        }`,
    updateSourceMap: (params) => `{
        query { 
           mutation{
            updateSourceMap(source: ${params.source}, childSource:${params.childSource}, isoptional: ${params.isoptional} ){
              sourceMap{
                source,
                childSource,
                isoptional
              }
            }
          }
        }`, 
    deleteSourceMap: (params) =>`{
        query { 
            mutation{
            deleteSourceMap(source: ${params.source} , childSource:${params.childSource}){
                deleteSourceMap
            }
        }
    }`, 
}
export default query