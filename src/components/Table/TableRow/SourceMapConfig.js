import React, { useState, Fragment } from "react";
import Modal from "react-modal";
import "../Table.scss";
import "./Row.scss";
import Button from "../../Button/Button";
import FieldHolder from "../../InputText/FieldHolder"
import { Images } from "../../../assets/images";
import { useDispatch } from 'react-redux';
import { ActionSource } from '../../../reducers/mapSource/actions'
import { customStyles } from '../../../assets/constant'
import { showHide, ActionUpdate, fetch } from '../../../utils'
import query from '../../../assets/constant/query'
import AddSource from '../../../pages/Configuration/SubPages/Source/Components/AddSource'

Modal.setAppElement('#root')

const SourceConfig = props => {
  const dispatch = useDispatch();
  const [modalIsOpen, SetModal] = useState(false);
  const [modaldata, SetData] = useState();

  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };

  const { dataSource } = props;

  const Update = async (formid, id) => {
    const form = document.getElementById(formid)
    var data = Object.values(form).reduce((obj, field) => { obj[field.name ? field.name.replace(`-${id}`, "") : "unnamed"] = field.value; return obj }, {});
    delete data.unnamed;
    if (data.source !== "" && data.childSource !== "")
    var response = await fetch(query.updateSourceMap(data))
    ActionUpdate(response, data, "Update", (e) => { dispatch(ActionSource(e)) })
  }

  const ClearForm = (formid) => {
    document.getElementById(formid).reset();
  }

  const Delete = async (data) => {
    let request ={
      source:data.source.source,
      childSource:data.childSource.source
    }
    var response = await fetch(query.deleteSourceMap(request))
    ActionUpdate(response, data, "Delete", (e) => { dispatch(ActionSource(e)) })
  }

  const onOpenSource = (data) => {
    openModal();
    SetData(data);
  }

  const showHideRow = (selectedrow, arrowimg, data) => {
    let isopen = showHide(selectedrow, arrowimg, data);
    if (isopen)
      for (var x of Object.keys(data)) {
        try {
          let name = `${x}-${data.id}`;
          document.getElementById(name).value = typeof data[x] == "object" ? data[x].source : data[x];
        }
        catch (e) { }
      }
  };

  const Row = props => {
    const { source, childSource, isoptional } = props;
    return (
      <tr>
        <td className="rowarrow" onClick={() => {
              showHideRow(`hidden_row${props.id}`, `downimage${props.id}`, props);
            }}>
          <img alt=""
            src={Images.downarrow}
            className="downarr"
            id={`downimage${props.id}`}
          />
        </td>
        <td className="foucscell" onClick={()=>onOpenSource(source)}>{source.source}</td>
        <td className="foucscell" onClick={()=>onOpenSource(childSource)}>{childSource.source}</td>
        <td>{isoptional ? "True" : "False"}</td>

        <td>
          <div className="action-td-container">
            <div className="edit-action" onClick={() => {
              showHideRow(`hidden_row${props.id}`, `downimage${props.id}`, props);
            }}><img alt="" src={Images.RowEdit} className="editimg" />
              <span>Edit</span></div>
          </div>
        </td>
      </tr>
    );
  };
  const RowDetails = props => {
    return (
      <tr id={`hidden_row${props.id}`} className="hidden_row editcontent">
        <td colSpan="5" className="paddzero">
          <table className="detailtable">
            <tbody>
              <tr>
                <td colSpan="5">
                  <form id={`formsourcemap-${props.id}`}>
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>

                      <FieldHolder lable="Source">
                        <input
                          type="text"
                          id={`source-${props.id}`}
                          name={`source-${props.id}`}
                          className="sourceinput120"
                          disabled={true}
                        />
                      </FieldHolder>
                      <FieldHolder lable="Child Source">
                        <input
                          type="text"
                          id={`childSource-${props.id}`}
                          name={`childSource-${props.id}`}
                          className="sourceinput120"
                          disabled={true}
                        />
                      </FieldHolder>
                      <FieldHolder lable="Isoptional">
                        <select id={`isoptional-${props.id}`} name={`isoptional-${props.id}`} className="sourceinput120 customselect">
                          <option value={"true"}>True</option>
                          <option value={"false"}>False</option>
                        </select>
                      </FieldHolder>
                      <div className="detailbuttons fieldholder">
                        <Button class="greenclr" name="Update" onClick={() => { Update(`formsourcemap-${props.id}`, props.id) }} />
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(`formsourcemap-${props.id}`) }} />
                        <Button
                          class="deletebtn"
                          name="Delete Contact"
                          leftimg={Images.Delete}
                          onClick={() => { Delete(props) }}
                        />
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  };
  return (
    <Fragment>
      <tbody>
        {dataSource && dataSource.length > 0 ?
          dataSource.map((item, index) => {
            return (
              <Fragment key={`SourceMapConfig-${index}`}>
                <Row {...item} id={index + 1} />
                <RowDetails {...item} id={index + 1} />
              </Fragment>
            );
          }) :
          <tr><td colSpan="10" className="norecord">No Data found!!</td></tr>
        }
      </tbody>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Source"
      >
          <AddSource
            closepop={() => {
              closeModal();
            }}
            data={modaldata}
          />
      </Modal>
  </Fragment>
  );
};

export default SourceConfig;
