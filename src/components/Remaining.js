import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { Currency, remaining } = useContext(AppContext);

  return (
    <div className="alert alert-success">
      <span>
        Remaining: {Currency}
        {remaining}
      </span>
    </div>
  );
};

export default Remaining;
