import React from "react";

import Modal from "../Modal";
import Button from "../Button";

import { ButtonContainer, Container, Title } from "./modalAlert.style";

const ModalAlert = ({ open, onAccept, onCancel }) => {
  return (
    <Modal open={open}>
      <Container>
        <Title>Are you sure you want to delete this item?</Title>

        <ButtonContainer>
          <Button
            model="outline"
            theme="black"
            text="Cancel"
            onClick={onCancel}
          />
          <Button model="outline" theme="black" text="OK" onClick={onAccept} />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default ModalAlert;
