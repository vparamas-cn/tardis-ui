import moment from 'moment'
export const PageController =(dashboard,source) => {
    let {size, page, data ,sourceNames, filter} = dashboard;
    let successCount = 0, failureCount = 0, delayCount = 0;

      sourceNames = sourceNames && sourceNames.length > 0 ? sourceNames : source.data.slice(0, size).map((e, i) => { return e.source });
      let arr = [], startdate = false, endcount = 0;
      sourceNames.forEach((e) => {
        let filterarr = data.filter((item, i) => { return item.source.source === e }).sort((a, b) => new Date(a.logdate) - new Date(b.logdate));
        let success = filterarr.filter((item, i) => { return item.status.status === "Complete" });
        let failure = filterarr.filter((item, i) => { return item.status.status === "QA Failed" });
        successCount += success.length;
        failureCount += failure.length;
        delayCount += filterarr.length > (successCount + failureCount) ? filterarr.length - (successCount + failureCount) : (successCount + failureCount) - filterarr.length;
        if (filterarr.length > 0) {
          if (!startdate)
            startdate = new Date(filterarr[0].logdate);
          else if (startdate && startdate > new Date(filterarr[0].logdate))
            startdate = new Date(filterarr[0].logdate);
          if (endcount < moment(filterarr[filterarr.length - 1].logdate).diff(startdate, 'days'))
            endcount = moment(filterarr[filterarr.length - 1].logdate).diff(startdate, 'days');
        }
        arr.push(filterarr)
      });
      let totalPage = Math.ceil(filter ? arr.length / size : source.totalElements / size);
      if (totalPage < page || totalPage === 1) {
        page = 1
      }

      let pageBound;
      if (totalPage > 5) {
        pageBound = { current: 5, upperbound: 5, lowerbound: 0 }
      }
      else {
        pageBound = { current: totalPage, upperbound: totalPage, lowerbound: 0 }
      }

      let filterdata = {
        sourceNames: sourceNames,
        filterData: arr,
        startdate: startdate,
        endcount: endcount + 1,
        pageBound: pageBound,
        successCount: successCount,
        failureCount: failureCount,
        delayCount: delayCount,
        totalElements: dashboard.filter ? arr.length : source.totalElements
      }
      filterdata = { ...dashboard, ...filterdata }
      return filterdata;
}

export const Filter = (dashboard, source, e) =>{
    let size = e.size ? e.size : e.filter ? dashboard.size : 5;
    let page = e.page ? e.page : dashboard.page;
    let filter = e.filter != undefined ? e.filter : true;
    let sourceNames = e.sourceNames && e.sourceNames.length > 0 ? e.sourceNames : source.data.slice(0, size).map((e, i) => { return e.source });
    let request = {
      sourceName: JSON.stringify(sourceNames),
      startLogdate: e.startdate ? moment(e.startdate).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
      endLogdate: e.enddate ? moment(e.enddate).format("YYYY-MM-DD") : "",
    }
    let filterdata = { ...dashboard, ...{ size: size, filter: filter, page: page, sourceNames: sourceNames } }
    return {filterdata,request }
}