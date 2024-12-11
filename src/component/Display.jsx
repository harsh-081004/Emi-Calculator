import React from "react";
import "../styles/display.css";
import propTypes from 'prop-types';
import { constants } from "../constants/const";

const Display = ({ emi, intrest, intrestAmmount }) => {
  
  return (
    <div className="display">
      <div className="emi">
        <p>{constants.emi}</p>
        <br />
        <h2 className="fa">&#xf156; {emi}</h2>
      </div>
      <div className="intrestsetail">
        <div className="intrest">
          <p>{constants.intrest}</p>
          <br />
          <h4 className="fa">&#xf156; {intrest}</h4>
        </div>
        <div className="intrestammount">
          <p>{constants.totalAmount}</p>
          <br />
          <h4 className="fa">&#xf156; {intrestAmmount}</h4>
        </div>
      </div>
    </div>
  );
};
Display.propTypes = 
  {
    emi: propTypes.number.isRequired,
    intrest: propTypes.number.isRequired,
    intrestAmmount: propTypes.number.isRequired
  };

export default Display;
