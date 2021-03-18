import React from 'react';
import { Navbar, Button } from 'react-bootstrap';


const NavBar = () => {

// Event listener and logout logic
window.onload = () => {
   const logOut = document.querySelector(".log-out");
   logOut.addEventListener('click', () => {
       localStorage.clear();
       window.location.reload();
   });
  };

return (

    <>
        <Navbar bg="light" style={{justifyContent: 'space-between'}}>
            <Navbar.Brand href="#home">
                🌎
            </Navbar.Brand>
            <Button variant="outline-danger" className="log-out" >Log Out</Button>{' '}
        </Navbar>
    </>

);
};

export default NavBar;