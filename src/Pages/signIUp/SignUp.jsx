import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import GoogleImg from "../../Assest/Images/google.png";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const auth = getAuth(app);

const SignUp = () => {
  const [showPasswprd, setshowPasswprd] = useState(false);
  const [showPasswprd1, setshowPasswprd1] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    conformPassword: "",
  });

  const signUp = () => {
    setShowLoader(true);
    createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setShowLoader(false);
        setFormFields({
          email: "",
          password: "",
          conformPassword: "",
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const onChangeFirld = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormFields(() => ({
      ...formFields,
      [name]: value,
    }));
    console.log(formFields);
  };

  return (
    <>
      <section className="signIn mb-5">
        <div class="breadcrumbwrapper">
          <div className="container-fluid">
            <ul class="breadcrumb breadcrumb2 mb-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>SignUp</li>
            </ul>
          </div>
        </div>

        <div className="loginWrapper">
          <div className="card shadow">
            <Backdrop
              sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={showLoader}
              className="formLoader"
            >
              <CircularProgress color="inherit" />
            </Backdrop>

            <h3>SignUp</h3>
            <form className="mt-4">
              <div className="form-group mb-4 w-100">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  className="w-100"
                  onChange={onChangeFirld}
                  value={formFields.email}
                />
              </div>
              <div className="form-group mb-4 w-100 ">
                <div className="position-relative">
                  <TextField
                    id="password"
                    type={showPasswprd === false ? "password" : "text"}
                    name="password"
                    label="password"
                    className="w-100"
                    onChange={onChangeFirld}
                    value={formFields.password}
                  />
                  <Button
                    className="icon"
                    onClick={() => setshowPasswprd(!showPasswprd)}
                  >
                    {showPasswprd === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div>
              <div className="form-group mb-4 w-100 ">
                <div className="position-relative">
                  <TextField
                    id="conformPassword"
                    type={showPasswprd1 === false ? "password" : "text"}
                    name="conformPassword"
                    label="conformPassword"
                    className="w-100"
                    onChange={onChangeFirld}
                    value={formFields.conformPassword}
                  />
                  <Button
                    className="icon"
                    onClick={() => setshowPasswprd1(!showPasswprd1)}
                  >
                    {showPasswprd1 === false ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Button>
                </div>
              </div>

              <div className="form-group mt-5 mb-4 w-100">
                <Button className="btn btn-g btn-lg w-100" onClick={signUp}>
                  SignUp
                </Button>
              </div>
              <p className="text-center">
                Already have an account
                <b>
                  <Link to="/signUp">sign In</Link>
                </b>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
