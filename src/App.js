import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import BudgetAllocation from "./components/BudgetAllocation";
import ChangeAllocation from "./components/ChangeAllocation";
import Remaining from "./components/Remaining";
import SpentSoFar from "./components/SpentSoFar";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <SpentSoFar />
          </div>
          <div className="col-sm">
            <Currency />
          </div>
        </div>
        <h3 className="mt-3">Allocation</h3>
        <div className="row ">
          <div className="col-sm">
            <BudgetAllocation />
          </div>
        </div>
        <h3 className="mt-3">Change Allocation</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ChangeAllocation />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};
export default App;
