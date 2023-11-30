import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const DepartmentAllocation = (props) => {
  const { Currency, dispatch } = useContext(AppContext);

  const handleIncreaseAllocation = () => {
    const item = {
      department: props.department,
      allocation: parseInt(10),
    };

    dispatch({
      type: "ADD_ALLOCATION",
      payload: item,
    });
  };

  const handleDecreaseAllocation = () => {
    const item = {
      department: props.department,
      allocation: parseInt(10),
    };

    dispatch({
      type: "RED_ALLOCATION",
      payload: item,
    });
  };

  const handleDeleteAllocation = () => {
    const item = {
      department: props.department,
    };

    dispatch({
      type: "DELETE_ALLOCATION",
      payload: item,
    });
  };
  return (
    <tr>
      <td>{props.department}</td>
      <td>
        {Currency}
        {props.allocatedBudget}
      </td>
      <td style={{ textAlign: "center" }}>
        <FaPlusCircle
          size="2.2em"
          color="green"
          onClick={handleIncreaseAllocation}
        ></FaPlusCircle>
      </td>
      <td style={{ textAlign: "center" }}>
        <FaMinusCircle
          size="2.2em"
          color="#b01f11"
          onClick={handleDecreaseAllocation}
        ></FaMinusCircle>
      </td>
      <td style={{ textAlign: "center" }}>
        <FaTimesCircle
          size="1.0em"
          color="black"
          onClick={handleDeleteAllocation}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default DepartmentAllocation;
