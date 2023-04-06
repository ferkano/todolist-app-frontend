import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import userService from "../service/user";
import FormNote from "./FormNote";
import FormNotePut from "./FormNotePut";
import "./Notes.scss";

const Notes = ({
  user,
  notes,
  setNotes,
  addNote,
  setPutNote,
  putNote,
  title,
  setTitle,
  updateNote,
  id,
  setId,
  deleteNote,
  status,
  setStatus,
}) => {
  useEffect(() => {
    userService.userGet(user.id).then((user) => {
      setNotes(user.data.notes);
    });
  }, []);
  const [viewform, setViewForm] = useState(false);

  const openForm = (e) => {
    setViewForm(true);
  };

  const closePutNote = (e) => {
    setTitle(""), setPutNote(false);
  };

  console.log(notes);
  return (
    <div className="container-note">
      <h2 className="">{`Welcome ${
        user.name[0].toUpperCase() + user.name.substring(1)
      } ${user.lastname[0].toUpperCase() + user.lastname.substring(1)}!`}</h2>

      <div>
        {!viewform && !putNote && (
          <button className="btn btn-primary" onClick={openForm}>
            Add a note
          </button>
        )}
        {viewform && (
          <FormNote
            addNote={addNote}
            updateNote={updateNote}
            openForm={openForm}
            viewform={viewform}
            setViewForm={setViewForm}
          ></FormNote>
        )}

        {putNote && (
          <FormNotePut
            setStatus={setStatus}
            status={status}
            id={id}
            setId={setId}
            putNote={putNote}
            closePutNote={closePutNote}
            title={title}
            setTitle={setTitle}
            updateNote={updateNote}
            setPutNote={setPutNote}
          />
        )}
      </div>
      <table className="table-notes">
        <tbody className="table-notes__tbody">
          {notes.map((note, i) => (
            <TableData
              notes={notes}
              key={i}
              id={note._id}
              note={note}
              setId={setId}
              setPutNote={setPutNote}
              title={title}
              setTitle={setTitle}
              deleteNote={deleteNote}
              setNotes={setNotes}
              setViewForm={setViewForm}
              updateNote={updateNote}
              setStatus={setStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notes;
