//Section6 Section from About Page by Dania Haroun !!!
//Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../../../components";
import React, { Component }  from 'react';

////start of Section6 function and export it///

export default function Section6() {
  
  return (
    <div>
        <div>
           <Container>
                          {/* there is one row with one col */}
   <Row className="mb-5">
                <Col xl={12} >
                               {/* Section6 Swiper Title */}

                               <div className="about-us-title text-center mt-4 mb-4">
                        <h4 className="text-primary">Our Blog</h4>
                        <h2>Our Latest Blog</h2>
                    </div>
                    {/* here we have 2 divs , one of them will appear according to display size */}
                  {/* first div will appear in xl & lg & md & xs only*/}
                        {/* swiper */}
                        <div className="d-lg-block d-xxl-none d-xl-block d-md-block d-xs-block">

                  <Swiper
                  
                    spaceBetween={40}
                    // slidesPerView={7}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
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

                       576: {
                            slidesPerView:2,
                          },
                   
                  
                     768:{
                        slidesPerView: 2,

                     },
                     992:{
                      slidesPerView: 3,

                   },
                      1440: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                            {/* in every  swiper slide there is an img with text*/}

                    <SwiperSlide >
                            <div >
                              
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/2.jpg" className="img-fluid rounded-1 w-100 aboutimg " alt=""/>
                              
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Soda Brand</h6>
                                    <h5 className="mt-2 text-primary">Soda 500ml - 20% OFF</h5>
                                </a>
                            </div>
                       
                    </SwiperSlide>
                    <SwiperSlide >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/5.jpg" className="img-fluid rounded-1 w-100 aboutimg " alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Milk Brand</h6>
                                    <h5 className="mt-2 text-primary">Fresh Milk</h5>
                                </a>
                            </div>
                       
                    </SwiperSlide>
                     <SwiperSlide >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/1.jpg" className="img-fluid rounded-1 w-100 aboutimg " alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Farmart</h6>
                                    <h5 className="mt-2 text-primary">Fresh Meat Saugage</h5>
                                </a>
                            </div>
                       
                    </SwiperSlide> 
                    <SwiperSlide >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/3.jpg" className="img-fluid rounded-1 w-100 aboutimg " alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Pepsi Brand</h6>
                                    <h5 className="mt-2 text-primary">Pepsi 500ml - 20% OFF</h5>
                                </a>
                            </div>
                       
                    </SwiperSlide>
                    <div className="slider__controls">

<div className="slider__pagination"></div>


</div>
                  </Swiper>
              </div>
                 {/* 2nd div will appear in xxl */}
                 <div className="d-none d-xxl-block">
                    <div className="best-selling-slider product-wrapper wow fadeInUp slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div className="slick-track">
                           {/* react gutters from bootstrap */}
{/* in xxl -> show 4 cols*/}
     
                          <Row className="row-cols-xxl-4">
                            {/* here there is 3 cols */}
                            <Col >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/1.jpg" className="img-fluid w-100 aboutimg  rounded-1 " alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Farmart</h6>
                                    <h5 className="mt-2 text-primary">Fresh Meat Saugage</h5>
                                </a>
                            </div>
                       
                            </Col>
                            <Col >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/2.jpg" className="img-fluid w-100 aboutimg  rounded-1" alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Soda Brand</h6>
                                    <h5 className="mt-2 text-primary">Soda 500ml - 20% OFF</h5>
                                </a>
                            </div>
                       
                            </Col>
                            <Col >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/5.jpg" className="img-fluid w-100 aboutimg  rounded-1" alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Milk Brand</h6>
                                    <h5 className="mt-2 text-primary">Fresh Milk</h5>
                                </a>
                            </div>
                       
                            </Col>
                            <Col >
                            <div >
                                <div >
                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/veg-2/blog/3.jpg" className="img-fluid w-100 aboutimg  rounded-1" alt=""/>
                                </div>
                                <a href="blog-detail.html" className="blog-detail mt-3 text-decoration-none  d-block" tabindex="0">
                                    <h6 className="mt-2 text-gray">Juice Brand</h6>
                                    <h5 className="mt-2 text-primary">Fresh Juice -30% OFF</h5>
                                </a>
                            </div>
                       
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              </Container>
            </div>
       
    </div>
  );
}
////End of Section6 function ///
