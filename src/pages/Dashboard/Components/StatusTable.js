import React, { useState, useEffect, Fragment } from "react";
import "../Dashboard.scss";
import moment from 'moment'
import { getDates, checkDates } from '../../../utils'
import { Images } from '../../../assets/images'
import { Pagination } from "../../../components"
import ReactTooltip from 'react-tooltip';
import { usePaginationControl } from "../../../components/Table/TableRow/ActionControls"

const StatusTable = props => {
    const { filterData, page, size, startdate, endcount, sourceNames } = props.dataSource;
    let dates = getDates(moment(startdate), moment(startdate).add(endcount, 'days'));
    const list = usePaginationControl(page, size, filterData, 0);
    return (
        <Fragment>
            <div className="table-container">
                <div className="leftheader">
                    <div className="space" ></div>
                    {sourceNames && sourceNames.map((e, i) => {
                        return <div className="headerleft" key={`leftheader-${i}`}>{e}</div>
                    })}
                </div>
                <section className="tablescroll">
                    <div className="table">
                        <div className="header">
                            {dates && dates.map((e, i) => {
                                return <div key={`header-${i}`} className="dataholder">
                                    <div className="date">{e}{(dates.length - 1) === i ? null : <div className="line" />}</div>
                                </div>
                            })}
                        </div>
                        <div className="container">
                            <div className="content">
                                {list && list.map((e, i) => {
                                    return <div key={`statusrow-${i}`} className={`statusrow ${e.length === 0 ? "emptyrow" : ""}`}>
                                        {dates && dates.map((f, j) => {
                                            let matchedrec = e.filter((r) => { return checkDates(f, r.logdate) })
                                            matchedrec = matchedrec.length > 0 ? matchedrec[0] : false;
                                            if (!matchedrec)
                                                return <div key={j} className={`emptycol`}><img src={Images.circledelay} /></div>
                                            let status = matchedrec.status.status;
                                            let lastUpdate = moment(matchedrec.lastUpdatedTs).format("YYYY-MM-DD HH:mm:ss");
                                            let comments = matchedrec.comments === "NA" ? "" : matchedrec.comments;
                                            return <div key={j} className={`status ${(e.length - 1) === j ? "" : "rightspace"}`}>
                                                <a data-tip data-for={`statusrec-${j}`}>
                                                    <img src={status === "Complete" ? Images.circletick : status === "QA Failed" ? Images.circleclose : Images.circledelay} />
                                                </a>
                                                <ReactTooltip id={`statusrec-${j}`} aria-haspopup='true' >
                                                    <p>Last Updated TS: <span>{lastUpdate}</span></p>
                                                    {comments !== "" ? <p>Comments: <span>{comments}</span></p> : null}
                                                </ReactTooltip>
                                            </div>

                                        })}
                                    </div>
                                })}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Pagination dataSource={props.dataSource} dashboard={true} LoadRecord={(data) => { props.LoadRecords(data) }} />
        </Fragment>
    );
};


export default StatusTable;