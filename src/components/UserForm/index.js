import React, { Fragment } from "react";

import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Error } from "./styled";
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };
  return (
    <Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          type="email"
          placeholder="Email"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Password"
          {...password}
        />

        <SubmitButton>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
