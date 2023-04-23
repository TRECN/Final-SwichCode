import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./Firebase";
import "./loginform.css";
import { signInWithGoogle } from "./Firebase";
import { signInWithFacebook } from "./Firebase";
import { signInWithGithub } from "./Firebase";

const Loginform = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
   
    email: "",
   
    password: "",
   
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
     
      !values.email ||
     
      !values.password 
      
    ) {
      setErrorMsg("Please Fill All Field");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    signInWithEmailAndPassword(auth,values.email,values.password,)
      .then(async (res) => {
        const user = res.user;
        const name = res.user.displayName;
        const email = res.user.email;
      
       localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      
      
        setSubmitButtonDisabled(false);
       
        navigate("/Mainpage");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="page">
      <div className="login-form">
        <h1>LogIn</h1>
        <form>
          <div className="email">
            <input type="email" placeholder="Email" 
            onChange ={(event) =>
              setValues((prev) =>({...prev,email:event.target.value}) )}></input>
          </div>

          <div className="password">
            <input type="password" placeholder="Password" 
            onChange ={(event) =>
              setValues((prev) =>({...prev,password:event.target.value}) )}></input>
          </div>
          <p>
            Forgot Password <Link href="#">Click Here!</Link>
          </p>
          <div className="signin-btn">
          <b>{errorMsg}</b>
            <button type="button" className="signinbtn"disabled ={submitButtonDisabled} onClick={handleSubmission}>
              SignIn
            </button>
          </div>
        </form>
        <hr></hr>
        <div className="alt-login-1">
          <button
            type="button"
            className="google-btn"
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </button>
          <button type="button" className="fb-btn" onClick={signInWithFacebook}>
            {" "}
            Sign In With Facebook
          </button>
          <button type="button" className="git-btn" onClick={signInWithGithub}>
            Sign In With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};
export default Loginform;

