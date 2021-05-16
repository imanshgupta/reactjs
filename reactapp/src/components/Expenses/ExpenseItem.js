import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [val, updatetitle] = useState(props.title);
  const eventHandeller = () => {
    updatetitle("hellow");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{val}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
        <button onClick={eventHandeller}>BUTTON FOR EVENT</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
