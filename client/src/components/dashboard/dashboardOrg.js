import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../css/dashb.css";
import Ishita from "../../img/Ishita.jpg";
import Calendar from "../../assets/calendar.png";
import Navbar from "../../components/layout/Navbar";
import Form from "../../assets/formo.png";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import "../../css/buttons.css";
// import '../../css/extraregister.css'
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import ishita from "../../img/Ishita.jpg";
import Kun from "../../img/Kun.jpg";
import Jeremy from "../../img/Jeremy.jpg";
import Nayeemullah from "../../img/Nayeemullah.jpg";
import modal from "./modal";
const imgArray = [ishita, Nayeemullah, Jeremy, Kun];

const DashboardOrg = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar></Navbar>
  
      <div class="welcome__block">
        <div>
          <img src={Ishita} style={{ width: "128px", height: "128px" }} />
          <div>
    
            <h1>Welcome back, {user && user.name}</h1>
            <p>Nice to see you again</p>
          </div>
        </div>
        <div>
          
          <img src={Form} style={{ width: "130px", height: "130px" }}></img>
          <div >
          <Link to="/landingorg" class="btn btn-info">
            <p>Manage Events</p>
            {/* <modal></modal> */}
          </Link>
      <hr></hr>
          <Link to="/Addevent" class="btn btn-info">
            <p>Add an event</p>
          </Link>
          <hr></hr>
          <Link to="/edit-profile" class="btn btn-info" style={{marginLeft:"150px"}}>
            <p>Your Profile</p>
          </Link>
          
          </div>
        </div>
      </div>

      {/* <ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li><a href="#">Menu 1</a></li>
  <li><a href="#">Menu 2</a></li>
  <li><a href="#">Menu 3</a></li>
</ul> */}

      <div class="grid">
        <div class="column lg12">
          <h3 class="section__title">
            Be a good host, Get to know your Guests!
          </h3>
        </div>
        <div class="column lg8 md12 sm12" style={{ paddingLeft: "35px" }}>
          <div class="widget">
            <div class="container row">
              <div
                id="carouselExampleInterval"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-interval="5000">
                    <div class="row">
                      <div class="col-3">
                        <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                          <img
                            style={{ width: "200px", width: "200px" }}
                            src={imgArray[Math.floor(Math.random() * 4)]}
                            class="d-block w-100"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div class="col-3">
                        <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                          <img
                            style={{ width: "200px", width: "200px" }}
                            src={imgArray[Math.floor(Math.random() * 4)]}
                            class="d-block w-100"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div class="col-3">
                        <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                          <img
                            style={{ width: "200px", width: "200px" }}
                            src={imgArray[Math.floor(Math.random() * 4)]}
                            class="d-block w-100"
                            alt="..."
                          />
                        </Link>
                      </div>
                      <div class="col-3">
                        <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                          <img
                            style={{ width: "200px", width: "200px" }}
                            src={imgArray[Math.floor(Math.random() * 4)]}
                            class="d-block w-100"
                            alt="..."
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item" data-interval="3000">
                    <div class="row">
                      <div class="col-3">
                        <img
                          style={{ width: "200px", width: "200px" }}
                          src={imgArray[Math.floor(Math.random() * 4)]}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="col-3">
                        <img
                          style={{ width: "200px", width: "200px" }}
                          src={imgArray[Math.floor(Math.random() * 3)]}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="col-3">
                        <img
                          style={{ width: "200px", width: "200px" }}
                          src={imgArray[Math.floor(Math.random() * 4)]}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="col-3">
                        <img
                          style={{ width: "200px", width: "200px" }}
                          src={imgArray[Math.floor(Math.random() * 4)]}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleInterval"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {profile !== null ? (
          <Fragment>
            <div class=" container column lg4 md12 sm12">
              <div class="widget">
                <ul class="list-group">
                  <li class="list-group-item">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      onClick={() => deleteAccount()}
                    >
                      Delete Account
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div class="column lg4 md12 sm12">
              <div class="widget">
                <div class="title">
                  <h3>Complete your profile</h3>
                </div>
                <div class="list">
                  <ul>
                    <li>
                      {" "}
                      <Link to="/create-profile">
                        <p>Create Your Profile</p>
                      </Link>
                    </li>
                    <li>
                      <button
                        className="example_dsearch"
                        onClick={() => deleteAccount()}
                      >
                        Delete Account
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

DashboardOrg.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  DashboardOrg
);
