const query = {
    source: (size) => `
    query {
      source(size: ${size}){
        currentPage
        totalPages
        totalElements
        size
        numberOfElements
        hasNextPage
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
    sourceMap: (size) => `
    query {
      sourceMap(size: ${size}){
        currentPage
        totalPages
        totalElements
        size
        numberOfElements
        hasNextPage
        results{
          source{
            source
            description
            alias
            type
            isactive
            numPrevDays
            dashTriggerId
            availabilitySchedule
          },
          childSource{
            source
            description
            alias
            type
            isactive
            numPrevDays
            dashTriggerId
            availabilitySchedule
          },
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
    sourceType :() =>`{\n  sourceType{\n    isactive\n    isgroup\n    type\n  }\n}\n\n`
}
export default query