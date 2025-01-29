import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
  })
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
  if(signupData.password !== document.getElementById("confirm-password").value){
    setMessage("Passwords do not match");
    return;
  }

  const existingUser = users.find((u) => u.username === signupData.username);
  if (existingUser) {
    setMessage("Username already exists");
    return;
    }

    setUsers([...users, signupData]);
    localStorage.setItem("users", JSON.stringify([...users, signupData]));
    setMessage("Registration successful! You can now login");
  }

  const handlelogin = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = storedUsers.find(
      (u) => u.username === formData.username && u.password === formData.password
    )
    if (user) {
      setMessage("Login successful");
      navigate("/");
      return;
    }
    else{
      setMessage("Invalid username or password");
    }
  }

  const signupform = () => {
    const loginElement = document.getElementById("login");
    const signupElement = document.getElementById("signup");
    loginElement.style.display = "none";
    signupElement.style.display = "block";
  };

  const loginform = () => {
    const loginElement = document.getElementById("login");
    const signupElement = document.getElementById("signup");
    loginElement.style.display = "block";
    signupElement.style.display = "none";
  };

  return (
    <Wrapper>
      <div className="forms">
        <div className="login" id="login">
          <h1>Log In</h1>
          <div className="loginform">
            <div className="image-container"></div>
            <form onSubmit={handlelogin}>
              <label htmlFor="username">username:</label>
              <input
                type="username"
                id="loginusername"
                name="username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="loginpassword"
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
              <button type="submit">Log In</button>
              <p>
                Don't have an account?
                <span onClick={signupform} className="button">
                  Sign Up
                </span>
              </p>
              <p>{message}</p>
            </form>
          </div>
        </div>

        <div className="login" id="signup">
          <h1>Sign Up</h1>
          <div className="loginform">
            <div className="image-container"></div>
            <form onSubmit={handleSignup}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="signupusername"
                name="username"
                value={signupData.username}
                onChange={(e) =>
                  setSignupData({ ...signupData, username: e.target.value })
                }
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="signuppassword"
                name="password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <span onClick={loginform} className="button">
                  Log In
                </span>
              </p>
              <p>{message}</p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
