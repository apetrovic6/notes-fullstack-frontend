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
      <div>{noteDetail.title}</div>
      <div>{noteDetail.content}</div>
    </div>
  );
};

export default NoteId;
