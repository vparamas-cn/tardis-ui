import React, { useState } from "react";
import Modal from "react-modal";
import { Images } from "../../../assets/images";
import { DropDown, Button, DatePicker } from "../../../components";
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
    <div className="container-filter">
      <DropDown
        id={"accessdd"}
        class={"options searchop"}
        label={"Select Access"}
        search={true}
        imguri={Images.dropdownarrow}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <DropDown
        id={"userdd"}
        class={"options searchop"}
        label={"Select User"}
        search={true}
        imguri={Images.dropdownarrow}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <DropDown
        id={"groupdd"}
        class={"options"}
        label={"Select Groups"}
        imguri={Images.dropdownarrow}
        options={["Active", "InActive"]}
      />

      <Button
        class="greenclr addbtn"
        name="Add Permission"
        onClick={() => {
          openModal();
        }}
      />
    </div>
  );
};

export default FilterContainer;
