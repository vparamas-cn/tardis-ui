import React, { useEffect, useState } from "react";
import TitleContainer from "./Components/TitleContainer";
import StatusTable from './Components/StatusTable'
import "./Dashboard.scss"
import { connect, useSelector } from "react-redux";
import { PipelineRecords, UpdateFilterPagination, SourceDashRecords } from "../../reducers/dashboard/actions"
import { Loader } from "../../components"
import { PageController, Filter} from "./Components/Controller"

const Dashboard = ({ SourceDashRecords, PipelineRecords, UpdateFilterPagination }) => {
  const dashboard = useSelector(state => state.dashboard);
  const { data, isLoading } = dashboard;
  
  useEffect(() => {
    SourceDashRecords();
  }, [])

  useEffect(() => {

      if (data.length > 0) {
        let filterdata = PageController(dashboard)
        UpdateFilterPagination(filterdata)
      }

  }, [data])

  const onLoadRecords = (filter) => {
    let { filterdata, request} =Filter(dashboard,filter)
    UpdateFilterPagination(filterdata)
    PipelineRecords(request)
  }

  return (
    <div className="Dashboradpage page" >
      <TitleContainer
        name="Tardis Dashborad"
        LoadRecords={(e) => { onLoadRecords(e) }}
      />
      {isLoading ? <Loader /> :
        <StatusTable dataSource={dashboard} LoadRecords={(e) => { onLoadRecords(e) }} />
      }
    </div>
  );
};

export default connect(
  null, { SourceDashRecords, PipelineRecords, UpdateFilterPagination }
)(Dashboard);