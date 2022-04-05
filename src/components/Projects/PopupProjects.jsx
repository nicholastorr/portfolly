import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
 
const Popup = props => {

  return (
    <div className="popup-box">
      <div className="box">
        <CloseIcon className="close-icon" onClick={props.handleClose} />
        <h1>HTM MBS</h1>
        <div style= {{dislay: "flex", flexDirection: "row"}}>
          <StaticImage src="../../images/standoffs-img-1.png"/>
          <StaticImage src="../../images/standoffs-img-2.png" />
        </div>
      </div>
    </div>
  );
};
 
export default Popup;