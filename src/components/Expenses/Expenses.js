import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2019");

  // Get changed year data from filter component using a custom prop
  const changeYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    console.log("in Expenses.js", selectedYear);
  };

  // Create a filter function
  const yearFilter = (item) => {
    if (item.date.getFullYear() === parseInt(filteredYear)) {
      return item;
    };
  };

  // Store the filtered items by year in a new array
  let filteredYearArray = props.items.filter(yearFilter);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={changeYearHandler}
      />
      {filteredYearArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
