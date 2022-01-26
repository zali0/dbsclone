import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="logoWrapper">
        <img
          className="logo"
          alt="DBS Logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/DBS-Bank-logo.png"
        />
      </div>
      <div className="formWrapper">
        <div className="form">
          <div class="signupSection">
            <div class="info">
              <h2>Live more, Bank less</h2>
              <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
              <p>The Future Is Here</p>
            </div>
            <form action="#" method="POST" class="signupForm" name="signupform">
              <h2>Login</h2>
              <ul class="noBullet">
                <li>
                  <label for="username"></label>
                  <input
                    type="text"
                    class="inputFields"
                    id="username"
                    name="username"
                    placeholder="Username"
                    oninput="return userNameValidation(this.value)"
                    required
                  />
                </li>
                <li>
                  <label for="password"></label>
                  <input
                    type="password"
                    class="inputFields"
                    id="password"
                    name="password"
                    placeholder="Password"
                    oninput="return passwordValidation(this.value)"
                    required
                  />
                </li>
                <li>
                  <label for="email"></label>
                  <input
                    type="email"
                    class="inputFields"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li id="center-btn">
                  <input
                    type="submit"
                    id="join-btn"
                    name="Login"
                    alt="Login"
                    value="Login"
                  />
                </li>
              </ul>

              <p className="link">
                Don't have an account?{" "}
                <span className="themeColor">Sign Up!</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
