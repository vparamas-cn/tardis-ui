import React, { useState } from "react";
import AddSource from "./AddSource";
import Modal from "react-modal";
import { Images } from "../../../../../assets/images";
import { DropDown, Button } from "../../../../../components";
import { customStyles } from "../../../../../assets/constant";

const FilterContainer = props => {
  const [modalIsOpen, SetModal] = useState(false);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Maintennace"
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
