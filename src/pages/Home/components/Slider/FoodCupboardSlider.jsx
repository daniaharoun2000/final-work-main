//Food Cupboard Section from Right Part on Home Page by Dania Haroun !!!
//  Swiper (slider)
import { Autoplay,  Pagination, Navigation, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col, Row } from "react-bootstrap";
import SlideContent from "./SlideContent";
import data from "../../../Cart/Data";
////start of FoodCupboardSlider function and export it///

export default function FoodCupboardSlider() {

  return (
    <>
      <div>
      
            <div>
                                        {/* there is one row with one col */}

              <Row className="pb-5">
                <Col xl={12} >
                                                 {/* Food Cupboard Swiper Title */}

                  <div className="title title-flex">
                    <div>
                      <h2>Food Cupboard</h2>

                      <span className="title-leaf">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                          className="icon-width" alt="foodcupboard"
                        />
                      </span>
                      <p>
                        A virtual assistant collects the products from your list
                      </p>
                    </div>
                  </div>
                  {/* Swiper */}
                  <Swiper
                    spaceBetween={0}
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
                            slidesPerView:2,
                          },
                      661: {
                        slidesPerView:3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      
                  1200:{
                    slidesPerView: 3,

                  },
                     1440:{
                        slidesPerView: 4,

                     },
                      1800: {
                        slidesPerView: 5,
                      },
                    }}
                  >
                    {/* here , each item will mapped and shown */}
                                             {data.productData.map((items) => {
            return (
              //  {/* in every  swiper slide there is an img with text*/}

                    <SwiperSlide  key={items.id}>
               {/* here I call SlideContent component and give it some props*/}
              <SlideContent
                key={items.id}
                Title={items.title}
                img={items.image}
                price={items.price}
                item={items}
              />
              
           </SwiperSlide>
                 );})}
                 {/*  slider__pagination*/}
                    <div className="slider__controls">

<div className="slider__pagination"></div>


</div>
                  </Swiper>
                </Col>
              </Row>
            </div>
        </div>
     
    </>
  );
}

////End of FoodCupboardSlider function ///
