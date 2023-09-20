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

    setItem("");
  }

  function toggleCheckbox(id, isCompleted) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: isCompleted };
        }
        return todo;
      });
    });
  }

  function deleteItem(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <todoForm />
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>
        <input
          id="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="add-to-list-button">Add item</button>
      </form> */}

      <div>
        <h2>Item List</h2>
        <ul className="list">
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  id="checkbox"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleCheckbox(todo.id, e.target.checked)}
                />
                <label htmlFor="checkbox"> {todo.title}</label>
                <button
                  className="delete-from-list-button"
                  onClick={() => deleteItem(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
