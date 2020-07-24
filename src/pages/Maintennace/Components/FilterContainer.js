import React, { useState } from "react";
import AddMaintennace from "./AddMaintennace";
import Modal from "react-modal";
import {Images} from "../../../assets/images";
import { DropDown, Button  } from "../../../components"
import { customStyles } from "../../../assets/constant";

const FilterContainer = props => {
  const [modalIsOpen, SetModal] = useState(false);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };
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
      <Button
        class={"options"}
        name="Log Date"
        rightimg={Images.calendardetails}
        onClick={() => {}}
      />

      <DropDown
        id={"failturedd"}
        class={"options"}
        label={"Failure Reasons"}
        imguri={Images.dropdownarrow}
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
