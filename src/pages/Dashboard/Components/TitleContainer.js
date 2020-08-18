import React, { useState, useRef, useEffect } from "react";
import "../Dashboard.scss";
import { DropDown, DateRanger, Reset, Button } from "../../../components";
import { Images } from "../../../assets/images";
import SVG from 'react-inlinesvg';
import { useHistory } from "react-router-dom";
import moment from 'moment'
import { useSelector } from 'react-redux';
import { fullscreen } from '../../../utils'

const TitleContainer = props => {
    let history = useHistory();
    const ref = useRef();
    const dashboard = useSelector(state => state.dashboard);
    const [reset, setReset] = useState(false);
    const [resetDate, setResetDate] = useState(false);
    const [daterange, SetRange] = useState(false)

    useEffect(() => {
        if (daterange) {
            let startdate = moment(daterange.start);
            let enddate = moment(daterange.end);
            props.DateRange({ startdate, enddate })
            setReset(true);
        }
    }, [daterange])

    const onFilterChange = (value) => {
        let result = [];
        for (let x in value) {
            result.push(value[x].source)
        }
        props.LoadRecords({ filterSource: result })
    }


    const onReset = () => {
        props.LoadRecords({ filterSource: false, dateFilter: false });
        setReset(true);
        setResetDate(true);
    }
    return (
        <div className="container-title">
            <div className="titleleft">
                <DropDown
                    id={"sourcedd"}
                    class={"options searchop"}
                    label={"Source"}
                    search={true}
                    multi={true}
                    reset={reset}
                    displaynode={"source"}
                    onClick={() => setReset(false)}
                    imguri={Images.dropdownarrow}
                    onFilterselect={(list) => { onFilterChange(list) }}
                    options={dashboard.sourceList}
                />
                <span className="title">{props.name}</span>
                <Reset onClick={() => onReset()} isactive={dashboard.filter || dashboard.dateFilter} />
            </div>
            <div className="titleright">
                <StatusHolder count={dashboard.successCount} label={"Success"} margin={"40"} />
                <StatusHolder count={dashboard.failureCount} label={"Failure"} margin={"40"} />
                <StatusHolder count={dashboard.delayCount} label={"Delay"} margin={"20"} />
                <Button
                    class={"fullscreenicon"}
                    leftimg={Images.Fullscreen}
                    svg={true}
                    onClick={() => {
                        fullscreen();
                    }}
                />
            </div>

            <div className="dashborad-control" ref={ref}>
                <DateRanger refer={ref} onChange={(data) => { SetRange(data) }} reset={resetDate}>
                    <SVG src={Images.calendardetails} className="dontclose" />
                </DateRanger>
                <div className="calendar" onClick={()=>{history.push("/customized-dashboard");}}>
                    <span className="lable">Create Dashboard</span>
                    <div className="plus">
                        <span>&#43;</span></div>
                </div>
            </div>
        </div>
    );
};

const StatusHolder = (props) => {
    return <div className={`holder margin${props.margin}`}>
        <div className={`statuscircle ${props.label.toLowerCase()}`}>
            <span>{props.count}</span>
        </div>
        <span className="statustxt">{props.label}</span>
    </div>
}

export default TitleContainer;