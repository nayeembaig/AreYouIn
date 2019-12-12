import React, { Component,Fragment } from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import '../../css/lookup.css';
import '../../css/buttons.css';
import "../../App.css";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStickyNote, faChair } from  '@fortawesome/free-solid-svg-icons';
import Navbar from "../layout/Navbar";

const AA =props =>(props.events.name);

const AnyReactComponent = ({ text }) => 
  <div>{
    <div style={{ position: 'absolute', transform: 'translate(-50%, -50%)'} }>
    <img  
    src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' 
    style={{ height: '50px', width: '50px' }} />
    {text}
    </div>
  }</div>; 


const Events = props => (
  <div>
       
  </div>
)
export default class EventInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      type:'',
      information:'',
      longitude:0,
      latitude:0,
      events:[],
      capacity:5,
      Date: new Date(),
      showmessage:true,
      reditto:false,
      disabled1:false,
      StringDates: []

    }
    this.onsubmit= this.onsubmit.bind(this);
  }

  componentDidMount() {
         console.log(this.props.match.params.id)
    axios.get('http://localhost:5000/api/auth/show/'+this.props.match.params.id)
      .then(response => {
        this.setState({ events: response.data,
          name : response.data[0].name,
          longitude:response.data[0].longitude,
          latitude:response.data[0].latitude,
          capacity:response.data[0].Capacity,
          Date:response.data[0].Date,
          information:response.data[0].information,
          Details:response.data[0].Details,
          pay:response.data[0].pay,
          address:response.data[0].address,
          StringDates:response.data[0].StringDates
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  disabledfunction(){
    if(this.state.capacity ===0){
      this.setState({
        disabled1:true,
        showmessage:false
      })
    }
    }
  
 
  exerciseList() {
    console.log(this.state.capacity)
    return this.state.events.map(currentexercise => {
      return <Events events={currentexercise} key={currentexercise._id}/>;
    })
  }
  
  onsubmit(e){
    e.preventDefault();
   
    axios.post('http://localhost:5000/api/auth/capacity',{capacity: this.state.capacity -1,name:this.state.name})
    .then(response => {
     console.log(response.data);
     
    })
    .catch((error) => {
      console.log(error);
    })
 
     
  }
  reg(){
    if (this.state.pay == 'paid')
      return <button class="btn btn-cta" href="#"onClick ={this.onsubmit} disabled={this.state.disabled1}><Link to={'/payment/'+ this.props.match.params.id}>Register</Link></button>
    else
      return <button class="btn btn-cta" href="#"onClick ={this.onsubmit} disabled={this.state.disabled1}><Link to={'/payment/'+ this.props.match.params.id}>Register</Link></button>

  }
  render() {
    
    return (
      <div>
          {/*this.disabledfunction()*/}
          

          <Navbar></Navbar>
        <div style={{padding: "1rem"}}>
    <div class="event-page-header">
    <div class="event-page-header__poster event-poster-image">
        <div class="event-poster-image-overlay overlay-gradient-frombottom">
            <div class="event-poster-infobar">
                <ul class="event-wherewhen">
                    <li>
                        <span class="icon icon-geoposition"></span>
                        <span class="data-tag-white">{this.state.address}</span>
                    </li>
                    <li>
                        <span class="icon icon-calendar"></span>
                        <span class="data-tag-white">{this.state.StringDates[0]}</span>
                    </li>
                    <li>
                        <span class="icon icon-clock"></span>
                        <span class="data-tag-white">{this.state.StringDates[1]}</span>
                    </li>
                </ul>
                
            </div>
        </div>
    </div> 
    <div class="event-page-header__context">
        <div class="event-page-title">
            <Link class="event-category-tag" to={'/SearchEvents/'}>See Other Events</Link>
            <h1>{this.state.name}</h1>
        </div>
        <div class="event-page-cta">
            <p class="txt-bold">What's in Store for You:</p> <h2>{this.state.information}</h2>
            <div class="event-page-cta__action-bar">
            <p hidden ={this.state.showmessage}>this event is full, you will be put in waitlist if you still want Register for this event </p>
            {this.reg()} 
        <button class="btn btn-cta" href="#" ><Link to={'/cancel/'+ this.props.match.params.id}>cancel</Link></button>  <span class="data-tag data-tag-white">{this.state.pay} </span>
        <p class="btn2" style={{fontSize:"3rem", color:"white"}}><FontAwesomeIcon icon={faGem} /></p>
            </div>
        </div>
    </div> 
</div> 
<div class="event-page-content">
    <div class="event-page-content__description">
        <div class="event-page-description">
        <h2 class="txt-bold" style={{textAlign:"center", color:"black"}}><FontAwesomeIcon icon={faStickyNote} /> Event Description</h2>
            <p>{this.state.Details}
            </p>
        </div>
    </div> 
    <div class="event-page-content__hype">
     
         <GoogleMapReact
           bootstrapURLKeys={{
             key: "AIzaSyCjKLovvz4CotGbAeqITJ6yAzCNKkEQrSI"
           }}
           center={{ lat: this.state.latitude, lng: this.state.longitude }}
           defaultZoom={15}
         >
           <AnyReactComponent
             lat={this.state.latitude - 0.0017}
             lng={this.state.longitude + 0.001}
             text={this.state.name}
           />
         </GoogleMapReact>
         
       
                    
                
                
            
        
        <div class="event-recommendations">
            
        </div>
    </div> 
</div>   
  </div>
  <center>
  <h3 style={{textAlign:"center", padding: "20px"}}>Local Address: {this.state.address}</h3>
  <p class="countdown-number" style={{color:"black"} }><FontAwesomeIcon icon={faChair} /> </p>
                    <span class="countdown-number">Event Capacity: {this.state.capacity}</span>
     </center>
     
  </div> 
    )
  }
}
