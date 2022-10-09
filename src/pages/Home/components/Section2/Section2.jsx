//Section 2 from Home Page by Dania Haroun !!!
//this section has 4 images with texts
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
////start of Section2 function///

function Section2() {
  return (
    <div >
      <Container>
          <div className="pb-5">
             {/* here we have row with 4 columns m each col has an img with text */}
            <Row className="g-sm-4 g-3">
              <Col xxl={3} lg={4} sm={6} className="firstcol">
                <div className="banner-contain divsection2">
                  <img
                    src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/4.jpg"
                    alt=""
                    className="imagesection2 w-100"
                  />
                  <div className="banner-details">
                    <div className="banner-box"><div className="mx-3">
                      <h6 className="text-dd">5% OFF</h6>
                      <h5 className="me-4">Hot Deals on New Items</h5>
                      <h6 className="text-aa">
                        Daily Essentials Eggs &amp; Dairy
                      </h6>
                    </div></div>
                    <a
                      href="/"
                      className="banner-button text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col xxl={3} lg={4} sm={6}>
                <div className="banner-contain divsection2">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/5.jpg"
                    alt=""
                    className="imagesection2 w-100"
                  />
                  <div className="banner-details">
                    <div className="banner-box"><div className="mx-3">
                      <h6 className="text-dd">5% OFF</h6>
                      <h5 className="me-4">Buy More &amp; Save More</h5>
                      <h6 className="text-aa">Fresh Vegetables</h6>
                    </div></div>
                    <a
                      href="/"
                      className="banner-button text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col xxl={3} lg={4} sm={6}>
                <div className="banner-contain divsection2">
                  <img
                    src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/6.jpg"
                    alt=""
                    className="imagesection2 w-100"
                  />
                  <div className="banner-details">
                    <div className="banner-box"><div className="mx-3">
                      <h6 className="text-dd">5% OFF</h6>
                      <h5 className="me-4">Organic Meat Prepared</h5>
                      <h6 className="text-aa">Delivered to Your Home</h6>
                    </div></div>
                    <a
                      href="/"
                      className="banner-button text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col xxl={3} lg={4} sm={6}>
                <div className="banner-contain divsection2">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/7.jpg"
                    alt=""
                    className="imagesection2 w-100"
                  />
                  <div className="banner-details">
                    <div className="banner-box "><div className="mx-3">
                      <h6 className="text-dd">5% OFF</h6>
                      <h5 className="me-4">Buy More &amp; Save More</h5>
                      <h6 className="text-aa">Nuts &amp; Snacks</h6>
                    </div></div>
                    <a
                      href="/"
                      className="banner-button text-white"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
 
      </Container>
    </div>
  );
}
export default Section2;//export Section2 function to use it when It needed 
////End of Section2 function///

