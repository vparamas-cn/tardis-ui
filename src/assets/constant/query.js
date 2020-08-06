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
          type {
            type
            isactive
            isgroup
          }
          isactive
          numPrevDays
          dashTriggerId
          availabilitySchedule
        }
      }
    }`,
    addSource: (params) => 
    ` mutation{\n            createSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} , type:  \"${params.type}\", dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n                    isactive\n                    alias\n                    availabilitySchedule\n                }\n            }\n } `
    ,
    updateSource: (params) => 
    ` mutation{\n            updateSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} , dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n                    isactive\n                    alias\n                    availabilitySchedule\n                      }\n            }\n } `
    ,
    deleteSource: (params) =>
    ` mutation{\n  deleteSource(source: \"${params.source}\"){\n    deleteSource\n  }\n} `
    ,  
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
            type {
              type
              isactive
              isgroup
            }
            isactive
            numPrevDays
            dashTriggerId
            availabilitySchedule
          },
          childSource{
            source
            description
            alias
            type {
              type
              isactive
              isgroup
            }
            isactive
            numPrevDays
            dashTriggerId
            availabilitySchedule
          },
          isoptional
        }
      }
    }`,
    addSourceMap: (params) => 
    `mutation{\n            createSourceMap(source:\"${params.source}\" , childSource:\"${params.childSource}\", isoptional: ${params.isoptional} ){\n              sourceMap{\n                source{\n                  source\n                },\n                childSource{\n                  source\n                },\n                isoptional\n              }\n            }\n}`
    ,
    updateSourceMap: (params) => 
    `mutation{\n            updateSourceMap(source:\"${params.source}\" , childSource:\"${params.childSource}\", isoptional: ${params.isoptional} ){\n              sourceMap{\n                source{\n                  source\n                },\n                childSource{\n                  source\n                },\n                isoptional\n              }\n            }\n}`
    ,
    deleteSourceMap: (params) =>
    `mutation{\n  deleteSourceMap(source: \"${params.source}\" , , childSource:\"${params.childSource}\" ){\n    deleteSourceMap\n  }\n} `
    , 
    sourceType :() =>`{\n  sourceType{\n    isactive\n    isgroup\n    type\n  }\n}\n\n`
}
export default query