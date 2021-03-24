import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { UserContext } from "../../context/UserContext";
import CardComponent from "../../components/CardComponent";

const AllNotes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const {
    value: { userId },
  } = useContext(UserContext);

  const getNotes = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/notes/", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        params: {
          userId,
        },
      });

      setNotes(...notes, data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("user id", userId);
  useEffect(() => {
    getNotes();
  }, []);
  console.log("data", notes);
  if (notes.length == 0) {
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
