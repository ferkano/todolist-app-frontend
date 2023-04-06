import React, { useState } from "react";
import "./FormNote.scss";

const FormNotePut = ({
  id,
  title,
  setTitle,
  setPutNote,
  updateNote,
  closePutNote,
  status,
  setStatus,
}) => {
  console.log(id);
  const handleUpdate = (e) => {
    e.preventDefault();

    const noteObject = {
      title,
      status,
    };
    updateNote(id, noteObject);
    setTitle("");
    setStatus("");
    setPutNote(false);
  };

  return (
    <div>
      <div className="container-title-addnote">
        <h3>Update your note</h3>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={closePutNote}
        ></button>
      </div>
      <div className="form-container-addnote">
        <form action="" onSubmit={handleUpdate}>
          <div className="mb-3">
            {" "}
            <input
              type="text"
              placeholder="Title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="container-send">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormNotePut;
