//Featured Blog Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
////start of FeaturedBlogSlider function and export it///

export default function FeaturedBlogSlider() {
  return (
    <>
      <div>
        <div className="pb-5">
            <div>
                          {/* there is one row with one col */}

              <Row>
                <Col xl={12}>
                               {/* Featured Blog Swiper Title */}

                <div className="title title-flex">
              <div>
                <h2>Featured Blog</h2>

                <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className="icon-width" alt="featuredblog"
              />
            </span>
                <p>A virtual assistant collects the products from your list</p>
              </div>
            </div>
                        {/* swiper */}

                  <Swiper
                  
                    spaceBetween={10}
                    // slidesPerView={7}
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
                              className="category-box imgblog imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>

                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="0"
                            >
                              <h6>20 March, 2022</h6>
                              <h5>Fresh Vegetable Online</h5>
                            </a>
                    </SwiperSlide>
                    <SwiperSlide >
                    <a
                             href="/"
                              className="category-box imgblog2 imghoveringin mb-2"
                              tabIndex="-1"
                            > </a>
                            <a
                             href="/"
                              className="blog-detail"
                              tabIndex="-1"
                            >
                              <h6>10 April, 2022</h6>
                              <h5>Fresh Combo Fruit</h5>
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
                              <h6>10 April, 2022</h6>
                              <h5>Nuts to Eat for Better Health</h5>
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
////End of FeaturedBlogSlider function ///
