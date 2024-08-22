import React, { useState } from "react";
import "./global.scss";

export default function Login() {
  const [login, setLogin] = useState(true);

  return (
    <div id="login">
      <h1>{login ? "Log into your account" : "Sign up to Money Vibe"}</h1>
      <form id="loginWithEmail" className="form">
        <label htmlFor="email">
          Email <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password <input name="password" type="password" />
        </label>
        {!login && (
          <label htmlFor="passwordConfirmation">
            Re-enter password
            <input name="passwordConfirmation" type="password" />
          </label>
        )}
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
