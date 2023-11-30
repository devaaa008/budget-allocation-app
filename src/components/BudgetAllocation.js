import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DepartmentAllocation from "./DepartmentAllocation";

const BudgetAllocation = () => {
  const { budget, allocations } = useContext(AppContext);
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Department</th>
          <th scope="col">Allocated Budget</th>
          <th scope="col">Increase by 10</th>
          <th scope="col">Decrease by 10</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {allocations.map((allocation) => (
          <DepartmentAllocation
            id={allocation.id}
            key={allocation.id}
            department={allocation.department}
            allocatedBudget={allocation.allocatedBudget}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BudgetAllocation;
