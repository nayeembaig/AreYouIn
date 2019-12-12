import Ishita from "../../img/Ishita.jpg";
import Calendar from "../../assets/calendar.png";
import "../../css/dashb.css";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Navbar from '../../components/layout/Navbar';
import { connect } from "react-redux";
import Form from "../../assets/formo.png";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import axios from "axios";
import "../../css/buttons.css";
import { showevent } from "../../actions/auth";
import "../../style.css";
import "../../css/searchbar.css";
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'

import "../../css/grid.css";
import "../../css/buttons.css";
import Banner from '../../assets/banner.png';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const imgArray = [party, pool, italy]
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
  showevent
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Navbar />
      <div class="">
        <div class="">
          <div class="welcome__block">
            <div>
        
              <img src={Ishita} style={{width:"128px", height:"128px"}} />
              <div>
                <h1>Hey There, {user && user.name}</h1> 
              </div>
            </div>
            <div>
               <img src={Calendar} style={{width:"130px",height:"130px"}}></img>Upcoming Events and Venues
              <p>   <Link to={"/registerevent/" + user._id}>View</Link></p>
              <p>   <Link to={"/waitinglistevent/" + user._id}>WaitingList</Link></p>
             
            </div>
            <div class="calendar">
        <FullCalendar 
        defaultView="dayGridMonth" 
        plugins={[ dayGridPlugin ]} 
        //This needs to be set to the all of the user's registered/up events.
        events={[
            { title: 'Game Day', date: '2019-11-01' },
            { title: 'Music', date: '2019-11-02' }
          ]}
        />
        </div>
          </div>
         
          <div class="grid">
            <div class="column lg12 sm12">
              <div class="advert">
                <button type="button" class="close">
                  <i class="material-icons">&#xE5CD;</i>
                </button>
                <h3 >Explore Experiences</h3>
                <p>Find something great to do!</p>
                <p>
                  {" "}
                  <Link to="/SearchEvents">Browse All</Link>
                </p>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="column lg12">
              <h3 class="section__title">Events You Love  <i class="fas fa-heart fa-lg" style={{color: "#FF1493", width:"25px", height:"25px" }}></i></h3>
            </div>
            <div
              class="column lg8 md12 sm12" 
              style={{ paddingLeft: "35px" }}
             
            >
              <div class="widget">
                <div class="row">
              

                   
                    <div >
                      <div >
                        <div class="row">
                        <div >
                        {profile.user.likes.map(event => {
                      
                      return <Link to="edit/event._id"> <img
                      src={imgArray[Math.floor((Math.random() * 2) )]}
                      // class="d-block w-100"
                      alt="..."
                      style={{width:"200px", height:"200px "}}
                      
                    /></Link>
                      
                    })}
                       </div>
                          
                          
                             
                            {/* </Link>
                          {profile.user.likes.map(event => {
                      
                      return <Link to="edit/event._id">Browse All</Link>
                      
                    })} */}
                            {/* <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                                style={{width:"20px", height:"20px "}}
                                
                              />
                            </Link> */}
                       
                        /
                          {/* <div class="col-3">
                            <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                              />
                            </Link>
                          </div> */}
                          {/* <div class="col-3">
                            <Link to={"/edit/5dacf7dc1c9d440000fd2b34"}>
                              <img
                                src={Ishita}
                                class="d-block w-100"
                                alt="..."
                              />
                            </Link>
                          </div> */}
                        </div>
                      </div>

                      {/* <div class="carousel-item" data-interval="3000">
                        <div class="row">
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                          <div class="col-3">
                            <img src={Ishita} class="d-block w-100" alt="..." />
                          </div>
                        </div>
                      </div> */}
                    </div>
                </div>
              </div>
            </div>
            {profile !== null ? (
              <Fragment>
                <div class="column lg4 md12 sm12">
                  <div class="widget">
                  <div class="title">
                    <img src={Form} style={{width:"50px",height:"50px"}}></img>
    <p>Profile Actions</p>
                    </div>
                    <div class="list">
                    <ul class="list-group">
  {/* <li class="list-group-item"><DashboardActions /></li> */}
  <li class="list-group-item">
  <div>
    <Link to="/edit-profile">
                            <p>Your Profile</p>
                          </Link>
    </div>
    </li>
     
  <li class="list-group-item"> <button type="button" class="btn btn-outline-secondary"   onClick={() => deleteAccount()}>
               Delete Account
            </button></li>
  {/* <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li> */}
</ul>
                    </div>
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
                        <button className="example_dsearch"  onClick={() => deleteAccount()}>
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
        </div>
              
        {/* <button class="example_c" ><Link to={'/registerevent/'+ user._id}>seel detail</Link></button>  */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
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
  Dashboard
);
