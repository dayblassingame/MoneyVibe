import React, { useState } from "react";
import "./global.scss";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [login, setLogin] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    error: "",
  });
  const { email, password, passwordConfirmation, error } = values;

  const authenticate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!login && password.length < 8) {
      setValues({ ...values, error: "Password must be at least 8 characters" });
      return;
    }
    if (!login && password != passwordConfirmation) {
      setValues({ ...values, error: "Passwords do not match" });
      return;
    }

    if (!login) {
      createAccount();
    } else {
      loginAccount();
    }
  };

  const loginAccount = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        setValues({ ...values, error: "incorrect login credentials" });
      });
  };

  const createAccount = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        if ((error.code = "auth/email-already-in-use")) {
          setLogin(!login);
          setValues({ ...values, error: "Email already in use" });
        }
      });
  };

  return (
    <div id="login">
      <h1>{login ? "Log into your account" : "Sign up to Money Vibe"}</h1>
      <form
        id="loginWithEmail"
        className="form"
        onSubmit={(e) => authenticate(e)}
      >
        <label htmlFor="email">
          Email{" "}
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </label>
        <label htmlFor="password">
          Password{" "}
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </label>
        {!login && (
          <label htmlFor="passwordConfirmation">
            Re-enter password
            <input
              name="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              onChange={(e) =>
                setValues({ ...values, passwordConfirmation: e.target.value })
              }
            />
          </label>
        )}
        <p id="error">{error}</p>
        <input
          className="button-white"
          type="submit"
          value={login ? "Log in" : "Sign up"}
        />
      </form>
      <div>
        {login && <a>Forgot your password?</a>}
        <div className="divider">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button className="button-black" id="loginWithGoogle">
          Google
        </button>
        <a onClick={() => setLogin(!login)}>
          {login ? "Need an account? Sign Up!" : "Already registered? Log in!"}
        </a>
      </div>
    </div>
  );
}
