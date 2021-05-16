import React from "react";
import "ExpenseForm.css";
const ExpenseForm = () => {
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="200" step="100" />
      </div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="date" min="2021-01-01" max="22-01-01" />
      </div>
    </div>
  </form>;
};
export default ExpenseForm;
