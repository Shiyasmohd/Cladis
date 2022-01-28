import React from 'react';
import './Details.css'
import BG from '../../Assets/BG.jpg'

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
                  </div>
              </div>
              <div className="bottom-wrap">
                <div className="bottom-details">
                </div>
              </div>
              
          </div>
      </div>
  )
}

export default Details;
