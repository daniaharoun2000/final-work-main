//Section 1 from About Page by Dania Haroun !!!
//this section has a page sequence (home->about)
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
import './Section2.scss'; //styling for this section
////start of Section2 function///
function Section2() {
  return (
    // aboutrowhover for hover the div
    <div>
      <Container>
        <div>
       
            <div className="row gx-xl-5 gy-xl-0 g-3 ratio_148 fresh-vegetable-section section-lg-space">
                <div className="col-xl-6 col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="fresh-image-2">
                                <div className="bg-size imgonebg">
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="fresh-image">
                                <div className="bg-size imgtwobg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-12">
                    <div className="fresh-contain p-center-left">
                        <div>
                            <div className="review-title">
                                <h5>About Us</h5>
                                <h2>We make Organic Food In Market</h2>
                            </div>

                            <div className="delivery-list">
                                <p className="text-gray">Just a few seconds to measure your body temperature. Up to 5
                                    users! The battery lasts up to 2 years. There are many variations of passages of
                                    Lorem Ipsum available.We started in 2019 and haven't stopped smashing it since. A
                                    global brand that doesn't sleep, we are 24/7 and always bringing something new with
                                    over 100 new products dropping on the monhtly, bringing you the latest looks for
                                    less.</p>

                                <ul className="delivery-box">
                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="	https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Only fresh foods</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/delivery.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Free delivery for all orders</h5>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="delivery-box">
                                            <div className="delivery-icon">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/leaf.svg"  alt=""/>
                                            </div>

                                            <div className="delivery-detail">
                                                <h5 className="text">Only fresh foods</h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
          
      
   
      </Container>
    </div>
  );
}
export default Section2;//export Section2 function to use it when It needed 
////End of Section2 function///

