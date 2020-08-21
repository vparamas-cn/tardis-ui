import React, { useState, Fragment, useEffect } from "react";
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
import { usePaginationControl, UpdateData, ClearForm } from './ActionControls'

Modal.setAppElement('#root')

const SourceConfig = props => {
  const dispatch = useDispatch();
  const [modalIsOpen, SetModal] = useState(false);
  const [modaldata, SetData] = useState();

  const { filterData, page, size, updatecount } = props.dataSource;
  const list = usePaginationControl(page, size, filterData, updatecount);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };

  const Update = (formid, id) => {
    UpdateData(formid, id, async(data) => {
      if (data.source !== "" && data.childSource !== "")
        var response = await fetch(query.updateSourceMap(data))
      ActionUpdate(response, data, "Update", (e) => {
        dispatch(ActionSource(e))
      })
    });
  }

  const Delete = async (data) => {
    let request = {
      source: data.source.source,
      childSource: data.childSource.source
    }
    var response = await fetch(query.deleteSourceMap(request))
    ActionUpdate(response, data, "Delete", (e) => { dispatch(ActionSource(e)); })
  }

  const onOpenSource = (data) => {
    openModal();
    SetData(data);
  }

  const showHideRow = (data) => {
    showHide(data,"sourceMap");
  };

  const Row = props => {
    const { source, childSource, isoptional } = props;
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
        <td className="foucscell" onClick={() => onOpenSource(source)}>{source.source}</td>
        <td className="foucscell" onClick={() => onOpenSource(childSource)}>{childSource.source}</td>
        <td>{isoptional ? "True" : "False"}</td>

        <td>
          <div className="action-td-container">
            <div className="edit-action" onClick={() => {
              showHideRow(props);
            }}><div id={`edittd-${props.id}`}>
            <img alt="" src={Images.RowEdit} className="editimg" />
            <span>Edit</span>
          </div>
          <img alt="" src={Images.close} className="editimg closetd" id={`closetd-${props.id}`} /></div>
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
                  <form id={`formsourcemap-${props.id}`} autoComplete="off">
                    <div className="detailcontainer">
                      <div className="detailimg centeralign">
                        <img alt="" src={Images.addlist} />
                      </div>

                      <FieldHolder lable="Source">
                        <input
                          type="text"
                          id={`source-${props.id}`}
                          name={`source-${props.id}`}
                          className="sourceinput200"
                          disabled={true}
                        />
                      </FieldHolder>
                      <FieldHolder lable="Child Source">
                        <input
                          type="text"
                          id={`childSource-${props.id}`}
                          name={`childSource-${props.id}`}
                          className="sourceinput200"
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
                        <Button class="clearbtncolor" name="Clear" onClick={() => { ClearForm(props,"sourceMap") }} />
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
        {list && list.length > 0 ?
          list.map((item, index) => {
            return (
              <Fragment key={`SourceMapConfig-${index}`}>
                <Row {...item} />
                <RowDetails {...item} />
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
