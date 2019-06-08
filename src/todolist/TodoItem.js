import React from "react";
import { format, differenceInDays } from "date-fns";

const style = {
  display: "flex",
  justifyContent: "space-between"
};

function TodoItem({ item }) {
  let postedDate = new Date(item.data().date);
  let diffIndays = -differenceInDays(postedDate, new Date());

  return (
    <div style={style}>
      {/* <span>{item.id}</span> */}
      <span>{diffIndays} days ago</span>
      <span>{item.data().subject}</span>
      <span>{item.data().text}</span>
    </div>
  );
}

export default TodoItem;
