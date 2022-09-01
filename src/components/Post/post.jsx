import React from "react";

import { FaEdit, FaTrashAlt } from "react-icons/fa";

import {
  Nav,
  Title,
  Container,
  ContentContainer,
  InfoContainer,
  Info,
  PostText,
} from "./post.style";

const Post = ({ user, title, text, date, onEdit, onDelete }) => {
  return (
    <Container>
      <Nav>
        <Title>{title}</Title>
        <div>
          <FaTrashAlt
            onClick={onEdit}
            size={23}
            style={{ margin: "0 23px", cursor: "pointer", color: "white" }}
          />
          <FaEdit
            onClick={onDelete}
            size={23}
            style={{ cursor: "pointer", color: "white" }}
          />
        </div>
      </Nav>
      <ContentContainer>
        <InfoContainer>
          <Info>{user}</Info>
          <Info>{date}</Info>
        </InfoContainer>
        
        <PostText>{text}</PostText>
      </ContentContainer>
    </Container>
  );
};

export default Post;
