//Left Part of Section 3 from Home Page by Dania Haroun !!!
// vertical section
import { Col, Row } from "react-bootstrap";
////start of Section3LeftPart function///
function Section3LeftPart() {
  return (
    <div >

          <div >
            {/* here we have 5 row , one col in each row */}
            {/* first Row */}
          <Row>
            <Col xl={12}> 
               <div className="category-menu bg-cat">
              <h3>Categories </h3>
              {/* ul (list) and (li) elements , in each li elements there is an img and text */}
              <ul className="linesection3left">
                <li>
                  <div className="category-list">
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg"
                   alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Vegetables &amp; Fruit
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg"
                    alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Beverages
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Meats &amp; Seafood
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Breakfast &amp; Dairy
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Frozen Foods
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/biscuit.svg"
                      alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Biscuits &amp; Snacks
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                      alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Grocery &amp; Staples
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="	https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Wines &amp; Alcohol Drinks
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Milk &amp; Dairies
                      </a>
                    </h5>
                  </div>
                </li>
                <li className="pb-30">
                  <div className="category-list">
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg"
                     alt=""
                    />
                    <h5>
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Pet Foods
                      </a>
                    </h5>
                  </div>
                </li>
              </ul>
              {/* ul (list) and (li) elements , in each li elements there is a text */}

              <ul className="value-list mt-3">
                <li>
                  <div className="category-list">
                    <h5 className="ms-0 text-title">
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Value of the Day
                      </a>
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="category-list">
                    <h5 className="ms-0 text-title">
                      <a
                        href="/"
                        className="categorytext"
                      >
                        Top 50 Offers
                      </a>
                    </h5>
                  </div>
                </li>
                <li className="mb-0">
                  <div className="category-list">
                    <h5 className="ms-0 text-title">
                      <a
                        href="/"
                        className="categorytext"
                      >
                        New Arrivals
                      </a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div></Col></Row>
                    {/* 2nd Row */}

            <Row>
              <Col xl={12}>   <div className="ratio_156 mt-5">
              <div className="home-contain bg-size">
                {/* here we have an img as a background , and a text above it */}
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/8.jpg"
                  className="bg-img lazyload"
                  alt=""
                />
                <div className="home-detail mt-5 mx-5">
                  <div>
                    <h6 className="text-yellow">Seafood</h6>
                    <h3 className="text-uppercase fw-normal">
                      <span className="theme-color fw-bold">Freshes</span>
                      Products
                    </h3>
                    <h3 className="fw-light h3section3">every hour</h3>
                    <button
                      className="btn text-overflow-1 bg-dd text-white"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div></Col></Row>

                     {/* 3rd Row */}

            <Row>
              <Col xl={12}> <div className="mt-5">
                                {/* here we have an img as a background , and a text above it */}

              <div className="home-contain">
                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/banner/11.jpg"
                 alt=""
                />
                <div className="home-detail mt-5 mx-5">
                  <div>
                    <h4 className="text-yellow">Organic</h4>
                    <h2 className="text-uppercase fw-normal mb-0 text-primary">
                      fresh
                    </h2>
                    <h2 className="text-uppercase fw-normal text-title">
                      Vegetables
                    </h2>
                    <p className="mb-3 text-aa">Super Offer to 50% Off</p>
                    <button
                      className="btn text-overflow-1 bg-dd text-white"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div></Col></Row>

                       {/* 4th Row */}

            <Row>
              <Col xl={12}> <div className="mt-5">
                                {/* here we have ul (list)  and (li) elements */}

              <div className="category-menu">
                <h3>Treanding Products</h3>

{/* ul with li , each li has an img with text */}
                <ul className="trendinglist border-0 p-0 d-block">
                  <li>
                    <div className="offer-product">
                      <a href="/" className="offer-image">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/23.png"
                          className="me-1 imghovering"
                          alt=""
                        />
                      </a>

                      <div className="offer-detail">
                        <div>
                          <a href="/" className="text-title">
                            <h6 className="text-overflow-1">
                              Meatigo Premium Goat Curry
                            </h6>
                          </a>
                          <span className="text-aa">450 G</span>
                          <h6 className="price text-primary mb-2">
                            $ 70.00
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div className="offer-product">
                      <a href="/" className="offer-image">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/24.png"
                          className="me-1 imghovering"
                          alt=""
                        />
                      </a>

                      <div className="offer-detail">
                        <div>
                          <a href="/" className="text-title">
                            <h6 className="text-overflow-1">
                              Dates Medjoul Premium Imported
                            </h6>
                          </a>
                          <span className="text-aa">450 G</span>
                          <h6 className="price text-primary mb-2  pb-1">
                            $ 40.00
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mt-4">
                    <div className="offer-product">
                      <a href="/" className="offer-image">
                        <img
                          src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/25.png"
                          className="me-1 imghovering"
                          alt=""
                        />
                      </a>

                      <div className="offer-detail">
                        <div>
                          <a href="/" className="text-title">
                            <h6 className="text-overflow-1">
                              Good Life Walnut Kernels
                            </h6>
                          </a>
                          <span className="text-aa">200 G</span>
                          <h6 className="price text-primary mb-2 pb-1">
                            $ 52.00
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mb-0 mt-4">
                    <div className="offer-product">
                      <a href="/" className="offer-image">
                        <img
                          src="	https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/26.png"
                          className="me-1 imghovering"
                          alt=""
                        />
                      </a>

                      <div className="offer-detail">
                        <div>
                          <a href="/" className="text-title">
                            <h6 className="text-overflow-1">
                              Apple Red Premium Imported
                            </h6>
                          </a>
                          <span className="text-aa">1 KG</span>
                          <h6 className="price text-primary mb-2 pb-1">
                            $ 80.00
                          </h6>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div></Col></Row>

                 {/* 5th Row */}
      
<Row>
  <Col xl={12}>   <div className="mt-5">
    {/* this is a normal col with some text */}
              <div className="category-menu">
                {/* review-title */}
                <h3>Customer Comment</h3>

                <div className="review-box">
                  {/*  review-contain*/}
                  <div className="review-contain">
                    <h5 className="w-75">
                      We Care About Our Customer Experience
                    </h5>
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center p-2">
                  
                  <div className="review-profile">  
       {/* review-image */}
                  <div className="review-image px-1">
                      <img
                        src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/review/1.jpg"
                        className="img-fluid imghovering"
                        alt=""
                      />
                    </div> </div>
                <div className="review-detail px-1">
                      <h5>Tina Mcdonnale</h5>
                      <h6 className="text-aa">Sale Manager</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div></Col></Row>
         
          </div>
   
      
    </div>
  );
}
export default Section3LeftPart;//export Section3LeftPart function to use it when It needed 
////End of Section3LeftPart function///
