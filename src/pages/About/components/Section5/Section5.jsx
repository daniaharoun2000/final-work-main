//Section4 Section from About Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { Component }  from 'react';

import "swiper/css";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../../../components";
import './Section5.scss'; //styling for this section
import Ratingabout from './Ratingabout';
////start of Section5 function and export it///

export default function Section5() {
  return (
    //the background is cat color
    < div className="bg-cat">
     <Container>
            <div>
               {/* there is one row with one col */}
              <Row>
                <Col xl={12} className="mb-5">
    {/*Section5 Title */}
       <div className="about-us-title text-center mt-5 mb-4">
                        <h4 className="text-primary">What We Do</h4>
                        <h2>We are Trusted by Clients</h2>
                    </div>
                  <div>
                    {/* swiper */}
                    <Swiper
                      spaceBetween={10}
                      // slidesPerView={1}
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

                        576: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1200: {
                          slidesPerView: 2,
                        },
                        1400: {
                          slidesPerView: 3,
                        }
                      }}
                    >
      {/* in every  swiper slide there is an img with text*/}

                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Eileen R. Chu</h4>
                                        <h6 className="mb-3">Marketing Director</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/1.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Betty J. Turner</h4>
                                        <h6>CTO, Company</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/2.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Alfredo S. Rocha</h4>
                                        <h6>Project Manager</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide> 
                     
                 <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/3.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Donald C. Spurr</h4>
                                        <h6>Sale Agents</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/2.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Alfredo S. Rocha</h4>
                                        <h6>Project Manager</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide> 
                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/2.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Alfredo S. Rocha</h4>
                                        <h6>Project Manager</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                      <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div className="reviewer-box bg-badge Clients-list border-light rounded-3 bg-badge">
                                            <div><Row><Col xl={12}  className="mt-3">
                                  <Ratingabout/>
                                  </Col></Row>
                                   
                                </div>
<div className="ms-3">
                                <h5>Top Quality, Beautiful Location</h5>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div className="reviewer-profile">
                                 
                                   <div className="reviewer-image mb-3 ">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/1.jpg" className="trustedimg aboutimg " alt=""/>
                                    </div>

                                    <div className="reviewer-name mb-3">
                                        <h4 className="text-primary">Betty J. Turner</h4>
                                        <h6>CTO, Company</h6>
                                    </div>
                                    </div>
                                </div>
                            </div>     
                        </div>
                      </SwiperSlide>
                      <div className="slider__controls">
<div className="slider__pagination"></div>
</div> 
                    </Swiper> 
                  </div>
                </Col>
              </Row>
            </div>
            </Container>
          
        
    </div>
  );
}
////End of Section5 function ///
