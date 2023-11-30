import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const [selectedCurrency, setCurrency] = useState("$ Dollar");
  const changeCurrency = (val) => {
    setCurrency(val);
    dispatch({
      type: "CHG_CURRENCY",
      payload: val[0],
    });
  };

  return (
    <div>
      {" "}
      {
        <Dropdown>
          <Dropdown.Toggle
            style={{ backgroundColor: "#94e59a" }}
            id="dropdown-basic"
          >
            Currency{"("} {selectedCurrency}
            {")"}
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{ backgroundColor: "#94e59a", border: "1px solid black" }}
          >
            <Dropdown.Item onClick={() => changeCurrency("$ Dollar")}>
              $ Dollar
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeCurrency("£ Pound")}>
              £ Pound
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeCurrency("€ Euro")}>
              € Euro
            </Dropdown.Item>
            <Dropdown.Item onClick={() => changeCurrency("₹ Ruppee")}>
              ₹ Ruppee
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }
    </div>
  );
};

export default Currency;
