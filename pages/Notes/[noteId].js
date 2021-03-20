import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import axios from "axios";

const NoteId = () => {
  const router = useRouter();

  const { noteId } = router.query;

  const [noteDetail, setNoteDetail] = useState();

  const getNoteDetail = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/notes/${noteId}`
    );
    setNoteDetail(data);
  };

  useEffect(() => {
    getNoteDetail();
  }, []);

  if (!noteDetail) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div className="flex justify-between border shadow-lg w-full py-2 px-2 mb-8">
        <h2 className="">{noteDetail.title}</h2>
        <div className="">
          <button className="mx-2 px-2 border bg-green-400 focus:outline-none">
            EDIT
          </button>
          <button className="mx-2 px-2 border bg-red-400 focus:outline-none">
            DELETE
          </button>
        </div>
      </div>
      <p className="shadow-lg border my-2 py-2 px-2">{noteDetail.content}</p>
    </div>
  );
};

export default NoteId;
