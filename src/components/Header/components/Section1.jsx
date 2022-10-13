//Section 1 by Dania Haroun !!!
//TopHeader 
import Container from "../../Container"; //my container
import {Row,Col,Carousel,NavDropdown} from "react-bootstrap";

//// start of Section1 function(Top Header) ///

function Section1() {
  return (
    <div className="bg-themecolor">
      <Container>
        <Row className="py-2"> 
        {/* The top header is divided into three columns */}
        {/* the first column contain a text */}
          <Col xxl={3} className="d-xxl-block d-none d-flex justify-content-start">
            <div className="d-flex  align-items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-white iconweight"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <div>
                <span className="text-white  text-overflow-1 mb-0 fontweight">
                  1418 Riverwood Drive, CA 96052, US
                </span>
              </div>
            </div>
          </Col>
          {/* the second column contain a Carousel with 2 items(2 slides) */}
          <Col xxl={6} lg={9} className="d-lg-block d-none d-flex justify-content-center">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item interval={4000}>
                <span className="text-white text-overflow-1 align-items-center">
                  Something you love is now on sale!<a href="/">
                  <span className="fw-bold text-decoration-underline mx-1 text-badge">
                
                    Buy Now !
                  </span></a>
                </span>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <span className="text-white  text-overflow-1 align-items-center">
                  <span className="fw-bold">Welcome to Fastkart! </span>Wrap new
                  offers/gift every signle day on Weekends.
                  <span className="fw-bold">New Coupon Code:...</span>
                </span>
              </Carousel.Item>
            </Carousel>
          </Col>
          {/* the 3rd column contain 2 nav dropdown from bootstrap and each of them have multi navdropdown items */}
          <Col  className="d-block d-flex justify-content-end">
            <div className="d-flex">
            <img src="https://themes.pixelstrap.com/fastkart/assets/images/country/united-states.png" className="img-fluid blur-up lazyloaded flag" alt="img"/>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="English"
              className="fontweight text-badge fw-normal mx-2"
              menuVariant="light" 
            >
              <NavDropdown.Item href="/">            <img src="https://themes.pixelstrap.com/fastkart/assets/images/country/united-kingdom.png" className="img-fluid blur-up lazyloaded flag" alt="img"/>
<span className="fontweight mx-2">English</span></NavDropdown.Item>
              <NavDropdown.Item href="/">
              <img src="https://themes.pixelstrap.com/fastkart/assets/images/country/germany.png" className="img-fluid blur-up lazyloaded flag" alt="img"/>
<span className="fontweight mx-2">Germany</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">         <img src="https://themes.pixelstrap.com/fastkart/assets/images/country/turkish.png" className="img-fluid blur-up lazyloaded flag" alt="img"/>
<span className="fontweight mx-2">Turki</span></NavDropdown.Item>
            
            </NavDropdown>
            <span className="vartline mx-2"></span>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title="USD"
              className="fontweight text-badge fw-normal"
              menuVariant="light" 
            >
              <NavDropdown.Item href="/">    
<span className="fontweight">AUD</span></NavDropdown.Item>
              <NavDropdown.Item href="/">
         
<span className="fontweight">EUR</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/">    
<span className="fontweight">CNY</span></NavDropdown.Item>
            
            </NavDropdown>
        
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section1;//export Section1 function to use it when It needed

///End of Section 1 function (Top Header)
