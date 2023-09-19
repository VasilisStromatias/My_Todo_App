import React, { useState } from "react";

import "../todoComponent/todo.css";

function Todo() {
  const [item, setItem] = useState("");
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
  }

  return (
    <>
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

      <div>
        <h2>Item List</h2>
        <ul className="list">
          <li>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox"> Item 1</label>
            <button className="delete-from-list-button"> Delete </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Todo;
