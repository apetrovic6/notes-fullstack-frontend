import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/UserContext";

import axios from "axios";

const NoteId = () => {
  const {
    value: { userId },
  } = useContext(UserContext);
  const router = useRouter();

  const { noteId } = router.query;

  const [noteDetail, setNoteDetail] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getNoteDetail = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/notes/${noteId}`,
      {
        headers: { "x-auth-token": localStorage.getItem("token") },
      }
    );

    setNoteDetail(data);
    console.log(noteDetail);
  };

  useEffect(() => {
    getNoteDetail();
  }, []);

  const onDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${noteId}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      router.push("/Notes");
    } catch (err) {
      console.log(err);
    }
  };

  const onEdit = () => {
    setIsEditing(true);
    setTitle(noteDetail[0].title);
    setContent(noteDetail[0].content);
  };

  const onUpdate = async () => {
    const updatedNote = { title, content };
    await axios.put(`http://localhost:5000/api/notes/${noteId}`, updatedNote, {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });
    setIsEditing(false);
    getNoteDetail();
  };

  if (!noteDetail) {
    return <div>Loading</div>;
  }

  if (!userId) {
    router.push("/");
  }

  return (
    <div>
      <div className="flex justify-between border shadow-lg w-full py-2 px-2 mb-8">
        {isEditing ? (
          <h2 className="w-2/3">
            <input
              className="w-full px-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h2>
        ) : (
          <h2 className="">{noteDetail[0].title}</h2>
        )}

        <div className="">
          <button
            onClick={onEdit}
            className="mx-2 px-2 border bg-green-400 focus:outline-none"
          >
            EDIT
          </button>
          <button
            onClick={onDelete}
            className="mx-2 px-2 border bg-red-400 focus:outline-none"
          >
            DELETE
          </button>
        </div>
      </div>
      <div>
        {isEditing ? (
          <div>
            <div className="flex justify-end ">
              <button
                onClick={onUpdate}
                className="px-2 border shadow-lg bg-green-400 focus:outline-none"
              >
                UPDATE
              </button>
            </div>
            <textarea
              className="shadow-lg border my-2 py-2 px-2 w-full h-screen"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        ) : (
          <p className="shadow-lg border my-2 py-2 px-2">
            {noteDetail[0].content}
          </p>
        )}
      </div>
    </div>
  );
};

export default NoteId;
