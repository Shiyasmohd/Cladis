import React from 'react';
import './Details.css'
import BG from '../../Assets/BG.jpg'
import Call from '../../Assets/call.png'
import Time from '../../Assets/time.png'
import Location from '../../Assets/location.png'
import Donate from '../../Assets/donate.svg'
import Share from '../../Assets/share.svg'

function Details() {
    var sectionStyle={
        backgroundImage: `url(${BG})`
    }
  return(
      <div className="details" style={sectionStyle}>
          <div className="wrap">
              <div className="top-details-wrap">
                  <div className="top-details">
                    <h1>Earthquake - Kerala</h1>
                    <h4>Reported By John Abhraham</h4>
                    <div className="donate">
                        <div className="d-btn">
                            <img src={Donate} />
                            <p>Donate</p>
                        </div>
                        <div className="s-btn">
                        <img src={Share} />
                        <p>Share</p>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="bottom-wrap">
                <div className="bottom-details">
                    <div className="b-details-head">
                        <div className="head-left">
                            <h1>Kerala</h1>
                            <h4>South West Region</h4>
                        </div>
                        <div className="head-right">
                            <div className="contact">
                                <img src={Call}/>
                                <h5>Contact</h5>
                            </div>
                        </div>
                    </div>
                    <div className="b-details-wrap">
                        <div className="b-details">
                            <img src={Location}/>
                            <h5>Location</h5>
                            <h6>41°24'12.2"S 2°10'26.5"W</h6>
                        </div>
                        <div className="b-details b-time">
                            <img src={Time}/>
                            <h5>Time</h5>
                            <h6>26 May, 2021  10.00 AM</h6>
                        </div>
                        <div className="b-details">
                            <img src={Location}/>
                            <h5>Location</h5>
                            <h6>41°24'12.2"S 2°10'26.5"W</h6>
                        </div>
                    </div>
                </div>
              </div>
              
          </div>
      </div>
  )
}

export default Details;
