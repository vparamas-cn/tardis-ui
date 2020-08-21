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
    ` mutation{\n            createSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} , type:  \"${params.type}\", dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n              type {\n          type\n          isactive\n          isgroup\n        }\n        isactive\n                    alias\n                    availabilitySchedule\n                }\n            }\n } `
    ,
    updateSource: (params) => 
    ` mutation{\n            updateSource(source: \"${params.source}\", description: \"${params.description}\" ,alias:  \"${params.alias}\", availabilitySchedule:  \"${params.availabilitySchedule}\", numPrevDays: ${params.numPrevDays}, isactive:${params.isactive} ,  dashTriggerId:\"${params.dashTriggerId}\"){\n                source{\n                    source\n                    description\n                    dashTriggerId\n                    numPrevDays\n              type {\n          type\n          isactive\n          isgroup\n        }\n       isactive\n                    alias\n                    availabilitySchedule\n                      }\n            }\n } `
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
          id
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
    `mutation{\n  createSourceMap(source:\"${params.source}\" , childSource:\"${params.childSource}\", isoptional: ${params.isoptional}){\n    sourceMap{\n  id\n    source{\n        source\n        description\n        alias\n        type {\n          type\n          isactive\n          isgroup\n        }\n        isactive\n        numPrevDays\n        dashTriggerId\n        availabilitySchedule\n      },\n      childSource{\n        source\n        description\n        alias\n        type {\n          type\n          isactive\n          isgroup\n        }\n        isactive\n        numPrevDays\n        dashTriggerId\n        availabilitySchedule\n      },\n      isoptional\n    }\n  }\n}`
    ,
    updateSourceMap: (params) => 
    `mutation{\n            updateSourceMap(source:\"${params.source}\" , childSource:\"${params.childSource}\", isoptional: ${params.isoptional} ){\n              sourceMap{\n          id\n      source{\n                  source\n                },\n                childSource{\n                  source\n                },\n                isoptional\n              }\n            }\n}`
    ,
    deleteSourceMap: (params) =>
    `mutation{\n  deleteSourceMap(source: \"${params.source}\" ,  childSource:\"${params.childSource}\" ){\n    deleteSourceMap\n  }\n} `
    , 
    sourceType :() =>`{\n  sourceType{\n    isactive\n    isgroup\n    type\n  }\n}\n\n`,
    dashboardList :(params) =>`
    query {
      dataAvailability(size: ${params.size}, sourceName:${params.sourceName},startLogdate: \"${params.startLogdate}\" ,endLogdate: \"${params.endLogdate}\"){
    		currentPage
        totalPages
        totalElements
        size
        numberOfElements
        hasNextPage
        results{
          source{
            source
          }
          status{
        		status
          }
          logdate
          comments
          lastUpdatedTs
        }
      }
    }`,
    sourceDash: (size) => `
    query {
      source(size: ${size}, isactive:true){
        currentPage
        totalPages
        totalElements
        size
        numberOfElements
        hasNextPage
        results{
          source
        }
      }
    }`,
    slackalert: () => `
    query {
      slackAlertLevel{
        results{
          alertLevel
        }
      }
    }`,
    slack: (params) =>
    {
      let alert = ""
      if(params.alertLevel && params.alertLevel!=="")
      {
        alert = `alertLevel: \"${params.alertLevel}\"`
      }
      let sourceName = ""
      if(params.sourceName)
      {
        sourceName = `sourceName: ${params.sourceName}`
      }
      let isActive = ""
      if(params.isActive)
      {
        isActive = `isActive: ${params.isActive}`
      }
    return `
    query {
      slackSubscription(size:${params.size}, ${alert} ${sourceName} ${isActive}){
        results{
          id
          source{
            source
          },
          alertLevel{
            alertLevel
          },
          slackChannels,
          isActive
        },
        totalElements,
        size,
        hasNextPage,
        currentPage,
        totalPages
      }
    }
    `},
    slackaddupdate: (params) =>
    `mutation{\n  slackSubscription(source: \"${params.source}\", alertLevel: \"${params.alertLevel}\", slackChannels:\"${params.slackChannels}\", isActive: ${params.isActive}){\n     slackSubscription{\n      id\n      source{\n            source\n          },\n          alertLevel{\n            alertLevel\n          },\n          slackChannels,\n          isActive\n    }\n  }\n}`

}
export default query