import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import CardComponent from "../../components/CardComponent";

const AllNotes = () => {
  let user;
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/notes/", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        params: {
          author: user._id,
        },
      });
      setNotes(...notes, data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetail = async () => {
    const jwt = localStorage.getItem("token");
    user = jwtDecode(jwt);
    console.log(user);
  };

  useEffect(() => {
    getUserDetail();
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
