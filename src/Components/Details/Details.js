import React from 'react';
import './Details.css'
import BG from '../../Assets/BG.jpg'
import Call from '../../Assets/call.png'
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
                </div>
              </div>
              
          </div>
      </div>
  )
}

export default Details;
