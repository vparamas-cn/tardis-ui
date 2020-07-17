import React, { useState } from "react";
import "./FilterContainer.scss";
import DropDown from "../DropDown";
import Button from "../Button/Button";
import AddMaintennace from "./AddMaintennace";
import Modal from "react-modal";
import DatePicker from "../InputText/DatePicker";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s",
    width: "500px",
    height: "470px",
    borderWidth: "5px 0px 0px 0px",
    borderTopStyle: "solid",
    borderTopColor: "#3976eb",
    borderRadius: "0px",
    padding: "40px",
    overflow: "initial"
  },
  overlay: {
    backgroundColor: "rgb(21 21 21 / 75%)",
    zIndex: 2000
  }
};
const FilterContainer = props => {
  const [modalIsOpen, SetModal] = useState(false);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };
  const handleDate = () => {

  }
  return (
    <div class="container-filter">
      <DropDown
        id={"sourcedd"}
        class={"options searchop"}
        label={"Source"}
        search={true}
        imguri={require("../../assets/images/dropdownarrow.svg")}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <Button class={"options"} name="Log Date" rightimg={require("../../assets/images/calendardetails.svg")} onClick={()=>{}} />
   
      <DropDown
        id={"failturedd"}
        class={"options"}
        label={"Failure Reasons"}
        imguri={require("../../assets/images/dropdownarrow.svg")}
        options={["Configuration Module"]}
      />
      <Button
        class="greenclr addbtn"
        name="Add Item"
        onClick={() => {
          openModal();
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Maintennace"
      >
        <AddMaintennace
          closepop={() => {
            closeModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default FilterContainer;
