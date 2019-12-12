import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import "../../css/forms.css";
// import '../../css/buttons.css'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    if (localStorage.type_of_user === "Organizer") {
      return <Redirect to="/dashboardOrg" />;
    } else {
      console.log(localStorage.type_of_user);
      return <Redirect to="/dashboard" />;
    }
  }

  return (
    <Fragment>
      <section className="formslayout2">
        {/* <div className='dark-overlay'> */}
        <div className="formslayout2-inner">
          <div class="page">
            <div class="login">
              <div class="formulaire">
                <h1
                  class="text-center"
                  style={{ marginTop: "20px", marginLeft: "80px" }}
                >
                  Login
                </h1>

                <form onSubmit={e => onSubmit(e)}>
                  <input
                    style={{ color:"black",height: "35px", widht: "90%" }}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />

                  <input
                    style={{ height: "35px" ,marginTop:"20px" }}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    minLength="6"
                  />

                  <input
                    type="submit"
                    style={{
                      height: "35px",
                      marginTop:"20px",
                      width: "30%",
                      backgroundColor: "#17a2b8"
                    }}
                    className="bouton"
                    value="Login"
                  />
                  <p className="forgot">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                  </p>
                  <p className="forgot">
                    Forget your password <Link to="/Sende">Reset Password</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
