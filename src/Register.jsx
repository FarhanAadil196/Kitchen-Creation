import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth,db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


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
function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      if(user){
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
          fname: fname,
          lname: lname,
        });
      }
      console.log("User signed up successfully");
      toast.success("User signed up successfully", {position:"top-center",});

    } catch (error) {
      setError(error.message);
      toast.success(error.message, {position :"bottom-center",});
    }
  };
  return (
    <Wrapper>
     <div className="forms">
        <div className="login" id="signup">
          <h1>Sign Up</h1>
          <div className="loginform">
            <div className="image-container"></div>
            <form onSubmit={handleSignup} autoComplete="on">
              <label>First name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
              <label>Last name:</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span className="button">Log In</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
