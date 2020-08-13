import React, { useEffect, useState } from "react";
import TitleContainer from "./Components/TitleContainer";
import StatusTable from './Components/StatusTable'
import "./Dashboard.scss"
import moment from 'moment'
import { connect, useSelector } from "react-redux";
import { SourceRecords } from "../../reducers/configuration/actions"
import { PipelineRecords, UpdateFilterPagination } from "../../reducers/dashboard/actions"
import { Loader } from "../../components"
import { PageController, Filter} from "./Components/Controller"

const Dashboard = ({ SourceRecords, PipelineRecords, UpdateFilterPagination }) => {
  const source = useSelector(state => state.source);
  const dashboard = useSelector(state => state.dashboard);
  const [loading, SetLoading] = useState(false);
  const { data } = dashboard;

  useEffect(() => {
    SetLoading(true)
    SourceRecords();
    UpdateFilterPagination({ page: 1 })
    if (source.data.length > 0) {
      let sourceNames = source.data.slice(0, dashboard.size).map((e, i) => { return e.source });
      let request = {
        sourceName: JSON.stringify(sourceNames),
        startLogdate: moment().format("YYYY-MM-DD"),
        endLogdate: ""
      }
      PipelineRecords(request)
    }
  }, [])
  useEffect(() => {
    if (data.length > 0 && source.data.length > 0) {
      let filterdata = PageController(dashboard,source)
      UpdateFilterPagination(filterdata)
      SetLoading(false);
    }
  }, [data])

  const onLoadRecords = (filter) => {
    SetLoading(true);
    let { filterdata, request} =Filter(dashboard,source,filter)
    UpdateFilterPagination(filterdata)
    PipelineRecords(request)
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