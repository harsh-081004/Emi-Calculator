import React, { useMemo, useState, useEffect } from "react";
import Input from "./Input";
import Display from "./Display";
import "../styles/App.css";
import { constants } from "../constants/const";

const App = () => {
  const [data, setData] = useState({
    loanAmmount: "",
    intrestRate: "",
    tenure: "",
    emi: "0",
    intrest: "0",
    intrestAmmount: "0",
  });

  const { loanAmmount, intrestRate, tenure } = data;

  // Memoized EMI Calculation to avoid recalculating unnecessarily
  const emiDetails = useMemo(() => {
    const P = parseFloat(loanAmmount); //loan Ammount
    const r = intrestRate / 12 / 100; // Monthly intrest rate
    const n = tenure * 12; // months

    const EMIValue = (
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );

    const totalInterest = (EMIValue * n - P);

    const totalAmmount = (totalInterest + P);

    return {
      emi: Math.round(EMIValue).toFixed(2),
      intrest: Math.round(totalInterest).toFixed(2),
      intrestAmmount: Math.round(totalAmmount).toFixed(2),
    };
  }, [loanAmmount, intrestRate, tenure]);

  // Effect hook to update the state with the memoized EMI details
  useEffect(() => {
    setData((prevInputs) => ({
      ...prevInputs,
      emi: emiDetails.emi,
      intrest: emiDetails.intrest,
      intrestAmmount: emiDetails.intrestAmmount,
    }));
  }, [emiDetails]);

  // handle input change event
  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  return (
      <div className="container-1">
        <h1 className="heading">{constants.heading}</h1>
        <div className="container-2">
          <Input data={data} HandleChange={HandleChange}></Input>
          <Display
            emi={data.emi}
            intrest={data.intrest}
            intrestAmmount={data.intrestAmmount}
          ></Display>
        </div>
      </div>
  );
};

export default App;