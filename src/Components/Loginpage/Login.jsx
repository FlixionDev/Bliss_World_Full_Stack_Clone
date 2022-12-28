import "./Login.css";

import {
  Link,
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import Loading from "../Loading/Loading";

function Login() {
  const toast = useToast();
  const initState = { email: "", password: "", confirmpassword: "" };
  const [formData, setFormData] = useState(initState);

  let [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  async function getdata() {
    let res = await fetch("https://blissworld.glitch.me/users");
    let data = await res.json();
    console.log(data);
    setUserdata(data);
  }

  useEffect(() => {
    setLoading(true);
    getdata();
    setTimeout(() => {
      setLoading(false);
      getdata();
    }, 1000);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = formData.email;
    let password = formData.password;
    console.log(email, password);

    let validUser = false;
    let userNotAllowed = false;

    userdata.map(function (ele) {
      if (ele.email == email && ele.password == password) {
        validUser = true;
        let obj={
          email:ele.email,
          name:ele.name,
          address:ele.name
        }
        localStorage.setItem("userdata",JSON.stringify(obj))
        localStorage.setItem("loginStatus",true)
      } else if (ele.email == email) {


        userNotAllowed = true;
        return;
      }
    });
    if (validUser) {
      toast({
        title: "Logged in successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else if (userNotAllowed) {
      setFormData(initState);
      toast({
        title: "Invalid Credentials.",
        description: "Try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "center",
      });
    } else {
      toast({
        title: "user doesnt exist",
        description: "Register First",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setUserdata(initState);
      setTimeout(() => {
        navigate("/signup");
      }, 1000);
    }
  };

  return (
    <main
      className="body login "
      id="main-content"
      role="main"
      data-currency-code="USD"
      style={{ minHeight: "2.225px" }}
    >
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="container">
          <div className="login">
            <div className="login-row account-background">
              <div className="login-common-container">
                <div className="new-customer">
                  <div className="panel" style={{ height: "287.8px" }}>
                    <div className="panel-header">
                      <h3 className="panel-title">oh, Hey.</h3>
                      <p className="new-customer-intro">
                        Did you know? When you create a blissworld.com account,
                        you get access to cool stuff like:
                      </p>
                    </div>

                    <div className="panel-body">
                      <ul className="new-customer-fact-list">
                        <li className="new-customer-fact">
                          - an easy, breezy checkout process
                        </li>
                        <li className="new-customer-fact">
                          - quick access to orders &amp; tracking
                        </li>
                      </ul>
                      <Link to="/signup">
                        <button className="button button--primary buttonfx angleinleft bouncein">
                          REGISTER
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <form className="login-form form" onSubmit={handleSubmit}>
                  <div className="panel" style={{ height: "287.8px" }}>
                    <div className="login-form-header">
                      <h3 className="login-title">Honey, You're Home</h3>
                      <p className="account-sign-block">
                        Welcome back! Sign into your account here:
                      </p>
                    </div>
                    <div className="form-field form-field--input form-field--inputEmail">
                      <input
                        className="form-input"
                        id="login_email"
                        required
                        placeholder="Email Address:"
                        onInput={handleInput}
                        value={formData.email}
                        name="email"
                        size="lg"
                        type="email"
                      />
                    </div>
                    <div className="form-field form-field--input form-field--inputPassword">
                      <input
                        className="form-input"
                        id="login_pass"
                        onInput={handleInput}
                        value={formData.password}
                        name="password"
                        required
                        autoComplete="off"
                        placeholder="Password:"
                        size="lg"
                        type="password"
                      />
                    </div>
                    <div className="form-actions">
                      <div className="buttonfx angleinleft bouncein form-action-sub-block">
                        <input
                          type="submit"
                          className="button button--primary login-btn"
                          value="Sign in"
                        />
                      </div>
                    </div>
                    <a className="forgot-password">Forgot your password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Login;
