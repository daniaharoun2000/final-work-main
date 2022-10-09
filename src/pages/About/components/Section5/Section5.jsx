//Our Best Seller Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
import { Container } from "../../../../components";
import './Section5.scss'; //styling for this section
import Ratingabout from "./Ratingabout";

////start of Section4 function and export it///

export default function Section4() {
  return (
    < div className="bg-cat">
     <Container>
            <div>
               {/* there is one row with one col */}
              <Row className="pb-5">
                <Col xl={12}>
                                                                   {/*Our Best Seller Title */}

                                                                   <div className="about-us-title text-center mt-5 mb-4">
                                                                   <h4 class="text-primary">Latest Testimonals</h4>  
                        <h2>What people say</h2>
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
                        <div
                          className="slick-slide slick-active"
                          tabIndex="0"
                          data-slick-index="1"
                          aria-hidden="false"
                        >
                                             <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
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
                                             <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
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
                                             <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
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
                              <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
                                    </div>
                                </div>
                            </div>         
                             
                            </Col>
                            <Col >
                            {/* in every col there is ul and li elemnts */}
                              <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
                                    </div>
                                </div>
                            </div>         
                             
                            </Col>
                            <Col >
                            {/* in every col there is ul and li elemnts */}
                              <div class="reviewer-box bg-badge product-list p-3 border-light rounded-3 bg-badge">
                                <div ><Row><Col xl={12}> <Ratingabout/></Col></Row>
                                   
                                </div>

                                <h3>Top Quality, Beautiful Location</h3>

                                <p>"Good man. Nixon's pro-war and pro-family. Hey, tell me something. You've got all
                                    this money. How come you always dress like you're doing your laundry? So, how 'bout
                                    them Knicks? What kind of a father would I be if I said no?."</p>
                                <div class="reviewer-profile ">
                                    <div class="reviewer-image">
                                        <img src="https://themes.pixelstrap.com/fastkart/assets/images/inner-page/user/4.jpg" className="w-25" alt=""/>
                                    </div>

                                    <div class="reviewer-name">
                                        <h4>Eileen R. Chu</h4>
                                        <h6>Marketing Director</h6>
                                    </div>
                                </div>
                            </div>         
                             
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
////End of Section4 function ///
