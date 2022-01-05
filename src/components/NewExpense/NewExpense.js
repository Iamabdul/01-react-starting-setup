import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [collapse, setCollapse] = useState(true);
  const saveExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  const expenseButtonHandler = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="new-expense">
      {collapse ? (
        <button onClick={expenseButtonHandler}>Add new expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseData} onCollapse={expenseButtonHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
