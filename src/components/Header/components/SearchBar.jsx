//SearchBar by Dania Haroun !!!
//SearchBar in section 2 from header

import React, { useState } from "react";
import {Button,Form,Modal,InputGroup} from "react-bootstrap";

////start of SearchBar function///

function SearchBar() {
      //I use these hooks to control the Search modal (show & close)

  const [Showsearch, setShowsearch] = useState(false);//  show = false at the begining and it will change when I click in the search icon
  const handleClose = () => setShowsearch(false);//to close modal
  const handleShow = () => setShowsearch(true);//to show modal

  return (
    <div >
        {/* when you click on search svg(icon) , the modal will appear */}
      <Button onClick={handleShow}  variant="badge" className="p-0 m-0">
        {/* search svg (icon): */}
        <span className="pg-gg">
   
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
                        className="text-aa"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                 
        </span>
      </Button>
    
{/* start of Modal */}

      <Modal show={Showsearch} onHide={handleClose}  >
 
        <Modal.Header closeButton>
          <Modal.Title>
            Search
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="text-white text-overflow-1">
                    <InputGroup>
                      <Form.Control
                        placeholder="I'm searching for...."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <Button id="button-addon2" className="searchicon">
                                {/* search svg (icon): */}

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
                          className="text-badge"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </Button>
                    </InputGroup>
                  </div>
        </Modal.Body>
      
      </Modal>
      {/* End of Modal */}

    </div>
  );
}

export default SearchBar;//export the SearchBar function to use it when It needed

////End of the SearchBar function///
