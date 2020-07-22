import React, { useState } from "react";
import Modal from "react-modal";
import {Images} from "../../../../../assets/images";
import { DropDown, Button, DatePicker  } from "../../../../../components"
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
  const handleDate = () => {};
  return (
    <div class="container-filter">
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
        options={["Type 01", "Type 02"]}
      />
      <DropDown
        id={"isactivedd"}
        class={"options"}
        label={"isActive"}
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
     
    </div>
  );
};

export default FilterContainer;
