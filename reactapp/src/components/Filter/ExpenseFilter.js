import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [currentyear, changeyear] = useState("");
  const changeHandeller = (event) => {
    changeyear(event.target.value);
  };
  props.filteryear(currentyear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="color">Filter by year</label>
        <select onChange={changeHandeller}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
