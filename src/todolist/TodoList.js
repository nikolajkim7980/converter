import React, { useState, useEffect } from "react";
import WriteForm from "./WriteForm";
import { db } from "../utils/FirebaseService";
import TodoItem from "./TodoItem";
import { addDays } from "date-fns";

function TodoList() {
  let [todos, setTodos] = useState([]);

  let yesterday = addDays(new Date(), -1);
  console.log(yesterday.getTime());

  useEffect(() => {
    async function fetchFromDB() {
      let snapshot = await db
        .collection("calendar-todos")
        .orderBy("date")
        .startAt(yesterday.getTime())
        .get();
      setTodos(snapshot.docs);
    }
    fetchFromDB();
  }, []);

  async function addTodo(subject, text) {
    let data = {
      date: new Date().getTime(),
      subject: subject,
      text: text
    };

    let docRef = await db.collection("calendar-todos").add(data);
    let doc = await db
      .collection("calendar-todos")
      .doc(docRef.id)
      .get();
    setTodos([...todos, doc]);
  }

  return (
    <div>
      {todos.map(t => (
        <TodoItem item={t} key={t.id} />
      ))}
      <hr />
      <WriteForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
