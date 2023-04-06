import React, { useState } from "react";
import "./TableData.scss";

const TableData = ({
  note,
  id,
  notes,
  setId,
  setPutNote,
  setTitle,
  deleteNote,
  setNotes,
  setViewForm,
  updateNote,
  setStatus,
}) => {
  const handleUpdate = (e) => {
    setViewForm(false);
    setId(e.target.id);
    setPutNote(true);
    notes.map((note) => {
      if (note._id === id) {
        setTitle(note.title);
        setStatus(note.status);
      }
    });
  };

  const handleDelete = (e) => {
    setId(e.target.id);
    setPutNote(false);
    if (confirm("estas seguro de eliminar la nota")) {
      console.log(id);
      deleteNote(id);
      console.log(notes);
      const newData = notes.filter((note) => note._id != id);
      setNotes(newData);
    }
  };
  const handleStatus = (e) => {
    const status = !note.status;
    setId(e.target.id);
    setPutNote(false);
    const noteObject = {
      status,
    };
    console.log(noteObject, id);
    updateNote(id, noteObject);
  };
  return (
    <tr>
      <div className="form-check">
        <input
          onClick={handleStatus}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          defaultChecked={!note.status ? "checked" : ""}
          data={id}
        />
      </div>
      <td className={note.status ? "td-title" : "td-title check"}>
        {note.title}
      </td>
      <div className="td-icon">
        <td>
          <div className="btn btn-secondary" id={id} onClick={handleUpdate}>
            <i
              class="bi bi-pen td-icon__icon"
              id={id}
              onClick={handleUpdate}
            ></i>
          </div>
        </td>
        <td>
          <div className="btn btn-secondary" id={id} onClick={handleDelete}>
            <i class="bi bi-x-circle td-icon__icon"></i>
          </div>
        </td>
      </div>
    </tr>
  );
};

export default TableData;
