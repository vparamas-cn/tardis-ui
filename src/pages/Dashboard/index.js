import React, { useEffect } from "react";
import TitleContainer from "./Components/TitleContainer";
import StatusTable from './Components/StatusTable'
import "./Dashboard.scss"
import { connect, useSelector } from "react-redux";
import { PipelineRecords, UpdateFilterPagination, SourceDashRecords } from "../../reducers/dashboard/actions"
import { Loader } from "../../components"
import { Filter, DateRangeControl, PageController } from "./Components/Controller"
import Layout from '../../Layout';

const Dashboard = ({ SourceDashRecords, PipelineRecords, UpdateFilterPagination }) => {
  const dashboard = useSelector(state => state.dashboard);
  const { isLoading } = dashboard;

  useEffect(() => {
    SourceDashRecords();
  }, [])

  const onLoadRecords = (filter) => {
    let { filterdata, request } = Filter(dashboard, filter)
    if (filter.dateFilter != undefined && !filter.dateFilter)
      SourceDashRecords();
    else {
      if (!dashboard.dateFilter) {
        UpdateFilterPagination(filterdata)
        PipelineRecords(request)
      }
      else {
        let record = { ...dashboard, ...filterdata }
        let response = PageController(record)
        UpdateFilterPagination(response)
      }
    }
  }
  const DateRange = (e) => {
    let { filterdata, request } = DateRangeControl(e)
    UpdateFilterPagination(filterdata)
    PipelineRecords(request)
  }
  return (
    <Layout>
      <div className="Dashboradpage page" >
        <TitleContainer
          name="Tardis Dashborad"
          LoadRecords={(e) => { onLoadRecords(e) }}
          DateRange={(e) => { DateRange(e) }}
        />
        {isLoading ? <Loader /> :
          <StatusTable dataSource={dashboard} LoadRecords={(e) => { onLoadRecords(e) }} />
        }
      </div>
    </Layout>
  );
};

export default connect(
  null, { SourceDashRecords, PipelineRecords, UpdateFilterPagination }
)(Dashboard);