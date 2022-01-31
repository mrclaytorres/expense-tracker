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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeYear={changeYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
