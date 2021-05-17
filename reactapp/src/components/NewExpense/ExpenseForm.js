import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [changedtitle, changetitle] = useState("");
  const [changedamount, changeamount] = useState("");
  const [changeddate, changedate] = useState("");
  const titlechangeHandler = (event) => {
    changetitle(event.target.value);
  };
  const changeamountHander = (event) => {
    changeamount(event.target.value);
  };
  const changedateHandeller = (event) => {
    changedate(event.target.value);
  };
  const submitdata = (event) => {
    event.preventDefault(); //to prevent the event from reloading the page
    const expenseData = {
      title: changedtitle,
      amount: changedamount,
      date: changeddate,
    };
    props.onsaveexpensedata(expenseData);
    changetitle("");
    changeamount("");
    changedate("");
  };
  return (
    <form onSubmit={submitdata}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changedtitle}
            onChange={titlechangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="200"
            step="100"
            value={changedamount}
            onChange={changeamountHander}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="22-01-01"
            value={changeddate}
            onChange={changedateHandeller}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
