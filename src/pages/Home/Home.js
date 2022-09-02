import React, { useState } from "react";

import ReactLoading from "react-loading";

import Modal from "../../components/Modal";
import ModalAlert from "../../components/ModalAlert/modalAlert";
import ModifyPost from "../../components/ModifyPost";
import Post from "../../components/Post";
import { toast } from "react-toastify";

import { Container } from "./home.styles";

import axios from "../../services/axios";
import moment from "moment";

import { useFetch } from "../../hooks/useFetch";
import { useSWRConfig } from "swr";
import { colors } from "../../styles/variables";

const Home = () => {
  const { mutate } = useSWRConfig();

  const { data, isLoading } = useFetch("/careers/");

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [selectedPostId, setselectedPostId] = useState(null);

  const handleEditPost = (e, id) => {
    setselectedPostId(id);
    setOpenEditModal(true);
  };

  const handleDeleteAlert = (e, id) => {
    setselectedPostId(id);
    setOpenDeleteModal(true);
  };

  const handleDeletePost = async () => {
    const response = await axios
      .delete(`/careers/${selectedPostId}/`, {})
      .catch((err) => {
        toast.error("Error on request :/");
      });

    if (response) {
      toast.success("Post has been deleted succesfully.");
      mutate("/careers/");
      setOpenDeleteModal(false);
    }
  };

  return (
    <>
      <Container>
        <ModifyPost />
        {isLoading && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ReactLoading
              type={"spin"}
              color={colors.primary}
              height={"10%"}
              width={"10%"}
            />
          </div>
        )}

        {!!data &&
          data["results"].map(
            ({ id, title, content, username, created_datetime }) => (
              <Post
                key={id}
                title={title}
                username={username}
                date={`${moment(created_datetime).fromNow()}`}
                text={content}
                onEdit={(e) => handleEditPost(e, id)}
                onDelete={(e) => handleDeleteAlert(e, id)}
              />
            )
          )}
      </Container>
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <ModifyPost
          edit
          id={selectedPostId}
          hasEdited={({ edited }) => setOpenEditModal(!edited)}
        />
      </Modal>
      <ModalAlert
        open={openDeleteModal}
        onCancel={() => setOpenDeleteModal(false)}
        onAccept={handleDeletePost}
      />
    </>
  );
};

export default Home;
