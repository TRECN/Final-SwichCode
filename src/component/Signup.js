import React, { useState } from "react";
import "../css/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./Firebase";

export default function Signup() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cnfpassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.password ||
      !values.cnfpassword
    ) {
      setErrorMsg("Please Fill All Field");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password,
      values.name,
      values.phone,
      values.cnfpassword
    )
      .then(async (result) => {
        const profile = result.user;

        setSubmitButtonDisabled(false);

        await updateProfile(profile, {
          displayName: values.name,
        });

        navigate("/Mainpage");
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="signup-page">
      <div>
      <div className="signuptext">
        <h1>Welcome to Our Community</h1>
        
      </div>

      <div className="codeImg1">

</div>
      </div>
      
      
      <div className="signup">
        <h1>SignUp</h1>
        <form>
          <div className="username">
            <input
              type="name"
              placeholder="Name"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
            ></input>
          </div>

          <div className="email">
            <input
              type="email"
              placeholder="Email"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
            ></input>
          </div>

          <div className="phone">
            <input
              type="phone"
              placeholder="Phone"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, phone: event.target.value }))
              }
            ></input>
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Password"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
            ></input>
          </div>

          <div className="cnfpassword">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  cnfpassword: event.target.value,
                }))
              }
            ></input>
          </div>
          <div className="signup-btn">
            <b>{errorMsg}</b>
            <button
              type="button"
              className="signupbtn"
              onClick={handleSubmission}
              disabled={submitButtonDisabled}
            >
              SignUp
            </button>
          </div>
        </form>
        <div className="existinguser">
          <p>Already A Member</p>
          <Link to="/" className="existing-login">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
}
