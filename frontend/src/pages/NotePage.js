import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";

const NotePage = ({ match }) => {
  const noteID = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteID]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/${noteID}`);
    const data = await response.json();
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <LeftArrow />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
