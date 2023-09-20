import React, { useState } from "react";

function TodoForm() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: item,
          completed: false,
        },
      ];
    });

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
