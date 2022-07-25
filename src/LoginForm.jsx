import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login/graphql-queries";

export const LoginForm = ({ notifyError, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, result] = useMutation(LOGIN, {
    onError: (err) => {
      notifyError(err.graphQLErrors[0].message);
    },
  });

  useEffect(() => {
    if (result.data) {
      const { value: token } = result.data.login;

      setToken(token);

      localStorage.setItem("phonenumbers-user-token", token);
    }
  }, [result.data]);

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ variables: { username, password } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input
            type="text"
            value={username}
            onChange={({ target }) => {
              setUsername(target.value);
            }}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
