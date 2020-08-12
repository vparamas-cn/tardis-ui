import React, {useState, useRef, useEffect} from "react";
import "../Dashboard.scss";
import {fullscreen} from '../../../utils'
import {  Button, DropDown,DateRanger,useOnClickOutside } from "../../../components";
import { Images } from "../../../assets/images";
import SVG from 'react-inlinesvg';
import moment from 'moment'
import { useSelector } from 'react-redux';

const TitleContainer = props => {
    const ref = useRef();
    const data = useSelector(state => state.source);
    const [reset, setReset] = useState(false);
    const [show, setShow] = useState(false);
    const [daterange, SetRange] = useState(false)

    useEffect(()=>{
        if(daterange)
        {
            let startdate = moment(daterange.start);
            let enddate = moment(daterange.end);
            props.LoadRecords({startdate,enddate})
        }
    },[daterange])

    const onFilterChange = (value) => {
    
        let result = [];
        for (let x in value) {
            result.push(value[x].source)
        } 
        props.LoadRecords({sourceNames:result})
    }
    useOnClickOutside(ref, () => {
        setShow(false);
    });
    const onCalendarClick =()=>{
        setShow(true)
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
                options={data.data}
                />
                <span className="title">{props.name}</span>
            </div>
            <div className="titleright">
                <div className="holder margin40">
                    <div className="status success">
                        <span>15</span>
                    </div>
                    <span className="statustxt">Success</span>
                </div>
                <div className="holder margin40">
                    <div className="status failure">
                        <span>04</span>
                    </div>
                    <span className="statustxt">Failure</span>
                </div>
                <div className="holder margin20">
                    <div className="status delay">
                        <span>06</span>
                    </div>
                    <span className="statustxt">Delay</span>
                </div>
                {/* <Button
                class={"fullscreenicon"}
                leftimg={Images.Fullscreen}
                onClick={() => {
                    fullscreen();
                }}
                /> */}
            </div>
            <div className="dashborad-control"  ref={ref}>
                {show ? <DateRanger onChange={(data)=>{SetRange(data)}}/>:null}
                <SVG src={Images.calendardetails} className="dontclose" onClick={()=>{onCalendarClick()}}/>
                <div className="calendar">
                    <span className="lable">Create Dashboard</span>
                    <div className="plus">
                        <span>&#43;</span></div>
                    </div>
            </div>
        </div>
    );
};

export default TitleContainer;