import React from "react";
import { useSelector } from "react-redux";

import Button from "../Button";
import Input from "../Input";

import { toast } from 'react-toastify';

import {
  Container,
  Title,
  Subtitle,
  ErrorHolder,
  Error,
  ModifyPostForm,
} from "./modifyPost.style";
import { rem } from "../../styles/variables";

import * as Yup from "yup";
import { Formik, Field } from "formik";

import axios from '../../services/axios';

import { useSWRConfig } from 'swr';

const ModifyPost = ({ edit = false, id = null, hasEdited = false }) => {
  const { mutate } = useSWRConfig();

  const username = useSelector((state) => state.auth.user);

  const ModifyPostSchema = Yup.object().shape({
    title: Yup.string().required(),
    content: Yup.string().required(),
  });

  return (
    <Container edit={edit}>
      <Title>{edit ? "Edit item" : "What’s on your mind?"}</Title>
      <Formik
        initialValues={{
          title: "",
          content: "",
        }}
        validationSchema={ModifyPostSchema}
        onSubmit={async (data, {resetForm}) => {
          const { title, content } = data;

          if(edit){
            const postInfo = {
              title: title,
              content: content,
            }

            const response = await axios.patch(`/careers/${id}/`, postInfo);
            
            if(response){
              toast.success('Post has been edited succesfully.')
              mutate('/careers/');
              hasEdited({edited: true})
            }
          } else {
            const postInfo = {
              username: username,
              title: title,
              content: content,
            }

            const response = await axios.post(`/careers/`, postInfo);
            
            if(response){
              mutate('/careers/');
              resetForm({values: ''});
            }
          }
        }}
      >
        {({ values }) => (
          <ModifyPostForm style={{ width: "100%" }}>
            <div style={{ marginBottom: `${rem(19)}` }}>
              <Subtitle>Title</Subtitle>
              <Field name="title">
                {({ field, meta }) => (
                  <div>
                    <Input
                      id="title"
                      label=""
                      name="input"
                      type="text"
                      placeholder="Hello world"
                      {...field}
                    />
                    {meta.touched && meta.error && (
                      <ErrorHolder>
                        <Error>{meta.error}</Error>
                      </ErrorHolder>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div style={{ marginBottom: `${rem(35)}` }}>
              <Subtitle>Content</Subtitle>
              <Field name="content">
                {({ field, meta }) => (
                  <div>
                    <Input
                      id="content"
                      label=""
                      name="input"
                      placeholder="Content here"
                      type="textarea"
                      {...field}
                    />

                    {meta.touched && meta.error && (
                      <ErrorHolder>
                        <Error>{meta.error}</Error>
                      </ErrorHolder>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          model="filled"
          theme={(!!values.title && !!values.content) ? "black" : "primary"}
          text="ENTER"
          type="submit"
          disabled={!(!!values.title && !!values.content)}
        />
      </div>
          </ModifyPostForm>
        )}
      </Formik>

      
    </Container>
  );
};

export default ModifyPost;
