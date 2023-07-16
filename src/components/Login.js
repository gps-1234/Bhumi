import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  // document.body.style = "background: rgb(95, 187, 157);";
  //const host="http://localhost:5000"
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const navigatetoadmin = (e) => {
    e.preventDefault();
    navigate("/Admin_Portal");
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: [e.target.value] });
  };
  return (
    <div className="login-card">
      <div className="card-body">
        <div className="login-container">
          <div className="center">
            <div data-bs-theme="dark"></div>
            <h3 className="mt-3">Login to continue </h3>
          </div>
          <form onSubmit={navigatetoadmin} className="login">
            <div class="mb-3 ">
              {/* <label for="email" class="form-label" placeholder="Email address">
                <div className="email-class">Email address</div>
              </label> */}
              <input
                type="email"
                class="form-control login-email login"
                id="email"
                name="email"
                onChange={onchange}
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              {/* <div id="emailHelp" class="form-text mx-3">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div class="mb-3">
              {/* <label for="password" class="form-label">
                Password
              </label> */}
              <input
                type="password"
                class="form-control login-email"
                name="password"
                onChange={onchange}
                id="password"
                placeholder="password"
              />
            </div>

            <button type="submit" class="btn btn-primary submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
