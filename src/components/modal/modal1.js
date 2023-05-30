import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./modal.css";
// import { Plus } from "react-feather";

function Modal1({ text, showModal, setShowModal, refresher, item }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    const savedData = JSON.parse(localStorage.getItem("myNotes1")) || [];
    if (!title || !content) {
      return alert("Title and Content is required");
    }
    let newData = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    savedData.push(newData);
    localStorage.setItem("myNotes1", JSON.stringify(savedData));
    setTitle("");
    setContent("");
    setShowModal(false);
    // window.location.reload()
    refresher();
  };

  const handleEdit = () => {
    const savedData = JSON.parse(localStorage.getItem("myNotes1")) || [];
    if (!title || !content) {
      return alert("Title and Content is required");
    }
    savedData.map((itemm) => {
      if (itemm.id == item.id) {
        itemm.title = title;
        itemm.content = content;
      }
    });
    localStorage.setItem("myNotes1", JSON.stringify(savedData));
    setTitle("");
    setContent("");
    setShowModal(false);
    refresher();
  };

  const handleAdd2 = () => {
    alert("hi");
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setShowModal(false);
  };

  useEffect(() => {
    setTitle(item.title);
    setContent(item.content);
  }, []);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{text} New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control mb-3"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="form-control"
            style={{ height: "120px" }}
            placeholder="Enter Description...."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={text === "Edit" ? handleEdit : handleAdd}
          >
            {text}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;
