import React from "react";
import Modal from "../../components/Modal";
import ModalAlert from "../../components/ModalAlert/modalAlert";
import ModifyPost from "../../components/ModifyPost";

import Post from "../../components/Post";

import { Container } from "./home.styles";

const Home = () => {
  return (
    <>
      <Container>
        <ModifyPost />
        <Post
          title="My First Post at CodeLeap Network!"
          user="@lhneves"
          date="25 minutes ago"
          text="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

      Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
        />
      </Container>
      <Modal open={false}>
        <ModifyPost edit />
      </Modal>
      <ModalAlert open={true} />
    </>
  );
};

export default Home;
