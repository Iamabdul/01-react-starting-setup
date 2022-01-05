import "./Expenses.css";
import Card from "../Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItems from "./ExpenseItems";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filteredExpenses = props.expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear() ===
      new Date(filteredYear).getFullYear()
  );

  const onYearSelectedHandler = (event) => {
    console.log("Checking expenses for the year: " + event.target.value);
    setFilteredYear(event.target.value);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearSelected={onYearSelectedHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseItems expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
