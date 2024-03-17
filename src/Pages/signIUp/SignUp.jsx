import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import TextField from "@mui/material/TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Button } from "@mui/material";
import GoogleImg from "../../Assest/Images/google.png";

const SignUp = () => {
  const [showPasswprd, setshowPasswprd] = useState(false);
  const [showPasswprd1, setshowPasswprd1] = useState(false);

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
            <h3>SignUp</h3>
            <form className="mt-4">
              <div className="form-group mb-4 w-100">
                <TextField
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  className="w-100"
                />
              </div>
              <div className="form-group mb-4 w-100 ">
                <div className="position-relative">
                  <TextField
                    id="Password"
                    type={showPasswprd === false ? "password" : "text"}
                    name="Password"
                    label="Password"
                    className="w-100"
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
                    id="Password"
                    type={showPasswprd1 === false ? "password" : "text"}
                    name="confitm_Password"
                    label="confitm_Password"
                    className="w-100"
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
                <Button className="btn btn-g btn-lg w-100">SignUp</Button>
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
