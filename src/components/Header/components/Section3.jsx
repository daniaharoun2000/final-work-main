//Section 3 by Dania Haroun !!!
//NavBar
import { NavLink } from "react-router-dom";
import {Row,Col,Navbar,NavDropdown,Dropdown,Button,Modal} from "react-bootstrap";
import React, { useState } from "react";
import Container from "../../Container"; //my container

//// start of Section3 function(NavBar) ///

function Section3() {
        //I use these hooks to control the deal today modal (show & close)

  const [show, setShow] = useState(false);//  show = false at the begining and it will change when I click in the deal today button
  const handleClose = () => setShow(false);//to close modal
  const handleShow = () => setShow(true);//to show modal
  return (
    <div className="bg-white">
      {/* this section will appear on lg &xl &xxl only */}
      <div className="d-none d-lg-block">
        <Container>
         
          <Row className="align-items-center justify-content-between pt-3">
             {/* This section is divided into three columns */}
        {/* the first column contains a Dropdown(All Categories dropdown) from bootstrap that has a Dropdown Menue that has 3 Dropdown items   */}
            <Col xl={2} md={3}><div className="d-flex justify-content-start">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-one"
                  className="AllCategories align-items-center justify-content-center d-flex text-badge"
                >
                      <div className="d-flex justify-content-center align-items-center p-1">
                        {/* this div for lines icon */}
                    <div className="px-1">
              
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
                    className="AllCategoriesIcon"
                  >
                    <line x1="17" y1="10" x2="3" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="17" y1="18" x2="3" y2="18"></line>
                  </svg>
                  </div> 
                  <div className="px-1">
                    {/* the name of dropdown is ->  All Categories*/}
                  <span className="align-items-center justify-content-center d-flex ml-2">
                  
                    All Categories 
                  </span></div></div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/" >
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                      alt=""
                      className="section3lesicon me-2 me-2"
                    />
                   <span className="sectuin3allcatogtext"> Vegetables & Fruit</span> 
                  </Dropdown.Item>
                  <Dropdown.Item href="/">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                      alt=""
                      className="section3lesicon me-2"
                    />
                      <span className="sectuin3allcatogtext">Beverages</span>  
                   
                  </Dropdown.Item>
                  <Dropdown.Item href="/">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                      alt=""
                      className="section3lesicon me-2"
                    />
                      <span className="sectuin3allcatogtext">Meats &amp; Seafood</span>  
                   
                  </Dropdown.Item>
                                  </Dropdown.Menu>
              </Dropdown></div>
            </Col>
                    {/* the 2nd  column is a NavBar */}

            <Col xl={8} md={7} className="d-none d-xl-block">
              {/* Start of NavBar */}
              <Navbar >
                <Navbar.Toggle  />
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className="gap-3 align-items-center justify-content-center navsection3"
                >
                  {/* the navbar column has a row that has 5 columns */}
                  <Row className="align-items-center justify-content-between">
                    {/* the first column has a NavDropdown  */}
                    <Col xl={2}>
                      <NavDropdown id="nav-dropdown-dark-example" title="Home" >
                        {/* inside a navdropdown from bootstrap , we have a row -> column->ul ->li items */}
                        <Row>
                          <Col xl={12}>
                          <div>
                            <ul className="unstyled">
                              {/* 5 li elemnts */}
                              <li>
                                <a href="/" className="dropdownitem">
                                  <img
                                    src="	https://themes.pixelstrap.com/fastkart/assets/images/theme/1.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light">
                                    KartShop
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="  https://themes.pixelstrap.com/fastkart/assets/images/theme/2.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light">
                                    SweetShop
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src="  	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light">
                                    Organic
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <img
                                    src=" 	https://themes.pixelstrap.com/fastkart/assets/images/theme/3.jpg"
                                    alt="logo"
                                    className="imgg imghovering"
                                  />
                                  <span className="text-dania fw-light">
                                    SuperShop
                                  </span>
                                </a>
                              </li>
                              <li >
                                <a href="/" >
                                  <img
                                    src=" https://themes.pixelstrap.com/fastkart/assets/images/theme/5.jpg"
                                    alt="logo"
                                    className="imgg  imghovering"
                                  /> 
                                  <span className="text-dania fw-light">
                                    Slicktech
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          </Col>
                        </Row>
                      </NavDropdown>
                    </Col>
    {/* the 2nd column has a NavDropdown  */}

                    <Col xl={3}>
     {/* inside a navdropdown from bootstrap , we have a row -> column->row->ul ->col->li items and inside each li we have a column*/}
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Mega Menue"
                     
                    >
                     <div className="megabg dropdownsizee">
                        <Row>
                          <Col xl={12} className="p-0 m-0">
                           <Row>
                          <div className="p-0 m-0">
                            <ul className="unstyled" >
                              <li>
                             <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Daily Vegetables
                                  </h5>  
                                        <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Beans &amp; Brinjals
                                  </a>
                     
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Cauliflower
                                  </a>

                                  <a
                                   href="/"
                                    className="dropdown-item"
                                  >
                                    Chilies, Garlic
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Vegetables &amp; Salads
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Gourd, Cucumber
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Herbs &amp; Sprouts
                                  </a>

                                  <a
                                    href="/"
                                    className="dropdown-item"
                                  >
                                    Lettuce &amp; Leafy
                                  </a>
                                </div>
                              </Col>
                              </li><li>
                              <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Baby Tender
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Beans &amp; Brinjals
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Cauliflower
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Chilies, Garlic
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Vegetables &amp; Salads
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Gourd, Cucumber
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Potatoes &amp; Tomatoes
                                  </a>

                                  <a
                                   href="/"
                                    className="dropdown-item"
                                  >
                                    Peas &amp; Corn
                                  </a>
                                </div>
                              </Col></li>
                              <li> 
                                 <Col xl={3}>
                                <div className="dropdown-column col-xl-3">
                                  <h5 className="dropdown-header">
                                    Exotic Vegetables
                                  </h5>
                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Asparagus &amp; Artichokes
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Avocados &amp; Peppers
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Broccoli &amp; Zucchini
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Celery, Fennel &amp; Leeks
                                  </a>

                                  <a
                                    className="dropdown-item"
                                   href="/"
                                  >
                                    Chilies &amp; Lime
                                  </a>
                                </div>
                              </Col></li>
                              {/* here is an empty column to put an background img on it (in Header.scss) */}
<li><Col xl={3}></Col></li>

                            </ul>
                          </div></Row></Col>
                        </Row></div>
                   
                    </NavDropdown>
                  </Col>
                   {/* the 3rd column has a NavDropdown  */}
                    <Col xl={2}>
                      <NavDropdown id="nav-dropdown-dark-example" title="Shop">
                        <NavDropdown.Item
                         href="/"
                          to="/contact"
                          as={NavLink}
                          
                        >
                          Shop Category Slider
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Category Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Banner
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Left Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop List
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Right Sidebar
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Shop Top Filter
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                 {/* the 4th column has a NavDropdown  */}
                    <Col xl={2}>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Product"
                      >
                        <NavDropdown.Item
                         href="/"
                          to="/contact"
                          as={NavLink}
                          
                        >
                          Product 4 Image
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Left Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Buttom Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Left
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Right Thumbnail
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Slider
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Product Sticky
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Col>
                   {/* the 5th column has a row & 3columns  */}
                    <Col>
                      <Row className="align-items-center justify-content-between">
                        {/* column that has a NavDropdown */}
                        <Col xl={4}>
                          <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Blog"
                          >
                            <NavDropdown.Item
                             href="/"
                              to="/contact"
                              as={NavLink}
                              
                            >
                              Blog Detail
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Blog Grid
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Blog List
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                                                {/* column that has a NavDropdown */}

                        <Col xl={4}>
                          <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Pages"
                          >
                            <NavDropdown.Item
                             href="/"
                              to="/contact"
                              as={NavLink}
                              
                            >
                              404
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/about">
                              About Us
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Cart
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Checkout
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Coming Soon
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Compare
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Faq
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Order Success
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Order Tracking
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              OTP
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Search
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              User Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                              Wishlist
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                        {/* this column has a button from bootstrap (Contact) */} 
                        <Col xl={3}>
                          <Button className="contactbuttonsection3">
                            Contact
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Navbar.Collapse>
              </Navbar>
               {/* End of NavBar */}
            </Col>
        {/* the 3rd column contains a Deal Today Button (when you click on it , a Deal Today modal will appear) from bootstrap  */}
        <Col xl={2} md={2}>
              <div className="d-flex justify-content-end">
                {/* Button  */}
                <Button
                  onClick={handleShow}
                  className="m-0 p-0 DealTodaybutton text-center px-1"
                >
                  <div className="d-flex justify-content-center align-items-center p-2">
                    {/* Deal Today icon */}
                    <div className="px-1">
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
                        className="DealTodayIcon mx-1"
                      >
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="px-1">
                      <span className="d-none d-xl-block">
                        Deal Today
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
{/* Start of Deal Today Modal */}
              <Modal show={show} onHide={handleClose} className="modalstyle">
                {/* Modal Header */}
                <Modal.Header closeButton>
                  <Modal.Title>
                    Deal Today
                    <br />
                    <span className="text-aa fw-normal fs-6">
                      Recommended deals for you.
                    </span>
                  </Modal.Title>
                </Modal.Header>
                {/* Modal Body that has a list with 2 items (2 li elemnts) */}
                <Modal.Body className="modalbody">
                  <div>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="rounded-3 border border-white bg-gg d-flex align-items-center justify-content-center">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/10.png"
                            className="w-25 p-3 me-2 ms-2"
                            alt=""
                          />

                          <a href="/" className="text-decoration-none">
                            <h5 className="text-dania">
                              Blended Instant Coffee 50 g Buy 1 Get 1 Free
                            </h5>
                            <h6 className="text-dania">
                              $52.57 <del className="text-dd">57.62</del>
                              <span className="text-aa">500 G</span>
                            </h6>
                          </a>
                        </div>
                      </li>
                      <li >
                        <div className="rounded-3 border border-white bg-pink d-flex gap-1 align-items-center justify-content-center">
                          <img
                            src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/11.png"
                            className="w-25 mt-5 me-2 ms-2 p-3"
                            alt=""
                          />

                          <a href="/" className="text-decoration-none">
                            <h5 className="text-dania">
                              Blended Instant Coffee 50 g Buy 1 Get 1 Free
                            </h5>
                            <h6 className="text-dania">
                              $52.57 <del className="text-dd">57.62</del>
                              <span className="text-aa">500 G</span>
                            </h6>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Modal.Body>
              </Modal>
              {/* End of Deal Today Modal */}

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Section3;//export Section3 function to use it when It needed
//End of Section3 (NavBar)
