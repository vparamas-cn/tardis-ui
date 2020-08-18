import React, { useState, useEffect } from "react";
import './Aside.scss'
import { Images } from '../../assets/images'
import { menulist } from "../../assets/constant";
import SVG from 'react-inlinesvg';
import { useHistory } from "react-router-dom";
import { pagename,fullscreen } from "../../utils"

const Aside = () => {
    let history = useHistory();
    const [menu, SetMenu] = useState(menulist);
    const [selection, SetSelection] = useState("");
    const onSelection = (e) => {
        menu.forEach(function (a) {
            if (a.name === e.name) a.selection = true;
            else a.selection = false;
        });
        SetMenu(menu);
        SetSelection(e.name);
        if (e.path)
            history.push(e.path);
    }
    useEffect(() => {
        function handleChange() {
            menu.forEach(function (a) {
                if (a.name === pagename()) a.selection = true;
                else a.selection = false;
            });
            SetMenu(menu);
            SetSelection(pagename());
        }
        var targetNode = document.getElementById('asidebar');
        var observer = new MutationObserver(function(){
            if(targetNode.style.display !== 'none'){
                handleChange()
            }
        });
        observer.observe(targetNode, { attributes: true });
        return () => {
            observer.disconnect();
        }
    }, [])
    return (
        <div className="sidebar displaynone" id="asidebar">
            <div className="sidemenuholder">
                <div onClick={()=>{fullscreen()}}>
                    <img alt="" src={Images.NavBar} className="autowidth" />
                </div>
                <div>
                    <img alt="" src={Images.profile} />
                </div>
                <div>
                    <img alt="" src={Images.Edit} className="autowidth" />
                </div>
                {menu &&
                    menu.map((item, index) => {
                        return (
                            <div key={`LeftMenu"${index}`} className={`fillwhite ${selection === item.name ? "selection" : ""}`} onClick={() => {
                                onSelection(item);
                            }}>
                                <SVG src={item.image} className={item.name === "File Manager" ? 'menufileimg' : "menuimg"} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Aside;
