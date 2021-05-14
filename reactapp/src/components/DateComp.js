function DateComp(prop) {
  var day = prop.date.getDay();
  var month = prop.date.getMonth();
  var year = prop.date.getFullYear();
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default DateComp;
