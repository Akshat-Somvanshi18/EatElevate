import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("authenticated", true);
      props.setAuthenticated(true);
      console.log("entered login");
      navigate("/main-page");
    });
  };
  return (
    <>
      {/* <h3 className="text-center pt-5">EatElevate</h3> */}
      <section className="d-flex flex-column align-items-center">
       <img src="./eat-logo.svg" alt="logo" id="login-logo" className="mt-5"/>
      <div className="login-div d-flex flex-column align-items-center my-5 mx-auto border-3 border-secondary rounded-5 p-5 shadow">
        <img src="./EatElevate-logo.png" id="login-img" alt="login-img" />
        <h1>Login</h1>
        <p>Login With Google</p>
        <button
          className="btn text-center login-btn border"
          onClick={signInWithGoogle}
        >
          <img src="./google.png" id="google-img" className="mx-2" />
        
        </button>
      </div>
      </section>
    </>
  );
}
