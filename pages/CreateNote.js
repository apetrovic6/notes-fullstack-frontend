import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Divider,
  Button,
} from "semantic-ui-react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const newNote = { title, content };
    axios.post("http://localhost:5000/api/notes/create", newNote);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Header as="h2">Create new note</Header>
        <Button content="Save Note" color="green" floated="right" />

        <Form.Field>
          <Divider hidden />
          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Divider hidden />
          <TextArea
            placeholder="Note"
            rows={40}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default CreateNote;
