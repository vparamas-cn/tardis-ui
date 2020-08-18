import moment from 'moment';

export const PageController = (dashboard) => {
  let { size, page, data, sourceNames, filter, sourceList, totalElements, pageBound, Nav, dateFilter, filterSource } = dashboard;
  let successCount = 0, failureCount = 0, delayCount = 0;
  let sourceListFilter = [], unique = [];
  if (dateFilter) {

    data.forEach((e) => {
      if (unique.indexOf(e.source.source) === -1) {
        sourceListFilter.push(e.source)
        unique.push(e.source.source);
      }
    })
    if (filter) {
      totalElements = filterSource.length;
    }
    else
      totalElements = unique.length;
  }
  else if (filter) {
    totalElements = filterSource.length;
  }
  else {
    totalElements = sourceList.length;
  }
  let dateCheck = dateFilter ? (sourceNames.length === 0 ? true: false) :false;
  sourceNames = sourceNames.length > 0 ? sourceNames :  dateFilter ? unique : (filter ? sourceNames : (!filter && data.length > 0) ? sourceList.slice(0, size).map((e, i) => { return e.source }) : []);
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
  if (dateFilter) {
    startdate = dashboard.startdate;
    endcount = dashboard.endcount;
  }
  let totalPage = Math.ceil(filter ? arr.length / size : totalElements / size);

  if (totalPage < page || totalPage === 1) {
    page = 1
  }
  sourceNames = filter || dateCheck ? PaginationControl(page, size, sourceNames) : sourceNames;
  arr = filter || dateCheck ? PaginationControl(page, size, arr) : arr;
  let pageBounds;
  if (totalPage > 5) {
    if (Nav === "Next" && (page - 1) % 5 === 0) {
      let upperbound = (pageBound.upperbound + 5);
      let lowerbound = (pageBound.lowerbound + 5);
      pageBounds = { current: 5, upperbound: upperbound, lowerbound: lowerbound }
    }
    else if (Nav === "Prev" && (page) % 5 === 0) {
      let upperbound = (pageBound.upperbound - 5);
      let lowerbound = (pageBound.lowerbound - 5);
      pageBounds = { current: 5, upperbound: upperbound, lowerbound: lowerbound }
    }
    else if (page < 6) {
      pageBounds = { current: 5, upperbound: 5, lowerbound: 0 }
    }
    else {
      pageBounds = pageBound;
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
    totalElements: totalElements,
    totalPage: totalPage,
    page: page,
    sourceList: dateFilter ? sourceListFilter : sourceList
  }
  filterdata = { ...dashboard, ...filterdata }
  return filterdata;
}

export const Filter = (dashboard, e) => {
  let size = e.size ? e.size : dashboard.size;
  let page = e.page ? e.page : dashboard.page;
  let filterSource = (e.page != undefined && e.page != dashboard.page) || (e.size != undefined && e.size != dashboard.size) && dashboard.filterSource.length > 0 ? dashboard.filterSource : e.filterSource;
  let filter = filterSource !== undefined && filterSource.length > 0 ? true : false;
  let nav = e.nav ? e.nav : "";
  let sourceNames = filterSource && filterSource.length > 0 ? filterSource : PaginationControl(page, size, dashboard.sourceList, true);
  let request = {
    sourceName: JSON.stringify(sourceNames),
    startLogdate: moment().format("YYYY-MM-DD"),
    endLogdate: "",
  }

  let filterdata = { ...dashboard, ...{ size: size, filter: filter, page: page, sourceNames: sourceNames, Nav: nav, filterSource: filterSource } }
  return { filterdata, request }
}

export const PaginationControl = (page, size, filterData, map) => {
  let sizecheck = page * size;
  let pagecheck = (sizecheck - size)
  return map ? filterData.slice(pagecheck, sizecheck).map((e, i) => { return e.source }) : filterData.slice(pagecheck, sizecheck);
}

export const DateRangeControl = (e) => {
  let request, filterdata = {};
  if (e.startdate != undefined) {
    let startdate = e.startdate, enddate = e.enddate;
    if (e.startdate > e.enddate && enddate._isValid) {
      startdate = e.enddate
      enddate = e.startdate
    }
    request = {
      sourceName: JSON.stringify([]),
      startLogdate: startdate ? moment(startdate).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
      endLogdate: enddate ? !enddate._isValid ? moment(startdate).format("YYYY-MM-DD") : moment(enddate).format("YYYY-MM-DD") : "",
    }

    let filterstartdate = new Date(e.startdate)
    let endcount = moment(enddate).diff(filterstartdate, 'days') === NaN ? 0 : moment(enddate).diff(filterstartdate, 'days');
    filterdata = {
      startdate: filterstartdate,
      endcount: endcount,
      page: 1,
      dateFilter: true,
      filterSource: false
    }
  }
  return { filterdata, request }
}