import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const {
    value: { userId },
  } = useContext(UserContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content, userId };
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/api/notes/create",
        data: newNote,
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
    } catch (error) {
      console.error.status;
    }
  };
  console.log("From create note page", userId);
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
            minLength={1}
            maxLength={100}
            required
          />

          <textarea
            placeholder="Note"
            rows="30"
            onChange={(e) => setContent(e.target.value)}
            className="w-full shadow-lg border my-2 py-2 px-2 focus:outline-none"
            maxLength={10000}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
