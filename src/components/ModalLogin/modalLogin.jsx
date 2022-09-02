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
  SignInForm,
  ErrorHolder,
  Error,
} from "./modalLogin.style";

import * as Yup from "yup";
import { Formik, Field } from "formik";

import { useDispatch } from "react-redux";
import * as actions from "../../actions/auth";

import { useNavigate } from "react-router-dom";

const ModalLogin = ({ open, onClose, title, subtitle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignInSchema = Yup.object().shape({
    username: Yup.string().required(),
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Formik
          initialValues={{
            username: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={(data) => {
            const { username } = data;

            dispatch(actions.login({ user: username }));

            navigate("home", { replace: true });
          }}
        >
          {({ values }) => (
            <SignInForm style={{ width: "100%" }}>
              <Field name="username">
                {({ field, meta }) => (
                  <div>
                    <Input
                      id="username"
                      label="Username"
                      name="input"
                      type="text"
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
              <ButtonContainer>
                <Button
                  model="filled"
                  theme={!!values.username ? "black" : "primary"}
                  text="ENTER"
                  type="submit"
                  disabled={!!!values.username}
                />
              </ButtonContainer>
            </SignInForm>
          )}
        </Formik>
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
