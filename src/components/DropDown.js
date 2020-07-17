import React ,{useState , useEffect} from "react";
import "./DropDown.scss";

const DropDown =(props) => {
  const [selectedoption, SetOption] = useState("");
  useEffect(() => {
    if(props.options && props.options.length>0)
    {
        SetOption(props.options[0])
    }
  });
  useEffect(()=>{
        document.addEventListener('mousedown', handleClickOutside); 
        return(()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        })   
  })
  const handleClickOutside = (event) => {
    var dd = document.getElementById(props.id);
    if (dd && !dd.id !== event.target.id) {
        dd.classList.remove("active");
    }
  }
  const ondropdown =()=>{
    var dd = document.getElementById(props.id);
    if (dd.className.indexOf("active") > -1){
        dd.classList.remove("active");
    }
    else{
        dd.classList.add("active");
    }
  }
  return (
    props.profilename?  
    <div id={props.id} className={`wrapper-dropdown ${ props.class }`}  onClick={()=>ondropdown()}>          
        <span class="rtname">{props.profilename}</span>    
        <img src={props.imguri} />   
        <ul className="dropdown" >
            {props.options.map((item,index)=>{
                return (
                    <li key={"dd"+index}><a>{item}</a></li>
                )
            })}
            
        </ul>
    </div>:
    <div id={props.id} className={`wrapper-dropdown ${ props.class }`}  onClick={()=>ondropdown()}>          
        {props.search?
        <div className="centeralign">
            <img src={require("../assets/images/Search.svg")}/>  <span>{props.label?props.label: selectedoption}</span>   
        </div>
        :
        <span>{props.label?props.label: selectedoption}</span>    }
        {props.imgclass ?<div className={ props.imgclass }>
        <img src={props.imguri} />
        </div>  : <img src={props.imguri} /> }  
        <ul className="dropdown">
            {props.options.map((item,index)=>{
                return (
                    <li key={"dd"+index}><a>{item}</a></li>
                )
            })}
            
        </ul>
    </div>
  );
}

export default DropDown;