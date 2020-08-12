import React, { useEffect, useState } from "react";
import TitleContainer from "./Components/TitleContainer";
import StatusTable from './Components/StatusTable'
import "./Dashboard.scss"
import moment from 'moment'
import { connect, useSelector } from "react-redux";
import { SourceRecords } from "../../reducers/configuration/actions"
import { PipelineRecords, UpdateFilterPagination } from "../../reducers/dashboard/actions"
import query from "../../assets/constant/query"
import { Loader } from "../../components"

const Dashboard = ({ SourceRecords, PipelineRecords, UpdateFilterPagination }) => {
  const source = useSelector(state => state.source);
  const dashboard = useSelector(state => state.dashboard);
  const [loading, SetLoading] = useState(false);
  const { data } = dashboard;

  useEffect(() => {
    SetLoading(true)
    SourceRecords();
    if (source.data.length > 0) {
      let sourceNames = source.data.slice(0, dashboard.size).map((e, i) => { return e.source });
      let request = {
        sourceName: JSON.stringify(sourceNames),
        startLogdate: moment().format("YYYY-MM-DD"),
        endLogdate: ""
      }
      PipelineRecords(query.dashboardList(request))
    }
  }, [])
  useEffect(() => {
    if (data.length > 0 && source.data.length > 0) {
      let size = dashboard.size;
      let page = dashboard.page;
      let sourceNames = source.data.slice(0, size).map((e, i) => { return e.source });
      let arr = [], startdate = new Date(), endcount = 0;
      sourceNames.forEach((e) => {
        let filterarr = data.filter((item, i) => { return item.source.source === e }).sort((a, b) => new Date(a.logdate) - new Date(b.logdate));
        if (filterarr.length > 0) {
          startdate = new Date(filterarr[0].logdate);
          endcount = moment(filterarr[filterarr.length - 1].logdate).diff(startdate, 'days');
        }
        arr.push(filterarr)
      });
      let totalPage = Math.ceil(dashboard.filter ?arr.length:source.totalElements / size);
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
        pageBound: pageBound
      }
      filterdata = { ...dashboard, ...filterdata }
      UpdateFilterPagination(filterdata)
      SetLoading(false);
    }
  }, [data])

  const onLoadRecords = (e) => {
    SetLoading(true);
    let size = e.size ? e.size : dashboard.size;
    let page = e.page ? e.page :dashboard.page;
    let sourceNames = e.sourceNames ? e.sourceNames : source.data.slice(0, size).map((e, i) => { return e.source });
    let request = {
      sourceName: JSON.stringify(sourceNames),
      startLogdate: e.startdate ? moment(e.startdate).format("YYYY-MM-DD") : moment().format("YYYY-MM-DD"),
      endLogdate: e.enddate ? moment(e.enddate).format("YYYY-MM-DD") : "",
    }
    size = e.sourceNames ? e.sourceNames.length : size;
    let filterdata = { ...dashboard, ...{ size: size,filter:true ,page:page} }
    UpdateFilterPagination(filterdata)
    PipelineRecords(query.dashboardList(request))
  }

  return (
    <div className="Dashboradpage page" >
    
          <TitleContainer
            name="Tardis Dashborad"
            LoadRecords={(e) => { onLoadRecords(e) }}
          />
          {loading ? <Loader /> :
          <StatusTable data={source} dataSource={dashboard} LoadRecords={(e) => { onLoadRecords(e) }} />
        }
    </div>
  );
};

export default connect(
  null, { SourceRecords, PipelineRecords, UpdateFilterPagination }
)(Dashboard);