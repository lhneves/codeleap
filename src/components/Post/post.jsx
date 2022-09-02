import React from "react";
import { useSelector } from "react-redux";

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

const Post = ({ username, title, text, date, onEdit, onDelete }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Nav>
        <Title>{title}</Title>
        {username === user && (
          <div>
            <FaTrashAlt
              onClick={onDelete}
              size={23}
              style={{ margin: "0 23px", cursor: "pointer", color: "white" }}
            />
            <FaEdit
              onClick={onEdit}
              size={23}
              style={{ cursor: "pointer", color: "white" }}
            />
          </div>
        )}
      </Nav>
      <ContentContainer>
        <InfoContainer>
          <Info>@{username}</Info>
          <Info>{date}</Info>
        </InfoContainer>
        
        <PostText>{text}</PostText>
      </ContentContainer>
    </Container>
  );
};

export default Post;
