import React, { useState } from "react";
import Modal from "react-modal";
import AddSlack from "./AddSlack";
import { Images } from "../../../../../assets/images";
import { DropDown, Button , Reset} from "../../../../../components";
import { useSelector, useDispatch } from 'react-redux';
import { customStyles } from "../../../../../assets/constant";

const FilterContainer = props => {
  const [modalIsOpen, SetModal] = useState(false);
  const [reset, setReset] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const slack = useSelector(state => state.slack);
  const closeModal = () => {
    SetModal(false);
  };
  const openModal = () => {
    SetModal(true);
  };
  const onReset = () => {
    setReset(true);
  }
  const onSubmit = async (request) => {
    setLoading(true);
    setLoading(false);
  }
  const onFilterChange = (type, value) => {
    let filter = slack.filter ? slack.filter : {};
    if (type === "source") {
      let result = [];
      for (let x in value) {
        result.push(value[x].source)
      }
      value = result;
      if (value.length > 0)
        filter[type] = value;
      else {
        if (filter.source)
          delete filter.source
      }
    }
    else
      filter[type] = value;
    props.LoadRecord({ filter: filter })
  }
  return (
    <div className="container-filter">
      <DropDown
        id={"sourcedd"}
        class={"options searchop"}
        label={"Source"}
        search={true}
        multi={true}
        displaynode={"source"}
        reset={reset}
        onClick={() => setReset(false)}
        imguri={Images.dropdownarrow}
        onFilterselect={(list) => { onFilterChange("source", list) }}
        options={slack.sourceList}
      />
      <DropDown
        id={"alertdd"}
        class={"options"}
        label={"Alert level"}
        value={slack.filter.alertLevel ? slack.filter.alertLevel : false}
        imguri={Images.dropdownarrow}
        onChange={(data) => { onFilterChange("alertLevel", data) }}
        displaynode={"alertLevel"}
        options={slack.AlertList}
      />
      <DropDown
        id={"slackdd"}
        class={"options searchop"}
        label={"Slack channel"}
        reset={reset}
        tags={true}
        options={[]}
        imguri={Images.dropdownarrow}
        onFilterselect={(list) => { onFilterChange("slackChannels", list) }}
      />
      <Reset onClick={()=>onReset()} isactive={Object.keys(slack.filter).length >0} />
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
        contentLabel="Add Slack"
      >
        <AddSlack
          closepop={() => {
            closeModal();
          }}
          onSubmit={(data) => {
            onSubmit(data)
          }}
          isLoading={isLoading}
          source={slack.sourceList}
          alertLevel={slack.AlertList}
        />
      </Modal>
    </div>
  );
};

export default FilterContainer;
