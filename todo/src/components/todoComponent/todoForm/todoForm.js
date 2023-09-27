import React, { useState } from "react";
import Modal from "react-modal";

function TodoForm({ onSubmit }) {
  const [item, setItem] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyles = {
    content: {
      width: "50%",
      height: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.95)",
      borderRadius: "30px",
      padding: "80px",
    },
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (item === "") return;

    onSubmit(item);

    setItem("");
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          id="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add new item..."
        />
        <button
          className="add-to-list-button"
          onClick={() => {
            if (!item) {
              openModal();
            }
          }}
        >
          Add item
        </button>

        <Modal
          className="animate-fade-static popup-box"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalStyles}
        >
          <button onClick={closeModal}>Close</button>
          <div className="popup-wrapper">
            <div className="popup-inner">
              <span>Error message</span>
              <h2>Please insert input</h2>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default TodoForm;
