import React from "react";

export default function SignUp() {
  return (
    <div>
      <form id="signUpWithEmail">
        <h2>Log into your account</h2>
        <label htmlFor="email">
          Email <input type="text" name="email" />
        </label>
        <label htmlFor="password">
          Password <input name="password" type="password" />
        </label>
        <label htmlFor="passwordConfirmation">
          Confirm Password{" "}
          <input name="passwordComfirmation" type="passwordConfirmation" />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      <div>
        <span>or</span>
      </div>
      <button id="signUpWithGoogle">Google</button>
      <a id="signUpLink">Need an account? Sign Up!</a>
    </div>
  );
}
