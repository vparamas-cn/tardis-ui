import React, { useEffect } from "react";
import "./Slack.scss";
import FilterContainer from "./Components/FilterContainer";
import { Table, TitleContainer } from "../../../../components";
import { Images } from "../../../../assets/images";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { SlackRecords, FilterSlackRecords, UpdateFilterPagination } from "../../../../reducers/slack/actions"

const Slack = ({ SlackRecords, FilterSlackRecords, UpdateFilterPagination }) => {
  const slack = useSelector(state => state.slack);
  let history = useHistory();

  useEffect(() => {
    FilterSlackRecords();
    SlackRecords({size:slack.size,page:1,sourceName:JSON.stringify([])});
  }, [])

  const onBackHandler = () => {
    history.push("/Configurations");
  };

  const LoadRecord = (filterdata) => {
   
    filterdata = { ...slack, ...filterdata }
    let filter = filterdata.filter;
    if(filter)
    {
      if(filter.source)
      filterdata.sourceName = JSON.stringify(filter.source)
      else
      filterdata.sourceName = JSON.stringify([])
      if(filter.alertLevel)
      filterdata.alertLevel = filter.alertLevel;
    }
    SlackRecords(filterdata);
    if (filterdata.page && filterdata.nav) {
      let Nav = filterdata.nav;
      let page = filterdata.page;
      let totalPage = slack.totalPage;
      let pageBound = slack.pageBound;
      let pageBounds;
      if (totalPage > 5) {
        if (Nav === "Next" && (page -1) % 5 === 0) {
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
      filterdata.pageBound = pageBounds;
      
    }
    UpdateFilterPagination(filterdata)
  }

  return (
    <div className="Slackpage page">
      <TitleContainer
        name="Slack Integration"
        img={Images.slack}
        onBack={() => {
          onBackHandler();
        }}
      />
      <FilterContainer LoadRecord={(data) => { LoadRecord(data) }}/>
      <Table name="SlackIntegration" dataSource={slack} countcontrol={slack.filterData.length === 0} LoadRecord={(data) => { LoadRecord(data) }} />
    </div>
  );
};

export default connect(
  null, { SlackRecords, FilterSlackRecords, UpdateFilterPagination }
)(Slack);