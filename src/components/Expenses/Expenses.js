import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2019");

  // Get changed year data from filter component using a custom prop
  const changeYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  // Create a filter function
  const yearFilter = (item) => {
    if (item.date.getFullYear() === parseInt(filteredYear)) {
      return item;
    }
  };

  // Store the filtered items by year in a new array
  let filteredYearArray = props.items.filter(yearFilter);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={changeYearHandler}
      />
      <ExpensesChart expenses={filteredYearArray}/>
      <ExpensesList items={filteredYearArray} />
    </Card>
  );
};

export default Expenses;
