import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setUser("");
    setPwd("");

    axios
      // update information to backend
      .get(`http://localhost:8020/login`, user, pwd)
      .then((response) => {
        alert("Added Successfully");
      });
  };

  return (
    <>
      {success ? (
        <section className="success">
          <h1>You are logged in!</h1>
          <p>Where would you like to go?</p>
          <Link to={"/"}>
            <h2>Visit the Pixel Board</h2>
          </Link>
          <Link to={"/BuyPixel"}>
            <h2>Buy a Pixel</h2>
          </Link>
          <Link to={"/add"}>
            <h2>Register your company</h2>
          </Link>
        </section>
      ) : (
        <div className="wrapper">
          <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}></p>
            <h1 className="login__text">Login</h1>
            <form className="login__form" onSubmit={handleSubmit}>
              <div className="login__actions">
                <input
                  className="login__input"
                  placeholder="Username"
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <input
                  className="login__input"
                  placeholder="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
                <button className="login__button">Login</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Login;
