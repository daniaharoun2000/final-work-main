//LocationBar by Dania Haroun !!!
//LocationBar in section 2 from header

import React, { useState } from "react";
import {Button,Badge,Form,Modal,InputGroup,ListGroup} from "react-bootstrap";
import svgg from "../images/angledownicon.svg"; //this is angle down icon

////start of LocationBar function///
function LocationBar() {

  //I use these hooks to control the location modal (show & close)
  const [show, setShow] = useState(false); //  show = false at the begining and it will change when I click in the location button
  const handleClose = () => setShow(false); //to close modal
  const handleShow = () => setShow(true); //to show modal

  return (
    // here I used 2 buttons , each one of them work in specific d size , so the user will just see one of them according to display size
   <div className="text-white align-items-center locationbox p-1">
       <Button onClick={handleShow} className="d-xl-none w-100 justify-content-center" variant="badge">
                {/* location svg (icon): */}

<span className="pg-gg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-aa rounded-3 border border-white"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </span> 
      </Button>


      <Button
        onClick={handleShow}
        className="d-none d-xl-block w-100  h-100 px-0 text-center"
        variant="badge"
      >
                {/* location svg (icon): */}

        <span className="py-2 pg-gg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-aa rounded-3 border border-white"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </span>
        <span className="text-themecolor px-2 align-items-center">
          Your Location
        </span>
        <span>
          <img src={svgg} className="text-aa angleicon" alt="img"/>
        </span>
      </Button>

{/* start of Modal */}
      <Modal show={show} onHide={handleClose}  >
 
        <Modal.Header closeButton>
          <Modal.Title>
            Choose your Delivery Location
            <br />
            <span className="text-aa fw-normal fs-6">
              Enter your address and we will specify the offer for your area.
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          {/* here in the Modal body I used a Form & Listgroup from bootstrap*/}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="bg-gg"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Your Area"
               
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
             
            >
              <Form.Label className="text-aa fw-normal fs-6">
                Select a Location
              </Form.Label>
              <ListGroup className="overflow-auto">
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Alabama
                  <Badge bg="themecolor" pill>
                    Min: $130
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Arizona 
                  <Badge bg="themecolor" pill>
                    Min: $150
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  California
                  <Badge bg="themecolor" pill>
                    Min: $110
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Colorado
                  <Badge bg="themecolor" pill>
                    Min: $140
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  className="d-flex justify-content-between align-items-start"
                >
                  Florida
                  <Badge bg="themecolor" pill>
                    Min: $160
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
      
      </Modal>
      {/* End of Modal  */}
    </div>
  );
}

export default LocationBar;//export the LocationBar function to use it when It needed

////End of the LocationBar function///
