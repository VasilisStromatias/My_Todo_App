import React from "react";

function TodoList({ todos, setTodos }) {
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
    <div>
      <h2>Item List</h2>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => toggleCheckbox(todo.id, e.target.checked)}
              />
              <label htmlFor={todo.id}> {todo.title}</label>
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
  );
}

export default TodoList;
