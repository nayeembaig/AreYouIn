import Slider from "react-slick";
import React, { Component } from "react";   
import Item1 from "../../assets/big1.png"
import Item2 from "../../assets/big2.png"
import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.png";
import poster3 from "../../assets/poster3.png";
import poster5 from "../../assets/poster5.png";
import poster6 from "../../assets/poster6.png";
import poster7 from "../../assets/poster7.png";
import poster8 from "../../assets/poster8.png";
export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div>
       
          <Slider {...settings}>
            <div>
            <img
                                src={poster1}
                                style={{width:"600px",borderRadius:"20px",marginLeft:"10px",paddingRight:"40px",paddingLeft:"40px" ,marginRight:"10px", objectFit: 'cover',borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster5}
                                style={{width:"600px",borderRadius:"20px",marginLeft:"10px",paddingRight:"40px",paddingLeft:"40px" ,marginRight:"10px", objectFit: 'cover',borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster6}
                                style={{width:"600px",borderRadius:"20px",marginLeft:"10px",paddingRight:"40px",paddingLeft:"40px" ,marginRight:"10px", objectFit: 'cover',borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster7}
                                style={{width:"600px",borderRadius:"20px",marginLeft:"10px",paddingRight:"40px",paddingLeft:"40px" ,marginRight:"10px", objectFit: 'cover',borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster8}
                                style={{width:"600px",borderRadius:"20px",marginLeft:"10px",paddingRight:"40px",paddingLeft:"40px" ,marginRight:"10px", objectFit: 'cover',borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster2}
                                style={{width:"600px",borderRadius:"20px",paddingRight:"40px",paddingLeft:"40px" , objectFit: 'cover', borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>
            <img
                                src={poster3}
                                style={{width:"600px",borderRadius:"20px", paddingRight:"40px",paddingLeft:"40px" ,objectFit: 'cover', borderRadius:"10px"}}
                                alt="..."
                              />
            </div>
            <div>

            </div>
          
          </Slider>
        </div>
      );
    }
  }