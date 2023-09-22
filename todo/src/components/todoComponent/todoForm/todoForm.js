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
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="item">Add new item</label> */}
        <input
          id="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add new item..."
        />
        <button className="add-to-list-button">Add item</button>
      </form>
    </div>
  );
}

export default TodoForm;
