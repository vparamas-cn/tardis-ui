import React, { useState, useEffect } from "react";
import { Images } from "../../assets/images";
import { TitleContainer, Pie, Button, DatePicker, DropDown } from "../../components";
import "./Chart.scss";
import SVG from 'react-inlinesvg';
import { useHistory } from "react-router-dom";
import Layout from '../../Layout';
const ParticularChart = () => {
    let history = useHistory();
    const onBackHandler = () => {
        history.push("/file-manager");
    };
    const [data, setData] = useState([{ label: "Compelte", value: 60 }, { label: "Failure", value: 15 }, { label: "Delay", value: 35 }]);
    let Failurelist = [{ label: "Luigi Server Issue", value: 12 }, { label: "Presto Issue", value: 8 }, { label: "Vendor Issue", value: 15 }, { label: "Technical Issue (Dev-Ops)", value: 25 },
    { label: "Bug", value: 10 }, { label: "Unfulfilled Dependency", value: 10 }, { label: "Technical Issue (not Dev-Ops)", value: 15 }, { label: "Others", value: 5 }]
    // useEffect(
    //     () => {
    //         setData(generateData());
    //     },
    //     [!data]
    // );
    return (
        <Layout>
            <div className="particular-page page">
                <TitleContainer
                    name="Chart"
                    img={Images.Chart}
                    onBack={() => {
                        onBackHandler();
                    }}
                >
                   
                   
                    <div className="centeralign filter-container">
                    <DropDown id={"timeframedd"}
                        class={"options"}
                        value={"Monthly"}
                        imguri={Images.dropdownarrow}
                        onChange={(data) => {  }}
                        options={["Weekly", "Monthly", "Yearly"]} />
                        <div className="date-holder"><DatePicker name={`fromdate`} placeholder="From Date" className="filter-date" /></div>
                        <div className="date-holder"><DatePicker name={`todate`} placeholder="To Date" className="filter-date" /></div>
                        <Button
                            class="submitbtn"
                            name="Submit"
                            onClick={() => {

                            }}
                        />
                    </div>
                </TitleContainer>
                <div className="pieholder">
                    <div className="pie">
                        <div className="title">
                            <div className="centeralign trendsoure">
                                <SVG src={Images.addlist} />
                            </div>
                            <span>Source File Name</span></div>
                        <div className="piechart">
                            <Pie
                                data={data}
                                width={200}
                                height={200}
                                innerRadius={0}
                                outerRadius={100}
                                color={["#36b27e", "#fd3031", "#febb68"]}
                                stroke={true}
                                legend={"Bottom"}
                            />
                        </div>
                    </div>
                    <div className="donut-container">
                        <div className="title">
                            <span>Failure Reasons</span>
                            <div className="centeralign"><div className="exportbtn">Export Data</div></div>
                        </div>
                        <div className="donut">
                            <Pie
                                data={Failurelist}
                                width={350}
                                height={350}
                                innerRadius={105}
                                outerRadius={175}
                                color={["#36b27e", "#fd3031", "#1ccdf1", "#febb68", "#A52A2A", "#800080", "#00FF00", "#00FFFF"]}
                                legend={"Right"}
                            />
                            <div id="donuttooltip" className="tooltiphidden">
                                <p><span id="value"></span></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Layout>
    );
};

export default ParticularChart;
