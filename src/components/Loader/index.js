import React from "react";
import './Loader.scss'

const Loader = props => {
    return (
        <div className="loader-container">
            <div  className={`loader ${props.small? 'small':'big'}`}/>
        </div>
    );
};

export default Loader;
