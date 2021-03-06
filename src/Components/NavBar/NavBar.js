import React from 'react'
import { Navbar ,Container,Offcanvas ,Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './NavBar.css'
import { AuthContext , FireBaseContext} from '../../store/FireBaseContext';
import { useHistory } from 'react-router';
import { useContext, useState } from 'react';
import Logo from '../../Assets/logo.png'
function ProNav() {
  const history = useHistory();
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FireBaseContext);
  // const HandleClick=()=>{
  //   firebase.auth().signOut().then(() => {
  //     history.push("/login")
  //   }).catch((error) => {
  //     console.log(`Error Occured. Could'nt SignOut`)
  //   });
  //   history.push("/signup");
  // }
    return (
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><div className="n1"><img src={Logo} />CLADIS</div></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
   <Nav className="nav1 nbg" >
    <Nav.Link to="/details"onClick={()=>history.push('/details')} className='nbg'>HOME</Nav.Link>
     <Nav.Link eventKey={2}  to="myproducts" onClick={()=>history.push('/myproducts')}>
       YOUR CASES
       </Nav.Link>
         {user?
        <Nav.Link to="/signup" onClick={
         ()=>{
          firebase.auth().signOut().then(() => {
              history.push("/login")
               }).catch((error) => {
                 console.log(`Error Occured. Could'nt SignOut`)
               });
              //  history.push("/signup");
         }
        }>Log_Out</Nav.Link>:
        <Nav.Link to="/login" onClick={()=>history.push('/login')}>LOGIN</Nav.Link>}
        {user?
        <Nav.Link to="#" ><div className="s1">{user.displayName}</div></Nav.Link>:
        <Nav.Link to="/signup"  onClick={()=>history.push('/signup')}><div className="s1"></div></Nav.Link>}
        <Nav.Link to="#" >ABOUT</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default ProNav
