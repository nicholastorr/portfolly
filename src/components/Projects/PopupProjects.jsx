import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
 
const Popup = props => {

  return (
    <div className="popup-box">
      <div className="box">
        <CloseIcon className="close-icon" onClick={props.handleClose} />
        <h1>HTM MBS</h1>
      </div>
    </div>
  );
};
 
export default Popup;