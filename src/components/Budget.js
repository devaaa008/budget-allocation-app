import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { Currency, budget, dispatch } = useContext(AppContext);
  const handleBudgetChange = (val) => {
    dispatch({ type: "UPDT_BUDGET", payload: val });
  };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {Currency}
        <input
          type="number"
          value={budget}
          onChange={(event) => handleBudgetChange(event.target.value)}
        ></input>
      </span>
    </div>
  );
};

export default Budget;
