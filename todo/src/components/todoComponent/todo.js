import React, { useEffect, useState } from "react";

import TodoForm from "./todoForm/todoForm";
import TodoList from "./todoList/todoList";

import "../todoComponent/todo.css";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(item) {
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
      <div className="todo-page">
        <div className="todo-page-wrapper">
          <div className="todo-page-inner">
            <TodoForm onSubmit={addTodo} />
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
