import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
 
const Popup2 = props => {

  return (
    <div className="popup-box">
      <div className="box">
        <CloseIcon className="close-icon" onClick={props.handleClose} />
        <h1>Scribble Stadium</h1>
        <h3>Work in Progress</h3>
      </div>
    </div>
  );
};
 
export default Popup2;