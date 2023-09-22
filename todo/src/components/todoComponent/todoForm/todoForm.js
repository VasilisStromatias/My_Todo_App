import React, { useState } from "react";

function TodoForm({ onSubmit }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (item === "") return;

    onSubmit(item);

    setItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="item">New Item</label>
      <input
        id="item"
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="add-to-list-button">Add item</button>
    </form>
  );
}

export default TodoForm;
