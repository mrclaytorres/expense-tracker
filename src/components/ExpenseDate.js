function ExpenseDate(props) {
  return (
    <div>
      <div>{ props.month }</div>
      <div>{ props.day }</div>
      <div>{ props.year }</div>
    </div>
  );
}

export default ExpenseDate;
