import React, { useState, useEffect } from "react";
import Link from "next/link";
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

  return (
    <Container>
      <Header as="h2">All Notes</Header>
      <Divider hidden />
      <Grid container>
        <Card.Group>
          <CardComponent items={notes} />
        </Card.Group>
      </Grid>
    </Container>
  );
};

export default AllNotes;
