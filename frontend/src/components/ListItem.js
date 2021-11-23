import React from "react";
import { Link } from "react-router-dom";

let getTitle = (note) => {
  const title = note.body.split("\n")[0];
  if (title.length > 45) {
    return title.splice(0, 45);
  }
  return title;
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/notes/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
      </div>
    </Link>
  );
};

export default ListItem;
