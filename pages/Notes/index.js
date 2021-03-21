import React, { useState, useEffect, Fragment } from "react";

import axios from "axios";
import CardComponent from "../../components/CardComponent";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(...notes, data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  if (!notes.length === 0) {
    return <h1>No notes found</h1>;
  }
  return (
    <div className="mx-18">
      <h2 className="text-4xl my-4">All Notes</h2>

      <div className="flex justify-center">
        <ul className="grid grid-cols-5 auto-rows-auto">
          {notes.map((note) => (
            <li key={note._id} className="mx-2 my-2">
              <CardComponent
                title={note.title}
                content={note.content}
                id={note._id}
                key={note._id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllNotes;
