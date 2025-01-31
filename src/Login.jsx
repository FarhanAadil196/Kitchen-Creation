import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`

  .forms {
    width: 100%;
    min-height: 100vh;
    display: flex;
    background-color: #fbf6e9;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    border-radius: 30px;
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 20px;
    background: white;

    h1 {
      margin-bottom: 10px;
      text-align: center;
    }

    .loginform {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
    }

    .image-container {
      flex: 1;
      min-width: 150px;
      max-width: 180px;
      height: 200px;
      background: url("./loginimg.png");
      background-size: cover;
      background-position: center;
      border-radius: 10px;
    }

    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      max-width: 300px;

      input {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background: transparent;
        border-bottom: 1px solid;
        outline: none;
      }

      button {
        padding: 10px;
        border-radius: 10px;
        border: none;
        background-color: #5db996;
        color: white;
        cursor: pointer;
      }
    }

    .button {
      color: #5db996;
      cursor: pointer;
    }
  }

  #signup {
    display: none;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    .login {
      width: 90%;
      padding: 15px;
    }

    .loginform {
      flex-direction: column;
      gap: 15px;
    }

    .image-container {
      width: 100%;
      max-width: 300px;
      height: 180px;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      toast.success("User signed in successfully", {
        position: "top-right",
      });
      navigate("/");

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };
  return (
    <>
       <ToastContainer />
    <Wrapper>
      <div className="forms">
        <div className="login" id="login">
          <h1>Log In</h1>
          <div className="loginform">
            <div className="image-container"></div>
            <form onSubmit={handleSubmit} autoComplete="on">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

              <button type="submit">Log In</button>
              <p>
                Don't have an account?
                <Link to="/Register">
                <span className="button">
                  Sign Up
                </span>
                </Link>
              </p>
            
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
    </>
   
  );
}

export default Login;

