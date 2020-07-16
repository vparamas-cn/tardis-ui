import React , {useState, useEffect }from "react";
import "./Bottom.scss";
import Menu from "./Menu"
import {menulist} from "../../assets/constant"


const Bottom = () => {
  const [menu, SetMenu] = useState(menulist)
  const [selection, SetSelection] = useState("")
  const Selection = (e) => {
      menu.forEach(function(a) {
         if(a.name == e.name)          
            a.selection =true;          
          else
          a.selection = false;
      });
       SetMenu(menu);
       SetSelection(e.name);
  }

  
  return (
    <section class="bottom-container">
      <div class="sidemenu">
        {menu && menu.map((item,index)=>{
          return (<Menu key={`Menu"${index}`} {...item} onSelection={(e)=>{Selection(e)}} />)
        })}        
        <div class="btm-menu centeralign">
          <span>About us</span>
          <span class="dividerlabel">|</span>
          <span>Privacy Poilcy</span>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
