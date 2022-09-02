import React from "react";
import { rem } from "../../styles/variables";

import Button from "../Button";
import Input from "../Input";

import { Container, Title, Subtitle } from "./modifyPost.style";

const ModifyPost = ({ onSubmit, edit = false }) => {
  return (
    <Container edit={edit}>
      <Title>{edit ? "Edit item" : "What’s on your mind?"}</Title>
      <div style={{ marginBottom: `${rem(19)}` }}>
        <Subtitle>Title</Subtitle>
        <Input id="title" label="" placeholder="Hello world" />
      </div>
      <div style={{ marginBottom: `${rem(35)}` }}>
        <Subtitle>Content</Subtitle>
        <Input id="content" label="" placeholder="Content here" type="textarea" />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          model={"filled"}
          theme="black"
          text={edit ? "SAVE" : "CREATE"}
          onClick={onSubmit}
        />
      </div>
    </Container>
  );
};

export default ModifyPost;
