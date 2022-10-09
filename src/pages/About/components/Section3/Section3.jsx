//Our Best Seller Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../../../components";
import './Section3.scss'; //styling for this section

////start of Section3 function and export it///

export default function Section3() {
  return (
    < div className="bg-cat">
     <Container>
            <div>
               {/* there is one row with one col */}
              <Row className="pb-5">
                <Col xl={12}>
                                                                   {/*Our Best Seller Title */}

                                                                   <div className="about-us-title text-center mt-5 mb-4">
                        <h4 className="text-primary">What We Do</h4>
                        <h2>We are Trusted by Clients</h2>
                    </div>

                  {/* here we have 2 divs , one of them will appear according to display size */}
                  {/* first div will appear in xl & md & xs only*/}
                  <div className="d-lg-none d-xxl-none d-xl-block d-md-block d-xs-block">
                    {/* swiper */}
                    <Swiper
                    
                      spaceBetween={10}
                       slidesPerView={3}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                      modules={[Autoplay, Pagination, Navigation, Lazy]}
                      autoplay={{ delay: 2000 }}
                      lazy={true}
                      pagination={{
                        el: '.slider__pagination',
                        clickable: true,
                      }}
                      
                      loop={true}
                      breakpoints={{
              // here I specified n of slides according to screen size

                        320: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
      {/* in every  swiper slide there is an img with text*/}

                      <SwiperSlide>
                        <div className="slick-slide slick-current slick-active">
                        <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/work.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>10</h2>
                                <h4>Business Years</h4>
                                <p>A coffee shop is a small business that sells coffee, pastries, and other morning
                                    goods. There are many different types of coffee shops around the world.</p>
                            </div>
                                </li>

                               
                              </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                              <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/buy.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>80 k +</h2>
                                <h4>Products Sales</h4>
                                <p>Some coffee shops have a seating area, while some just have a spot to order and then
                                    go somewhere else to sit down. The coffee shop that I am going to.</p>
                            </div>
                                </li>

                               
                              </ul>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="2"
                          aria-hidden="false"
                        >
                                                <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/user.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>90 %</h2>
                                <h4>Happy Customers</h4>
                                <p>My goal for this coffee shop is to be able to get a coffee and get on with my day.
                                    It's a Thursday morning and I am rushing between meetings.</p>
                            </div>
                                </li>

                               
                              </ul>
                        </div>
                      </SwiperSlide>
                      <div className="slider__controls">

<div className="slider__pagination"></div>


</div>  
                    </Swiper>
                    
                  </div>

                  {/* 2nd div will appear in xxl & lg only */}
                  <div className="d-none d-xxl-block d-xl-none d-lg-block d-md-none">
                    <div className="best-selling-slider product-wrapper wow fadeInUp slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                           {/* react gutters from bootstrap */}
{/* in xxl -> show 3 cols  , in xl -> show 2 cols ,in lg -> show 3 cols , in md -> show 2 cols ,in sm -> show 1 cols ,  in xs -> show 1 cols*/}
     
                          <Row className="row-cols-xxl-3 row-cols-xl-2 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
                            {/* here there is 3 cols */}
                            <Col >
                            {/* in every col there is ul and li elemnts */}
                              <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/buy.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>80 k +</h2>
                                <h4>Products Sales</h4>
                                <p>Some coffee shops have a seating area, while some just have a spot to order and then
                                    go somewhere else to sit down. The coffee shop that I am going to.</p>
                            </div>
                                </li>

                               
                              </ul>
                            </Col>
                            <Col>
                                                        {/* in every col there is ul and li elemnts */}

                                                        <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/work.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>10</h2>
                                <h4>Business Years</h4>
                                <p>A coffee shop is a small business that sells coffee, pastries, and other morning
                                    goods. There are many different types of coffee shops around the world.</p>
                            </div>
                                </li>

                               
                              </ul>
                            </Col>
                            <Col>
                                                        {/* in every col there is ul and li elemnts */}

                                                        <ul className="product-list p-3 border-light rounded-3 bg-badge">
                                {/* in every li elemnt there is an img & text */}
                                <li className="mb-4 mt-2">
                                <div className="clint-contain">
                                <div className="client-icon">
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/3/user.svg" className="trustedimg" alt=""/>
                                </div>
                                <h2>90 %</h2>
                                <h4>Happy Customers</h4>
                                <p>My goal for this coffee shop is to be able to get a coffee and get on with my day.
                                    It's a Thursday morning and I am rushing between meetings.</p>
                            </div>
                                </li>

                               
                              </ul>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            </Container>
          
        
    </div>
  );
}
////End of Section3 function ///
