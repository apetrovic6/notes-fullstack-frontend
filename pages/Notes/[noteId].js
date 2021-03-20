import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const NoteId = () => {
  const router = useRouter();
  const { noteId } = router.query;
  const { asPath } = router;
  const [note, setNote] = useState();

  const getNote = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/notes/${noteId}}`
    );
    setNote(data);
  };

  console.log(noteId);
  console.log(note);
  console.log(router);
  useEffect(() => {
    getNote();
  }, []);

  return <div>{/* <div> {note.title}</div> <div>{note.content}</div> */}</div>;
};

export default NoteId;
