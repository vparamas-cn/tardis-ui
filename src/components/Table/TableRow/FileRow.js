import React, { useState, Fragment, useEffect } from "react";
import "../Table.scss";
import "./Row.scss";
import { Images } from "../../../assets/images";
import { showHide } from '../../../utils'
import { usePaginationControl } from './ActionControls'
import CheckBox from "../../Checkbox";


const FileRow = props => {
    const [data, setDate] = useState([{ id: 1, row: [{ id: 1 }, { id: 2 }, { id: 3 }] }, { id: 2, row: [{ id: 1 }, { id: 2 }, { id: 3 }] }])
    //const { filterData, page, size, updatecount } = props.dataSource;
    // const list = usePaginationControl(page, size, filterData, updatecount);

    const showHideRow = (data) => {
        showHide(data, "file");
    };

    const Row = props => {
        return (
            <tr>
                <td className="rowarrow" onClick={() => {
                    showHideRow(props);
                }}>
                    <img alt=""
                        src={Images.downarrow}
                        className="downarr"
                        id={`downimage${props.id}`}
                    />
                </td>
                <td className="width200">Group Source Name</td>
                <td>{<Weekly />}</td>
                <td><div className="cellholder"> <div className="cell redclr">18</div> </div></td>
                <td><div className="cellholder"><div className="trendbtn">Trend</div></div></td>
                <td><div className="cellholder"><div className="exportbtn">Export Data</div></div></td>
            </tr>
        );
    };
    const RowDetails = props => {
        return (
            <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
                <td colSpan="6" className="paddzero">
                    <form id={`formfile-${props.id}`} autoComplete="off">
                        <table className="detailtable">
                            <tbody>
                                <tr>
                                    <td colSpan="6" style={{ padding: 0 }}>
                                        <table width="100%" height="80px">
                                            <tbody>
                                                {props.row.map((e, i) => {
                                                    return (<tr key={i}>
                                                        <td className="checkboxtd">
                                                            <CheckBox name="checkbox" class="filecheck" label={""} />
                                                        </td>
                                                        <td className="width200">Source Name</td>
                                                        <td>{<Weekly days={["sun","thu"]}/>}</td>
                                                        <td><div className="cellholder"> <div className="cell redclr">18</div> </div></td>
                                                        <td><div className="cellholder"><div className="trendbtn">Trend</div></div></td>
                                                        <td><div className="cellholder"><div className="exportbtn">Export Data</div></div></td>
                                                    </tr>)
                                                })}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </td>
            </tr>
        );
    };
    return (
        <tbody>
            {data && data.length > 0 ?
                data.map((item, index) => {
                    return (
                        <Fragment key={`SourceMapConfig-${index}`}>
                            <Row {...item} />
                            <RowDetails {...item} />
                        </Fragment>
                    );
                }) :
                <tr><td colSpan="6" className="norecord">No Data found!!</td></tr>
            }
        </tbody>
    );
};
const Weekly = (props) => {
    const weeks = [{label:"S",value:"sat"}, {label:"S",value:"sun"}, {label:"M",value:"mon"},, {label:"T",value:"tue"}, {label:"W",value:"wed"},{label:"T",value:"thu"}, {label:"F",value:"fri"},]
    return (
        <div className="cellholder">
            {weeks.map((e, i) => {
                return <div key={i} className={`cell ${props.days && props.days.indexOf(e.value) > -1 ? "selected":""}`}>{e.label}</div>
            })}
        </div>
    )
}
export default FileRow;
