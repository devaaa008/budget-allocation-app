import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  let new_allocation = [];
  switch (action.type) {
    case "UPDT_BUDGET":
      if (action.payload < state.spentSoFar) {
        alert("You cannont lower the budget spending");
        return { ...state };
      }
      state.budget = action.payload;
      return { ...state };

    case "ADD_ALLOCATION":
      let updated = false;
      if (
        action.payload.allocation + state.spentSoFar > state.budget ||
        action.payload.allocation + state.spentSoFar > 20000
      ) {
        alert(
          "The value cannot exceed remaining funds " +
            state.Currency +
            state.remaining
        );
        return { ...state };
      }
      state.allocations.map((item) => {
        if (item.department === action.payload.department) {
          item.allocatedBudget += action.payload.allocation;
          updated = true;
        }
        new_allocation.push(item);
        return true;
      });
      state.allocations = new_allocation;
      action.type = "DONE";
      return {
        ...state,
      };

    case "RED_ALLOCATION":
      state.allocations.map((item) => {
        if (item.department === action.payload.department) {
          item.allocatedBudget -= action.payload.allocation;
        }
        item.allocatedBudget =
          item.allocatedBudget < 0 ? 0 : item.allocatedBudget;
        new_allocation.push(item);
        return true;
      });
      state.allocations = new_allocation;
      action.type = "DONE";
      return {
        ...state,
      };
    case "DELETE_ALLOCATION":
      state.allocations.map((item) => {
        if (item.department === action.payload.department) {
          item.allocatedBudget = 0;
        }
        new_allocation.push(item);
        return true;
      });
      state.allocations = new_allocation;
      action.type = "DONE";
      return {
        ...state,
      };
    case "CHG_CURRENCY":
      action.type = "DONE";
      state.Currency = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  allocations: [
    { id: "Marketting", department: "Marketting", allocatedBudget: 0 },
    { id: "Finance", department: "Finance", allocatedBudget: 0 },
    { id: "Sales", department: "Sales", allocatedBudget: 0 },
    { id: "Human Resource", department: "Human Resource", allocatedBudget: 0 },
    { id: "IT", department: "IT", allocatedBudget: 0 },
  ],
  Currency: "$",
  spentSoFar: 0,
  remaining: 0,
  budget: 0,
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const totalSpentSoFar = state.allocations.reduce((total, item) => {
    return (total += item.allocatedBudget);
  }, 0);
  state.spentSoFar = totalSpentSoFar;
  state.remaining =
    (state.budget < 20000 ? state.budget : 20000) - totalSpentSoFar;
  return (
    <AppContext.Provider
      value={{
        allocations: state.allocations,
        budget: state.budget,
        dispatch,
        Currency: state.Currency,
        remaining: state.remaining,
        spentSoFar: state.spentSoFar,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
