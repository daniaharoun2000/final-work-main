//Section 1 from Home Page by Dania Haroun !!!
//this section has 3 images with texts
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container

////start of Section1 function///
function Section1() {
  return (
    <div className="align-items-center">
      <Container>
        <div className="pt-1 pb-4">
                    {/* here we have row with 2 columns */}
        <Row>
          {/* the first col has an img with text */}
          <Col xl={8} md={12} lg={12} className=" ratio_65">
            <div className="position-relative  mt-4 gfg ">
              <div className="textforimage2 position-absolute">
                <div className="textforimage">
                  <h6>
                    Exclusive offer
                    <span className="ms-2 section130percent">30% Off</span>
                  </h6>
                  <h1 className="text-uppercase homecontain mb-2">
                    Stay home &amp; delivered your
                    <span className="text-primary ms-1">Daily Needs</span>
                  </h1>
                  <p className="w-50 d-none d-sm-block text-aa psection1">
                    Vegetables contain many vitamins and minerals that are good
                    for your health.
                  </p>
                  <button
                    className="btn mt-xxl-4 mt-2 text-overflow-1 bg-dd text-white"
                  >
                    Shop Now 
                  </button>
                </div>
              </div>
            </div>
          </Col>
                    {/* the 2nd col has 2 imgs with text  */}

          <Col xl={4}>
            {/* in this col there is a row with 2 cols , in each column there is an img with text */}
            <Row>
              <Col xl={12} md={6} lg={6} >
                <div className="position-relative mt-4 ">
                  <img
                    src=" https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/2.jpg"
                    className="rounded border-light imgtwosectionone w-100 " alt="img"
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h2 className="mt-4 text-dd">
                        45% <span className="text-dania">OFF</span>
                      </h2>
                      <h3 className="text-primary">Nut Collection</h3>
                      <p className="text-aa psection1">
                        We deliver organic vegetables &amp; fruits
                      </p>
                      <button
                    className="btn mt-xxl-4 mt-2 text-overflow-1 bg-dd text-white"
                  >
                    Shop Now 
                  </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={12} md={6} lg={6} >
                <div className="position-relative mt-4">
                  <img
                    src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/3.jpg"
                    className="rounded border-light imgtwosectionone w-100 " alt=""
                  />
                  <div className="textforimage2 position-absolute">
                    <div>
                      <h3 className="mt-4 text-primary fw-bold">
                        Healthy Food
                      </h3>
                      <h4 className="text-dd">Organic Market</h4>
                      <p className="text-aa psection1">
                        Start your daily shopping with some Organic food
                      </p>
                      <button
                    className="btn mt-xxl-4 mt-2 text-overflow-1 bg-dd text-white"
                  >
                    Shop Now 
                  </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row></div>
      </Container>
    </div>
  );
}
export default Section1;//export Section1 function to use it when It needed 
////End of Section1 function///

