import React, { useState, useEffect, Fragment } from "react";
import "../Dashboard.scss";
import moment from 'moment'
import { getDates, checkDates } from '../../../utils'
import { Images } from '../../../assets/images'
import { Pagination } from "../../../components"
import ReactTooltip from 'react-tooltip';

const StatusTable = props => {
    let dates = getDates(moment(props.dataSource.startdate), moment(props.dataSource.startdate).add(props.dataSource.endcount, 'days'));
    return (
        <Fragment>
            <div className="table-container">
                <div className="leftheader">
                    <div className="space" ></div>
                    {props.dataSource && props.dataSource.sourceNames && props.dataSource.sourceNames.map((e, i) => {
                        return <div className="headerleft" key={`leftheader-${i}`}>{e}</div>
                    })}
                </div>
                <section className="tablescroll">
                    <div className="table">
                        <div className="header">
                            {dates && dates.map((e, i) => {
                                return <div key={`header-${i}`} className="dataholder"><div className="date">{e}{(dates.length - 1) === i ? null : <div className="line" />}</div></div>
                            })}
                        </div>
                        <div className="container">
                            <div className="content">
                                {props.dataSource && props.dataSource.filterData && props.dataSource.filterData.map((e, i) => {
                                    return <div key={`statusrow-${i}`} className={`statusrow ${e.length===0?"emptyrow":""}`}>
                                        {dates && dates.map((f, j) => {
                                            let matchedrec = e.filter((r)=>{return checkDates(f, r.logdate)})
                                            matchedrec = matchedrec.length>0?matchedrec[0]:false;
                                            let status = !matchedrec ? "" :matchedrec.status.status;
                                            let lastUpdate = !matchedrec ? "" :moment(matchedrec.lastUpdatedTs).format("YYYY-MM-DD HH:mm:ss");
                                            let comments = !matchedrec ? "" :matchedrec.comments === "NA"?"":matchedrec.comments;
                                            return !matchedrec ? <div key={j} className={`emptycol`}><img src={status === "success" ? Images.circletick : status === "failure" ? Images.circleclose : Images.circledelay} /></div>
                                           
                                            :
                                                <div key={j} className={`status ${(e.length - 1) === j ? "" : "rightspace"}`}><a data-tip data-for={`statusrec-${j}`}><img src={status === "success" ? Images.circletick : status === "failure" ? Images.circleclose : Images.circledelay} /></a><ReactTooltip id={`statusrec-${j}`} aria-haspopup='true' ><p>Last Updated TS: <span>{lastUpdate}</span></p>{comments !== "" ?<p>Comments: <span>{comments}</span></p>:null}</ReactTooltip></div>
                                           
                                        })}
                                    </div>
                                })}
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
            <Pagination dataSource={props.dataSource}  LoadRecord={(data) => {props.LoadRecords(data) }} />
        </Fragment>
    );
};


export default StatusTable;