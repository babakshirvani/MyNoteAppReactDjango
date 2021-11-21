import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";

const NotePage = ({ match, history }) => {
  const noteID = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteID]);

  const getNote = async () => {
    if (noteID === "new") return;

    const response = await fetch(`/api/notes/${noteID}`);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    fetch(`/api/notes/${noteID}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    fetch(`/api/notes/${noteID}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  const handleSubmit = () => {
    if (noteID !== "new" && (!note.body || !note.body.trim())) {
      deleteNote();
    } else if (noteID !== "new") {
      updateNote();
    } else if (noteID === "new" && note !== null) {
      createNote();
    }
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <LeftArrow onClick={handleSubmit} />
        </h3>
        {noteID !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
