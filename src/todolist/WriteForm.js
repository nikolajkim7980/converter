import React, { useState } from "react";

function WriteForm({ addTodo }) {
  let [text, setText] = useState("");
  let [subject, setSubject] = useState("");

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        addTodo(subject, text);
        setText("");
        setSubject("");
      }}
    >
      <input
        placeholder="subject"
        value={subject}
        onChange={ev => setSubject(ev.target.value)}
      />
      <input
        placeholder="text"
        value={text}
        onChange={ev => setText(ev.target.value)}
      />
      <button>add</button>
    </form>
  );
}

export default WriteForm;
