import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
.form{
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fbf6e9;
  justify-content: center;
  align-items: center;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:30px;
  box-shadow:0 0 5px 4px rgba(0,0,0,0.1);
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    input {
      padding: 10px;
      border-radius: 10px;
      border: 1px solid grey;
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
}

#signup{
  display: none;
}



`;

function Login() {

  const signupform = () => {
  const loginElement = document.getElementById("login");
  const signupElement = document.getElementById("signup");
  loginElement.style.display = "none";
  signupElement.style.display = "block";
}

const loginform = () => {
  const loginElement = document.getElementById("login");
  const signupElement = document.getElementById("signup");
  loginElement.style.display = "block";
  signupElement.style.display = "none";
}
  return (
    <Wrapper>
        <div className="form">

     <div className="login" id="login">
  <h1>Log In</h1>
  <form>
    <label htmlFor="username">email:</label>
    <input type="email" id="loginusername" name="username" required />
    <label htmlFor="password">Password:</label>
    <input type="password" id="loginpassword" name="password" required />
    <button type="submit">Log In</button>
    <p>
      Don't have an account? <span onClick={signupform} className="button">Sign Up</span>
    </p>
  </form>
</div>

      <div className="login" id="signup">
        <h1>Sign Up</h1>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="signupusername" name="username" required />
          <label for="password">Password:</label>
          <input type="password" id="signuppassword" name="password" required />
          <label for="password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
          <button type="submit">Register</button>
          <p>Already have an account?<p onClick={loginform} className="button">Log In</p></p>
        </form>
      </div>
        </div>
    </Wrapper>
  );
}

export default Login;
