import React from "react";
import "../styles/Input.css";
import propTypes from 'prop-types';
import { constants } from "../constants/const";

const Input = ({ data, HandleChange }) => {
  return (
      <div className="input">
        <div className="loanammount">
          <h2>{constants.input1}</h2>
          <br />
          <input
            type="number"
            name="loanAmmount"
            value={data.loanAmmount}
            onChange={HandleChange}
            placeholder="Enter loan amount"
          />
        </div>
        <div className="intrestrate">
          <h2>{constants.input2}</h2>
          <br />
          <input
            type="number"
            name="intrestRate"
            value={data.intrestRate}
            onChange={HandleChange}
            placeholder="Enter rate of intrest"
          />
        </div>
        <div className="tenture">
          <h2>{constants.input3}</h2>
          <br />
          <input
            type="number"
            name="tenure"
            value={data.tenure}
            onChange={HandleChange}
            placeholder="Enter tenture"
          />
        </div>
      </div>
  );
};

Input.propTypes = {
  data: propTypes.object.isRequired,
  HandleChange: propTypes.func.isRequired
};

export default Input;
