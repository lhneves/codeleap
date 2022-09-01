import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

import {
  ButtonContainer,
  Container,
  Subtitle,
  Title,
} from "./modalLogin.style";

const ModalLogin = ({ open, onClose, title, subtitle, onEnter }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Input
          id="username"
          label="Username"
          name="input"
          type="text"
          placeHolder="John doe"
        />
        <ButtonContainer>
          <Button model="filled" theme="black" text="ENTER" onClick={onEnter} />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

ModalLogin.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ModalLogin;
