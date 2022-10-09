//Section 1 from Footer by Dania Haroun !!!
///Website Features
import {Row,Col} from "react-bootstrap";

//// start of Section 1 from footer ///

function Section1() {
  return (
    <div>
    
        
          {/* this section will appear only on md &lg & xl & xxl  */}
          <div className="d-none d-sm-none d-md-block p-2 ">
            {/* this section is devide into 2 divs , one of them will appear according to display size */}
            {/* the first div will appear in xxl only */}
          <div className="d-xxl-block d-none ">
          <div className="service-contain">   
              <div >    
                {/* here we have a row with 4 columns and in each column we have an img with text */}
                       <Row className="py-4">
                <Col xxl={3} xl={3}>
                  <div className="align-items-center d-flex me-0">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                        className="blur-up lazyloaded"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Every Fresh Products</span>
                      
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Free Delivery For Order Over $50</span>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Daily Mega Discounts</span>
                    </div>
                  </div>
                </Col>
                <Col xxl={3} xl={3}>
                  <div className="service-box justify-content-start d-flex">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Best Price On The Market</span>
                    </div>
                  </div>
                </Col></Row>
              </div>
            </div>
          </div>
            {/* the 2nd div will appear in xl & lg only */}
          <div className="d-lg-block d-xl-block d-xxl-none ">
          
              <div  > 
   {/* here we have 2 rows with 2 columns in each of them  and in each column we have an img with text */}

                 <Row >   
                <Col xl={6} lg={6} md={6}>
                  <div >
                    <div className="d-flex justify-content-start align-items-center">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Every Fresh Products</span>
                    </div>
                  </div></div>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <div >
                      <div className="d-flex justify-content-strat align-items-center">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Free Delivery For Order Over $50</span>
                    </div></div>
                  </div>
                </Col> </Row>
                <Row className=" mt-2">
                <Col  xl={6} lg={6} md={6}>
                  <div >  
                  <div className="d-flex justify-content-start align-items-center">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">
                        

                      <span>Daily Mega Discounts</span>
                    </div>
                  </div></div>
                </Col>
                <Col  xl={6} lg={6} md={6}>
                  <div className="service-box justify-content-start d-flex">  
                  <div className="d-flex justify-content-center align-items-center">
                    <div >
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg"
                      
                        alt=""
                      />
                    </div>

                     <div className="service-detail mx-2">

                      <span>Best Price On The Market</span>
                    </div></div>
                  </div>
                </Col>
      
                </Row>
              </div>
           
          </div></div>
      
      
    </div>
  );
}
export default Section1;//export Section1 function to use it when It needed
//// End of Section 1 ///
