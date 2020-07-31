import React, { useState, useEffect } from "react";
import AddSource from "./AddSource";
import Modal from "react-modal";
import { Images } from "../../../../../assets/images";
import { DropDown, Button } from "../../../../../components";
import { customStyles } from "../../../../../assets/constant";
import { useSelector, useDispatch } from 'react-redux';
import { ACTION_RESET } from "../../../../../reducers/configuration/actions";

Modal.setAppElement('#root')
const FilterContainer = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.source);
  const [modalIsOpen, SetModal] = useState(false);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };
  useEffect(()=>{
    if(data.actiondata.message =="success")
    {
      closeModal();
      dispatch({type:ACTION_RESET})
      var x = document.getElementById("snackbar");
      x.className = "show greenclr";
      x.innerHTML =data.actiondata.data
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
    else if(data.actiondata.message =="error")
    {
      dispatch({type:ACTION_RESET})
      var x = document.getElementById("snackbar");
      x.className = "show redclr";
      x.innerHTML =data.actiondata.data
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  },[data])
  return (
    <div className="container-filter">
      <DropDown
        id={"sourcedd"}
        class={"options searchop"}
        label={"Source"}
        search={true}
        imguri={Images.dropdownarrow}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <DropDown
        id={"typedd"}
        class={"options"}
        label={"Type"}
        imguri={Images.dropdownarrow}
        options={["Datasource", "Datasource Group", "Dashboard"]}
      />
      <DropDown
        id={"isactivedd"}
        class={"options"}
        label={"isActive"}
        radiobtn={true}
        imguri={Images.dropdownarrow}
        options={["Active", "InActive"]}
      />
      <DropDown
        id={"Dashdd"}
        class={"options"}
        label={"Dash_trigger_id"}
        imguri={Images.dropdownarrow}
        options={["Data Source Name"]}
      />
      <Button
        class="greenclr addbtn"
        name="Add Source"
        onClick={() => {
          openModal();
        }}
      />
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
        />
      </Modal>
    </div>
  );
};

export default FilterContainer;
