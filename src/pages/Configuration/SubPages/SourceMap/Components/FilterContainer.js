import React, { useState } from "react";
import Modal from "react-modal";
import AddMapSource from "./AddMapSource"
import { Images } from "../../../../../assets/images";
import { DropDown, Button, DatePicker } from "../../../../../components";
import { customStyles } from "../../../../../assets/constant";
Modal.setAppElement('#root')
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
        id={"sourcedd"}
        class={"options searchop"}
        label={"Source"}
        search={true}
        imguri={Images.dropdownarrow}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <DropDown
        id={"childsourcedd"}
        class={"options searchop"}
        label={"Child_source"}
        search={true}
        imguri={Images.dropdownarrow}
        options={["String_1_Source", "String_2_Source", "String_3_Source"]}
      />
      <DropDown
        id={"isoptionaldd"}
        class={"options"}
        label={"Isoptional"}
        checkbox={true}
        imguri={Images.dropdownarrow}
        options={["True value", "False value"]}
      />

      <Button
        class="greenclr addbtn"
        name="Add New Mapping"
        onClick={() => {
          openModal();
        }}
      />
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Map Source"
      >
        <AddMapSource
          closepop={() => {
            closeModal();
          }}
        />
      </Modal>
    </div>
  );
};

export default FilterContainer;
