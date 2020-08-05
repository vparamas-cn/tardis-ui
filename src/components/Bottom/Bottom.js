import React, { useState, useEffect } from "react";
import "./Bottom.scss";
import Menu from "./Menu";
import { menulist } from "../../assets/constant";
import { useHistory } from "react-router-dom";
import { pagename } from "../../utils"

const Bottom = () => {
  let history = useHistory();
  const [menu, SetMenu] = useState(menulist);
  const [selection, SetSelection] = useState("");

  const Selection = e => {
    menu.forEach(function(a) {
      if (a.name === e.name) a.selection = true;
      else a.selection = false;
    });
    SetMenu(menu);
    SetSelection(e.name);
    if(e.path)
    history.push(e.path);
  };

  useEffect(()=>{
     menu.forEach(function(a) {
      if (a.name === pagename()) a.selection = true;
      else a.selection = false;
    });
    SetMenu(menu);
    SetSelection(pagename());
  },[menu])  
  
  return (
    <section className="bottom-container">
      <div className="sidemenu">
        {menu &&
          menu.map((item, index) => {
            return (
              <Menu
                key={`Menu"${index}`}
                {...item}
                onSelection={e => {
                  Selection(e);
                }}
              />
            );
          })}
        <div className="btm-menu centeralign">
          <span>About us</span>
          <span className="dividerlabel">|</span>
          <span>Privacy Poilcy</span>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
