import React, { useState, useEffect } from "react";
import { Container, Header, Grid, Card, Divider } from "semantic-ui-react";
import axios from "axios";
import CardComponent from "../../components/CardComponent";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes");
    setNotes(...notes, data);
  };

  console.log(notes);

  useEffect(() => {
    getNotes();
  }, []);

  if (!notes.length === 0) {
    return <h1>No notes found</h1>;
  }
  return (
    <Container>
      <Header as="h2">All Notes</Header>
      <Divider hidden />
      <Grid container>
        <Card.Group>
          {notes.map((note) => (
            <CardComponent
              title={note.title}
              content={note.content}
              _id={note._id}
              key={note._id}
            />
          ))}
        </Card.Group>
      </Grid>
    </Container>
  );
};

export default AllNotes;
