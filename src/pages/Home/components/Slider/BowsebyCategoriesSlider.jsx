//Bowse by Categories Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay,  Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col,Row } from "react-bootstrap";
////start of BowsebyCategoriesSlider function and export it///

export default function BowsebyCategoriesSlider() {
  return (
    <>
        <div>
   
      
          <div className="pb-5">
            {/* there is one row with one col */}
          <Row>
            <Col xl={12}>
              {/* Bowse by Categories Swiper Title */}
         <div className="title title-flex">
              <div>
                <h2>Browse By Categories</h2>

                <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className="icon-width" alt="browsebycategories"
              />
            </span>
                <p>Top Categories Of The Week</p>
              </div>
            </div>
            {/* swiper */}
      <Swiper
        spaceBetween={0}
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
            slidesPerView: 2,
          },
          425: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
          1800: {
            slidesPerView: 7,
          }
        
        }}
      >
        {/* in every  swiper slide there is an img with text*/}
        <SwiperSlide>     <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Breakfast</h5>
                            </a></SwiperSlide>
        <SwiperSlide>     <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Frozen Foods</h5>
                            </a></SwiperSlide>
        <SwiperSlide>    <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Milk & Dairies</h5>
                            </a></SwiperSlide>
        <SwiperSlide>        <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Pet Food</h5>
                            </a></SwiperSlide>
        <SwiperSlide>   <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Beverages </h5>
                            </a></SwiperSlide>
        <SwiperSlide>   <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Vegetables & Fruit</h5>
                            </a></SwiperSlide>
        <SwiperSlide>   <a
                             href="/"
                              className="category-box"
                              tabIndex="-1"
                            >
                              <img
                                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                                className="blur-up lazyloaded"
                                alt=""
                              />
                              <h5 className="align-items-center justify-content-center d-flex">Meats &amp; Seafood</h5>
                            </a></SwiperSlide>


                            <div className="slider__controls">

<div className="slider__pagination"></div>


</div>
      </Swiper></Col></Row>
      </div></div>
    </>
  );

}
////End of BowsebyCategoriesSlider function ///
