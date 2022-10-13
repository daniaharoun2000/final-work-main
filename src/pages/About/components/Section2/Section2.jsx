//Section2 Section from About Page by Dania Haroun !!!
//this section has a page sequence (home->about)
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
import './Section2.scss'; //styling for this section

////start of Section2 function///
function Section2() {
  return (
    <div>
      <Container>
        {/* here is 1 Row with 2 cols */}
            <Row className="row gx-xl-5 gy-xl-0 g-3">
                {/* first col has one row with 2 cols with 2 imgs */}
                <Col xl={6} xs={12}>
                  
                    <Row>
                        <Col xl={6} lg={6} xs={6}>
                            {/* first img */}
                            <div className="fresh-image-2">
                                <div className="bg-size">
                                </div>
                            </div>
                        </Col>

                        <Col xl={6} lg={6} xs={6}>
                             {/* 2nd img */}
                            <div className="fresh-image">
                                <div className="bg-size">
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                 {/* 2nd col , here is some text */}
                <Col xl={6} xs={12}>
                    <div className="fresh-contain p-center-left">
                        <div>
                            {/* about title */}
                            <div className="review-title">
                                <h5>About Us</h5>
                                <h2>We make Organic Food In Market</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-aa">Just a few seconds to measure your body temperature. Up to 5
                                    users! The battery lasts up to 2 years. There are many variations of passages of
                                    Lorem Ipsum available.We started in 2019 and haven't stopped smashing it since. A
                                    global brand that doesn't sleep, we are 24/7 and always bringing something new with
                                    over 100 new products dropping on the monhtly, bringing you the latest looks for
                                    less.</p>

{/* list */}
                                <ul className="delivery-box p-0">
                                    {/* every li element has an img with text */}
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="	https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h6>Free delivery for all orders</h6>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h6>Only fresh foods</h6>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h6>Free delivery for all orders</h6>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h6>Only fresh foods</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section2;//export Section2 function to use it when It needed 
////End of Section2 function///

