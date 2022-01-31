import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

  // Set the change year data to State
  const selectChangeHandler = (event) => {
    
    props.onChangeYear(event.target.value);

  };

  // Pass the changed year data by calling the custom prop
  

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectChangeHandler}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
