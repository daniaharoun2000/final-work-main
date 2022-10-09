//Fiftypercentoffer Section from Right Part on Home Page by Dania Haroun !!!
//this section is a two imgs as a background , with normal text

import { Row, Col } from "react-bootstrap";
////start of Fiftypercentoffer function///

function Fiftypercentoffer() {
  return (
    <div>
        {/* here is one row with 2 cols */}
        <Row className="pb-5">       
               {/* each col has an img as a bg with text */}

          <Col xl={6} md={6}>
            {/* img */}
            <div className="coverimageonefifty banner-contain mt-1">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/9.jpg"
                className="d-none"
                alt=""
              />
              {/* text */}
              <div className="p-4">
                <div>
                  <h3>50% offer</h3>
                  <h4 className="fw-normal mb-1 text-primary">
                    Testy Mushrooms
                  </h4>
                  <button className="btn mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </Col>
            {/* each col has an img as a bg with text */}

          <Col xl={6} md={6}>
            <div className="coverimagetwofifty banner-contain mt-1">
                          {/* img */}

              <img
                src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/10.jpg"
                className="d-none"
                alt=""
              />
                            {/* text */}

              <div className="p-4">
                <div>
                  <h3>50% offer</h3>
                  <h4 className="fw-normal mb-1 text-primary">
                    Testy Mushrooms
                  </h4>
                  <button className="btn mt-xxl-4 mb-1 text-overflow-1 bg-dd text-white">
                    Shop Now 
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  );
}
export default Fiftypercentoffer;//export Fiftypercentoffer function to use it when It needed 
////End of Fiftypercentoffer function///

