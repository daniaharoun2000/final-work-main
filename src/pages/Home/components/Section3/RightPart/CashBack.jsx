//CashBack Section from Right Part on Home Page by Dania Haroun !!!
//this section is an img as a background , with normal text
import { Col, Row } from "react-bootstrap";
////start of CashBack function///

function CashBack() {
  return (
    <div >
        {/* here is a row with one col */}
        <Row className="pb-5">
          <Col xl={12}>
            <div className="imgbootstrap position-relative cashboxx">
        
{/* imgbootstrap is an img background */}
              <div className="textforimage2 mt-1 align-items-center justify-content-center d-flex">
                <div>
                  {/* cash details */}
                  <h3 className="fw-bold mb-2 cash-details text-overflow-1 text-badge">
                    Get $3 Cashback! Min Order of $30
                  </h3>
                  <div className="d-flex justify-content-center align-items-center">
                    {/* cash code */}
                    <h6 className="coupon-code py-2 px-2 text-badge">
                      Use Code : GROCERY1920
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  );
}
export default CashBack;//export CashBack function to use it when It needed 
////End of CashBack function///
