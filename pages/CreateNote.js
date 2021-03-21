import React, { useState } from "react";
import axios from "axios";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content };
    axios.post("http://localhost:5000/api/notes/create", newNote);
  };

  return (
    <div className="w-screen  ">
      <h2 className="text-4xl px-2 py-2">Create new note</h2>
      <div className="flex justify-center h-4/5 w-full ">
        <form onSubmit={onSubmit} className="w-2/3">
          <div className="flex justify-end my-2">
            <button className="border bg-green-400 px-2 shadow-lg">
              Save Note
            </button>
          </div>

          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="border shadow-lg w-full py-2 px-2 focus:outline-none"
          />

          <textarea
            placeholder="Note"
            rows="30"
            onChange={(e) => setContent(e.target.value)}
            className="w-full shadow-lg border my-2 py-2 px-2 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
