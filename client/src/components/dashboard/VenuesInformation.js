import React, { Component,Fragment } from 'react';
import { Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import StarRatings from 'react-star-ratings';
import { userInfo } from 'os';
import Navbar from "../layout/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStickyNote, faChair } from  '@fortawesome/free-solid-svg-icons';

const Events = props => (
 <div></div>
)
const AnyReactComponent = ({ text }) => 
  <div>{
    <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)'} }>
    <img  
    src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' 
    style={{ height: '50px', width: '50px' }} />
    {text}
    </div>
  }</div>; 
export default class VenuesInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      longitude:0,
      latitude:0,
      type:'',
      information:'',
      events:[],
      Rating:0,
      UsersWhoRated: [],
      RatingRaw:0,
      TimeslotOne:'',
      TimeslotTwo:'',
      TimeslotThree:'',
      Timeslot1:'',
      address:'',
      location:'',
      radito:false
    }
    this.changeRating = this.changeRating.bind(this);
    this.onChange =this.onChange.bind(this);
    this.onSubmit =this.onSubmit.bind(this);
  }

  changeRating( newRating, name ) {
    var UserID = localStorage.user_id

    console.log(this.state.UsersWhoRated)
    if (!(this.state.UsersWhoRated.indexOf(UserID) >= 0)){
      var newRatingRaw = (this.state.RatingRaw + newRating)
      var newRatingRound = (newRatingRaw)/(this.state.UsersWhoRated.length + 1)
      console.log("Rating", newRatingRound)
      axios.post('http://localhost:5000/api/auth/rating',{Rating: newRatingRound, name: this.state.name, NewRater: UserID, TotalRating: newRatingRaw})
      .then(response => {
      console.log(response.data);
      })
      window.location.reload(false);
    }
  }

  componentDidMount() {
         console.log(this.props.match.params.id)
    axios.get('http://localhost:5000/api/auth/venues/'+this.props.match.params.id)
      .then(response => {
        this.setState({ events: response.data,
          name : response.data[0].name,
          longitude:response.data[0].longitude,
          latitude:response.data[0].latitude,
          Rating:response.data[0].Rating,
          UsersWhoRated:response.data[0].UsersWhoRated,
          RatingRaw:response.data[0].RatingRaw,
          address:response.data[0].address,
          TimeslotOne:response.data[0].TimeslotOne,
          TimeslotTwo:response.data[0].TimeslotTwo,
          TimeslotThree:response.data[0].TimeslotThree,
          information:response.data[0].information,
          type:response.data[0].type,
          location:response.data[0].location

        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  exerciseList() {
    console.log(this.state.name)
    console.log(this.state.longitude)
    console.log(this.state.latitude)
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id}/>;
    })
  }
  onChange(e){
    this.setState({Timeslot1: e.target.value})
  }
  onSubmit(e){
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/auth/removetimeslot", {
        name: this.state.name, Timeslot1: this.state.Timeslot1
      })
      this.setState({radito:true});
     
  }
  render() {
    if( this.state.radito === true){
      return  <Redirect to={'/payments/'+this.props.match.params.id} /> 
     }
    return (
      <div>
  
        <Navbar></Navbar>
<div style={{padding: "1rem"}}>
    <div class="event-page-header">
    <div class="event-page-header__poster event-poster-image2">
        <div class="event-poster-image-overlay overlay-gradient-frombottom">
            <div class="event-poster-infobar">
                <ul class="event-wherewhen">
                    <li>
                        <span class="icon icon-geoposition"></span>
                        <span class="data-tag-white">{this.state.location}</span>
                    </li>
                    <li>
                        <p class="countdown-number" style={{color:"white"} }><FontAwesomeIcon icon={faChair} /> </p>
                        <span class="data-tag-white">{this.state.type}</span>
                    </li>
                    <li>
                       
                    </li>
                </ul>

                <div>
                <StarRatings
                  rating={this.state.Rating}
                  starRatedColor="red"
                  changeRating={this.changeRating}
                  numberOfStars={5}
                  starDimension="30px"
                  starSpacing="5px"
                  />
                </div>
                
            </div>
        </div>
    </div> 
    <div class="event-page-header__context">
        <div class="event-page-title">
            <Link class="event-category-tag" to={'/SearchVenue/'}>See Other Venues</Link>
            <h1>{this.state.name}</h1>
        </div>
        <center>
        <div class="event-page-cta">
            <p class="txt-bold">Many Great Times for One Great Place:</p>
            <div class="event-page-cta__action-bar">
            
        <form style={{fontSize:"2rem", color:"white"}} onSubmit={this.onSubmit}>
        <select style={{fontSize:"2rem", padding: ".6rem", height: "40px"}} value={this.state.Timeslot1} className='input2' name='timeslot' onChange={this.onChange}>
        <option value='0'>Select Timeslot</option>
          <option value={this.state.TimeslotOne}>{this.state.TimeslotOne}</option>
          <option value={this.state.TimeslotTwo}>{this.state.TimeslotTwo}</option>
          <option value={this.state.TimeslotThree}>{this.state.TimeslotThree}</option>  
        </select>
        <input class="btn btn-cta" style={{fontSize:"2rem", color:"white"}} href="#" type='submit' value='register'className='bouton' ></input>
        </form>
        <p class="btn2" style={{fontSize:"3rem", color:"white"}}><FontAwesomeIcon icon={faGem} /></p>
            </div>
        </div>
        </center>
    </div> 
</div> 
<div class="event-page-content">
    <div class="event-page-content__description">
        <div class="event-page-description">
        <h2 class="txt-bold" style={{textAlign:"center", color:"black"}}><FontAwesomeIcon icon={faStickyNote} /> Venue Description</h2>
            <p>{this.state.information}
            </p>
        </div>
    </div> 
    
</div>   
  </div>
  
    <center>
        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCjKLovvz4CotGbAeqITJ6yAzCNKkEQrSI' }}
          center={{lat:this.state.latitude,lng:this.state.longitude}}
          defaultZoom={15}

        >
          <AnyReactComponent
            lat={this.state.latitude -.0017}
            lng={this.state.longitude +.001}
            text={this.state.name}
          />
        </GoogleMapReact>
      </div>
      <h3 style={{textAlign:"center", padding: "20px"}}>Local Address: {this.state.address}</h3>
    </center>
    </div>

    )
  }
}