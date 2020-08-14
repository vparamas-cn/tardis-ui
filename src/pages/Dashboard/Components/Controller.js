import moment from 'moment';

export const PageController = (dashboard) => {
  let { size, page, data, sourceNames, filter, filterSource, sourceList, totalElements, pageBound, Nav } = dashboard;
  let successCount = 0, failureCount = 0, delayCount = 0;

  sourceNames = sourceNames && sourceNames.length > 0 ? sourceNames : sourceList.slice(0, size).map((e, i) => { return e.source });
  let arr = [], startdate = false, endcount = 0;
  sourceNames.forEach((e) => {
    let filterarr = data.filter((item, i) => { return item.source.source === e }).sort((a, b) => new Date(a.logdate) - new Date(b.logdate));
    let success = filterarr.filter((item, i) => { return item.status.status === "Complete" });
    let failure = filterarr.filter((item, i) => { return item.status.status === "QA Failed" });
    successCount += success.length;
    failureCount += failure.length;
    delayCount += filterarr.length > (success.length + failure.length) ? filterarr.length - (success.length + failure.length) : (success.length + failure.length) - filterarr.length;
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
  let totalPage = Math.ceil(filter ? arr.length / size : totalElements / size);
  if (totalPage < page || totalPage === 1) {
    page = 1
  }
  sourceNames = filter ? PaginationControl(page,size,sourceNames):sourceNames;
  arr = filter ? PaginationControl(page,size,arr): arr;
  let pageBounds;
  if (totalPage > 5) {
    if(Nav === "Next" && (page - 1) % 5 === 0){
      let upperbound =(pageBound.upperbound + 5);
      let lowerbound =(pageBound.lowerbound + 5);
      pageBounds = { current: 5, upperbound: upperbound, lowerbound: lowerbound }
    }
    else if (Nav === "Prev" && (page) % 5 === 0){
      let upperbound =(pageBound.upperbound - 5);
      let lowerbound =(pageBound.lowerbound - 5);
      pageBounds = { current: 5, upperbound: upperbound, lowerbound: lowerbound }
    }
    else if(page < 6)
    {
      pageBounds = { current: 5, upperbound: 5, lowerbound: 0 }
    }
    else{
      pageBounds =pageBound;
    }
    
  }
  else {
    pageBounds = { current: totalPage, upperbound: totalPage, lowerbound: 0 }
  }

  let filterdata = {
    sourceNames: sourceNames,
    filterData: arr,
    startdate: startdate,
    endcount: endcount + 1,
    pageBound: pageBounds,
    successCount: successCount,
    failureCount: failureCount,
    delayCount: delayCount,
    totalElements: filter ? arr.length : totalElements,
    totalPage: totalPage,
    page: page
  }
  filterdata = { ...dashboard, ...filterdata }
  return filterdata;
}

export const Filter = (dashboard, e) => {
  let size = e.size ? e.size : e.filter ? dashboard.size : 5;
  let page = e.page ? e.page : dashboard.page;
  
  let filterSource = e.page != undefined && e.page != dashboard.page && dashboard.filterSource.length > 0 ?dashboard.filterSource:e.filterSource;
  let filter = filterSource !== undefined && filterSource ? true :false;
  let nav = e.nav? e.nav : "";
  let sourceNames = filterSource && filterSource.length > 0 ? filterSource : PaginationControl(page, size, dashboard.sourceList,true);
  let request = {
    sourceName: JSON.stringify(sourceNames),
    startLogdate: e.startdate ? moment(e.startdate).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
    endLogdate: e.enddate ? moment(e.enddate).format("YYYY-MM-DD") : "",
  }
  let filterdata = { ...dashboard, ...{ size: size, filter: filter, page: page, sourceNames: sourceNames , Nav : nav, filterSource:filterSource} }
  return { filterdata, request }
}

export const PaginationControl = (page, size, filterData,map) => {
  let sizecheck = page * size;
  let pagecheck = (sizecheck - size)
  return map ?filterData.slice(pagecheck, sizecheck).map((e, i) => { return e.source }):filterData.slice(pagecheck, sizecheck) ;
}