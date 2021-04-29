import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Login using Firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="login_logo"
        />
      </Link>

      <div className="login_container">
        <h1 className="h1">
          <strong>Sign-In</strong>
        </h1>
        <form>
          <h5>
            {" "}
            <strong>Email</strong>
          </h5>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>
            <strong>Password</strong>
          </h5>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            {" "}
            Sign-in
          </button>
        </form>
        <p>
          By clicking the Sign-in button, you agree to understand that this
          Amazon clone is a fake website build for the purpose of personal
          project.
        </p>
        <button className="signupbtn" onClick={register}>
          Sign Up for Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
