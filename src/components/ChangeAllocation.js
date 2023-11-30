import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ChangeAllocation = (props) => {
  const { dispatch, Currency } = useContext(AppContext);

  const [department, setDepartment] = useState("");
  const [allocation, setAllocation] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    const item = {
      department: department,
      allocation: parseInt(allocation),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_ALLOCATION",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_ALLOCATION",
        payload: item,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Items
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setDepartment(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Marketting" name="Marketting">
              {" "}
              Marketting
            </option>
            <option value="Finance" name="Finance">
              Finance
            </option>
            <option value="Sales" name="Sales">
              Sales
            </option>
            <option value="Human Resource" name="Human Resource">
              Human Resource
            </option>
            <option value="IT" name="IT">
              IT
            </option>
          </select>
          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Allocation
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>
          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>
          <label for="number" style={{ padding: "4px" }}>
            {Currency}
          </label>
          <input
            required="required"
            type="number"
            id="cost"
            value={allocation}
            style={{ size: 10 }}
            onChange={(event) => setAllocation(event.target.value)}
          ></input>
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangeAllocation;
