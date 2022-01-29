import './View.css'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button1 from "@material-ui/core/Button";
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { PostContext } from '../../store/PostContext'
import { FireBaseContext, AuthContext } from '../../store/FireBaseContext';
import ProNav from '../NavBar/NavBar';
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import BG from '../../Assets/BG.jpg'
import Call from '../../Assets/call.png'
import Time from '../../Assets/time.png'
import Location from '../../Assets/location.png'
import Donate from '../../Assets/donate.svg'
import Share from '../../Assets/share.svg'

function View() {
  var sectionStyle={
backgroundImage: (`url(${BG})`)
}
const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  AOS.init();
  const [userDetails, setuserDetails] = useState();
  const {postDetails} = useContext(PostContext);
  const {PostDetails, setPostDetails} = useContext(PostContext);
  const {firebase} = useContext(FireBaseContext);
  useEffect(() => {
    const {userId} = PostDetails;
    firebase.firestore().collection('users').where('id','==',userId)
    .get().then((res)=>{
      res.forEach(doc =>{
        setuserDetails(doc.data());
        console.log(`updated`)
      })
      })
  }, [PostDetails])
  var sectionStyle={
    backgroundImage: `url(${PostDetails.url})`
}
    return (
        // <div className="main">
       
        //     <Row className="view">
        //         <Col lg={6} md={12} sm={12} xs={12} data-aos="fade-left">
        //            <div className="view-img">
        //            <img
        //   src={PostDetails.url}
        //   alt="Product image"
        //   className="Product"
        // />
       
        //            </div>
        //  <div className="btn-5">
        // <a href={`tel: ${PostDetails.Phone}`}>
        // <Button variant="success" ><div className="btn-6"> Contact </div></Button></a>
        // </div>
        //         </Col>
        //         <Col lg={6} md={12} sm={12} xs={12}  data-aos="fade-left">
        //           <div className="text-main">
        //           <div className="t5">Name:</div>
        //           <div className="t6">{PostDetails.name} </div><div className="hr"></div>
        //           <div className="t5">Location:</div>
        //           <div className="t6">{PostDetails.Location}</div><div className="hr"></div>
        //           <div className="t5">Type of incident:</div>
        //           <div className="t6">{PostDetails.type}</div><div className="hr"></div>
        //           <div className="t5">Phone Number:</div>
        //           <div className="t6">{PostDetails.Phone}</div><div className="hr"></div>
        //           <div className="t5">Date:</div>
        //           <div className="t6">{PostDetails.createdAt}</div><div className="hr"></div>
                  
        //          {
        //            PostDetails.location1? 
        //              <>
        //              <div className="t5">Longitude:</div>
        //             <div className="t6">{PostDetails.location1.longitude}</div><div className="hr"></div>
        //             <div className="t5">Latitude:</div>
        //             <div className="t6">{PostDetails.location1.latitude}</div><div className="hr"></div></>: null
        //            };
            
                  
        //        </div> </Col>
        //     </Row>
        //     <div className="t7" data-aos="fade-up">Location:</div>
        //     <div className="map-1"  data-aos="fade-up">
        //      {/* <div className="map-2"> */}
        //        <img  className="map-2" src="https://xmonkeys360.com/wp-content/uploads/2020/02/Googlemap-600x551-1.jpg"></img>
        //      {/* </div> */}
        //     </div>
        // </div>
        <div className="details" style={sectionStyle}>
        <div className="wrap">
            <div className="top-details-wrap">
                <div className="top-details">
                  <h1>{PostDetails.type}</h1>
                  <h4>Reported By {PostDetails.name}</h4>
                  <div className="donate">
                      <div className="d-btn" variant="outlined" color="primary" 
              onClick={handleClickToOpen}>
                          <img src={Donate} />
                          <p>Help</p>
                      </div>
                      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Help"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you Willing to help?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Yes
          </Button>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
                          <h1>{PostDetails.Location}</h1>
                          <h4>{PostDetails.Location}</h4>
                      </div>
                      <div className="head-right">
                          <div className="contact"><a href={`tel: ${PostDetails.Phone}`}>
                              <img src={Call}/>
                              <h5>Call</h5></a>
                          </div>
                      </div>
                  </div>
                  { PostDetails.location1?
                  <div className="b-details-wrap">
                      <div className="b-details">
                        
                         <img src={Location}/>
                          <h5>Longitude</h5>
                          <h6>{PostDetails.location1.longitude}</h6>
                      </div>
                      <div className="b-details b-time">
                          <img src={Time}/>
                          <h5>Latitude</h5>
                          <h6> {PostDetails.location1.latitude}</h6>
                      </div>
                      
                      <div className="b-details">
                          <img src={Location}/>
                          <h5>Time</h5>
                          <h6>26 May, 2021  10.00 AM</h6>
                      </div>
                  </div>:
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
                  
                  }
              </div>
            </div>
            
        </div>
    </div>
    )
}

export default View
