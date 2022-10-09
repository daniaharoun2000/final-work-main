//Offcanvas by Dania Haroun !!!
//Offcanvas Navbar

import React, { useState } from 'react';
import {Button,Offcanvas} from 'react-bootstrap';
import lines from '../images/lines.svg';
////start of Offcanvas Navbar function///

function OffcanvasNavbar() {
    //I use these hooks to control the Offcanvas nav  (show & close)

  const [show, setShow] = useState(false); //  show = false at the begining and it will change when I click in the Offcanvas nav button
  const handleClose = () => setShow(false);//to close Offcanvas nav
  const handleShow = () => setShow(true);//to show Offcanvas nav

  return (
    <>
            {/* when you click on lines img(icon) , the Offcanvas nav will appear */}

      <Button variant="badge" onClick={handleShow} className="d-xl-none d-inline">
        <img src={lines}  alt="logo"
              width={15}
             />
      </Button>
{/* start of Offcanvas */}

      <Offcanvas show={show} onHide={handleClose} className="p-3 w-50">
        <Offcanvas.Header closeButton className='shadow-sm zindex-fixed-nav'>
          <Offcanvas.Title><h5 className='text-primary'>Menu</h5></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     {/* in the Offcanvas body , we have list and every li element is a nav item */}
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

           <li className="nav-item">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Home
            </a>   </li> 
         <li className="nav-item">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Shop
            </a>   </li>   <li className="nav-item">
            <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Product
            </a>   </li>      <li className="nav-item">
             <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Blog
            </a>   
            </li>       <li className="nav-item"><a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Pages
            </a>   </li>      <li className="nav-item"> <a  href="/" role="button"  aria-expanded="false" className='nav-link text-decoration-none text-aa'>
            Contact
            </a>   </li> 
         
    
        </ul>
       
      
        </Offcanvas.Body>
      </Offcanvas>
      {/* End of Offcanvas */}

    </>
  );
}

export default OffcanvasNavbar;//export the Offcanvas Navbar function to use it when It needed

///End of Offcanvas Navbar function
