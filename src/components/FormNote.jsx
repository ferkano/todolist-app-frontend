import React, { useState } from "react";
import "./FormNote.scss";

const FormNote = ({ addNote, viewForm, setViewForm, openForm }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteObject = {
      title,
    };
    addNote(noteObject);
    setTitle("");
  };

  return (
    <div>
      <div className="container-title-addnote">
        <h3>Add a note</h3>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          onClick={() => setViewForm(false)}
        ></button>
      </div>
      <div className="form-container-addnote">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            {" "}
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="container-send">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormNote;
