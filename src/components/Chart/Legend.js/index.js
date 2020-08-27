import React from "react";
import "./Legend.scss";


const Legend = props => {
    return (
        props.legend === "Bottom" ?
            <div className="legend-bottom">
                {props.data.map((e, i) => {
                    return (
                        <div key={i} className="square centeralign">
                            <div className="legendsquare" style={{ backgroundColor: props.color[i] }}></div>
                            <span>{e.label}</span>
                        </div>
                    )
                })}
            </div> : props.legend === "Right" ?
                <div className="legend-right">
                    {props.data.map((e, i) => {
                        return (
                            <div key={i} className="cirle centeralign">
                                <div className="legend-holder"><div className="legendcirle" style={{ border: `4px solid ${props.color[i]}` }}></div>
                                    <span>{e.label}</span>
                                </div>
                                <span>{e.value}%</span>
                            </div>
                        )
                    })}
                </div> : null
    );
};

export default Legend;