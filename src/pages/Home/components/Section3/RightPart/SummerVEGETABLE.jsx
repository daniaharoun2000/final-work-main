//SummerVEGETABLE Section from Right Part on Home Page by Dania Haroun !!!
//this section is an img as a background , with normal text

import { Col, Row } from "react-bootstrap";

////start of SummerVEGETABLE function///

function SummerVEGETABLE() {
  return (
    <div >

            {/* here is a row with one col */}

    <Row className="pb-5">
      <Col xl={12}>
        {/* img */}
                        <div className="imgsummerveg position-relative d-flex justify-content-center align-items-center" >
                            <div className="textforimage2 mt-1 align-items-center justify-content-center d-flex">
                                <div >
                                  {/* text */}
                                    <h6 className="ls-expanded text-themecolor mb-1 align-items-center justify-content-center d-flex">SUMMER</h6>
                                    <h2 className="banner-title">VEGETABLE</h2>
                                    <h5 className="lh-sm mx-auto mt-1  align-items-center justify-content-center d-flex text-aa">Save up to 5% OFF</h5>
                                  {/* button */}
                                    <button
                    className="mt-2 btn bg-dd text-white m-auto"
                  >
                    Shop Now 
                  </button>    </div>
                            </div>
               
                    </div></Col></Row>
   </div>
  );
}
export default  SummerVEGETABLE;//export SummerVEGETABLE function to use it when It needed 
////End of SummerVEGETABLE function///
