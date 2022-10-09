//Featured Blog Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
import './Section5.scss'; //styling for this section

////start of Section5 function and export it///

export default function Section5() {
  return (
    <>
      <div>
        <div className="pb-5">
            <div>
                          {/* there is one row with one col */}

              <Row>
                <Col xl={12}>
                               {/* Featured Blog Swiper Title */}

                               <div className="about-us-title text-center">
                        <h4 className="text-primary">What We Do</h4>
                        <h2>We are Trusted by Clients</h2>
                    </div>
                        {/* swiper */}

                  <Swiper
                  
                    spaceBetween={10}
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

                       320: {
                            slidesPerView:1,
                          },
                   
                      550: {
                        slidesPerView: 2,
                      },
                      
                  940:{
                    slidesPerView: 3,

                  },
                     1200:{
                        slidesPerView: 2,

                     },
                      1550: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                            {/* in every  swiper slide there is an img with text*/}

                    <SwiperSlide  >
                    <a
                             href="/"
                              className="category-box imgblog2 imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>

                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="0"
                            >
                             <h6>Milk Brand</h6>
                             <h5>Fresh Milk</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                    <a
                             href="/"
                              className="category-box imgblog imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="-1"
                            >
                              <h6>Soda Brand</h6>
                              <h5>Soda 500ml - 20% OFF</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                     <a
                             href="/"
                              className="category-box imgblog3 imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="0"
                            >
                              <h6>Farmart</h6>
                              <h5>Fresh Meat Saugage</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                     <a
                             href="/"
                              className="category-box imgblog4 imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="0"
                            >
                             <h6>Juice Brand</h6>
                             <h5>Fresh Juice -30% OFF</h5>
                            </a>
                    </SwiperSlide>
                    <div className="slider__controls">

<div className="slider__pagination"></div>


</div>
                  </Swiper>
                </Col>
              </Row>
            </div>
        </div>
      </div>
    </>
  );
}
////End of Section5 function ///
