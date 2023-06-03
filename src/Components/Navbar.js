import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";

export default function Navbar(props) {
  let navigate = useNavigate();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      navigate("/Login");
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Valsco
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Read Blogs
                </Link>
              </li>

              <li className="nav-item">
                {props.authenticated? (
                  <Link className="nav-link" onClick={signUserOut}>
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link" to="/Login">
                    Login
                  </Link>
                )}
              </li>
                {
                  props.authenticated && auth.currentUser && <li className="nav-item"><Link className="nav-link">Hello {((auth.currentUser.displayName).split(" "))[0]}!</Link></li>
                }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
