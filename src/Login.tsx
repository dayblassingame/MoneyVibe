import React from "react";

export default function Login() {
  return (
    <div>
      <form id="loginWithEmail">
        <h2>Log into your account</h2>
        <label htmlFor="email">
          Email <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password <input name="password" type="password" />
        </label>
        <input type="submit" value="Log in" />
        <a>Forgot your password?</a>
      </form>
      <div>
        <span>or</span>
      </div>
      <button id="loginWithGoogle">Google</button>
      <a id="signUpLink">Need an account? Sign Up!</a>
    </div>
  );
}
