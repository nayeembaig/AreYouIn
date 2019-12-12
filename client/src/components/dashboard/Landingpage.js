import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../style.css";
import "../../css/searchbar.css";
import "../../css/grid.css";
import "../../css/buttons.css";
import Banner from "../../assets/lunch.png";
import Ishita from "../../img/Ishita.jpg";
import Carousel from "../layout/carousel.js";
import Carousel3 from "../layout/carouselbig";
import Carousel2 from "../layout/carouselvenue";
import Snippet1 from "../../assets/snippet.png";
import Snippet2 from "../../assets/snippet2.png";
import Navbar from "../../components/layout/Navbar";
import party from '../../assets/party.png'
import pool from '../../assets/pool.png'
import italy from '../../assets/italy.png'
const imgArray = [party, pool, italy]


const Events = props => (
  <div class="small-card inline-div mx-1">
    <div class="main">
      <div class="card" style={{border:"none"}}>
        <div class="card_image" style={{border:"none"}}>
          <img src={Snippet1}></img>
        </div>
        <div class="card_content">
          <Link to={"/edit/" + props.events._id}>
            {" "}
            <h2 class="card_title">{props.events.name}</h2>
          </Link>
          {/* <p class="card_text">{props.events.location}</p> */}
          {/* <p class="card_text">{props.events.age}</p> */}
          <p></p>
        </div>
      </div>
    </div>
  </div>
);
const Bloomingtons = props => (
  <div class="small-card inline-div mx-1" style={{padding:"5px"}}>
    <div class="main" style={{height:"150px" ,width:"150px"}}>
      <div class="card" style={{height:"150px" ,width:"150px",border:"none"}}>
        <div class="card_image" style={{height:"150px" ,width:"150px",border:"none"}}>
          <img style={{height:"100px", width:"150px"}} src={imgArray[Math.floor((Math.random() * 2) )]}></img>
        </div>
        <div class="card_content" style={{height:"70px",width:"150px",backgroundColor:"lightblue"}}>
          <Link to={"/edit/" + props.Bloomington._id}>
            {" "}
            <p class="card_title">{props.Bloomington.name}</p>
          </Link>
          {/* <p class="card_text">{props.Bloomington.location}</p> */}
          {/* <p class="card_text">{props.Bloomington.age}</p> */}
          <p></p>
        </div>
      </div>
    </div>
  </div>
);
const Venues = props => (
  <div class="small-card inline-div mx-5">
    <div class="main">
      <div class="card">
        <div class="card_image">
          <img src={Snippet2}></img>/>
        </div>
        <div class="card_content">
          <h2 class="card_title">{props.event.name}</h2>
          <p class="card_text">{props.event.location}</p>
          <p class="card_text">{props.event.age}</p>
          <button class="example_dsearch">
            {" "}
            <Link to={"/edits/" + props.event._id}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: [],
      events: [],
      Bloomington: [],
      location: "Bloomington"
    };
    this.searchfilter2 = this.searchfilter2.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/auth/show")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
      axios
      .put("http://localhost:5000/api/auth/locationbloomington", {
        location: "Bloomington"
      })
      .then(response => {
        this.setState({ Bloomington: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/api/auth/venues")
      .then(response => {
        this.setState({ event: response.data });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/auth/locations")
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchh(e) {
    // console.log(e.target.value)
    this.setState({ searchme: e.target.value });
  }

  searchfilter2(e) {
    this.setState({ location: this.state.location });
    console.log(this.state.location);
    axios
      .put("http://localhost:5000/api/auth/locations", {
        location: this.state.location
      })
      .then(response => {
        this.setState({ events: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  exerciseListb() {
    return this.state.Bloomington.map(currentexercise => {
      return <Bloomingtons Bloomington={currentexercise} key={currentexercise._id} />;
    });
  }
  exerciseList() {
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id} />;
    });
  }

  exerciseLists() {
    return this.state.event.map(currentexercise => {
      return <Venues event={currentexercise} key={currentexercise._id} />;
    });
  }
  exerciseListss() {
    return this.state.event.map(currentexercise => {
      return <Events event={currentexercise} key={currentexercise._id} />;
    });
  }

  render() {
    return (
   <div style={{backgroundColor:"#EFF9FC"}}>
        <Navbar></Navbar>
        <div style={{marginTop:"20px"}}>
          <Carousel3 ></Carousel3>
          <br></br>
          <div style={{padding:"20px"}}>
          <h4 style={{textAlign:"center"}}>Events Near you </h4>
          <Carousel></Carousel>
          <br></br>
          <h4  style={{textAlign:"center"}}>Places to Visit </h4>
          <Carousel2></Carousel2>
          <br></br>
          <h4  style={{textAlign:"center"}}> Bloomington Events</h4>
          <div class="container">
            {this.exerciseListb()}
            </div>
          {/* <br></br> <h4>All Events </h4> */}
          {/* <div class="container">{this.exerciseList()}</div>
          <div class="container">{this.exerciseLists()}</div> */}

</div>
        </div>

      </div>
    );
  }
}
