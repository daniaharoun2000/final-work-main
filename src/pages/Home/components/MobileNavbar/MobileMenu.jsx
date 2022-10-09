//Mobile Menu by Dania Haroun !!!

import Container from "../../../../components/Container";//my Container
import { Col, Row } from "react-bootstrap";
import catigoriesicon from '../../images/catigories.png';
import homeicon from '../../images/homeicon.png';
import favorite from '../../images/favorite.png';
import cart from '../../images/cart.png';
import search from '../../images/search.png';
////start of MobileMenu function///

function MobileMenu() {
  return (
// this section will appear in md & sm & xs
    <div className="mobile-menu bg-primary d-lg-none d-block">
      <Container>
                {/* here we have a Row with one column */}

        <Row>
          <Col xl={12}>
            <div className="w-100">
              <div className="mobile-cart w-100">
                {/* here we have ul (list) with li elements , in each element there is an icon with text */}
                <ul className="m-0 d-flex">
                  {/* here we make Home element active by styling it by active class name */}
                  <li className="mobile-category active position-relative">
                    <a href="/">
<img src={homeicon} className="iconsizemobile" alt="imghome"/>
                  <span className="text-badge d-block">Home</span>
                    </a>
                  </li>

                  <li className="mobile-category">
                    <a href="/">
                    <img src={catigoriesicon} className="iconsizemobile" alt="imgcat"/>
                      <span className="text-badge d-block">Category</span>
                    </a>
                  </li>

                  <li>
                    <a href="/" className="search-box">
                    <img src={search} className="iconsizemobile" alt="imgsearch"/>
                      <span className="text-badge d-block">Search</span>
                    </a>
                  </li>

                  <li>
                    <a href="/" className="notifi-wishlist">
                    <img src={favorite} className="iconsizemobile" alt="imgfav"/>
                      <span className="text-badge d-block">My Wish</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                    <img src={cart} className="iconsizemobile" alt="imgcart"/>
                      <span className="text-badge d-block">Cart</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MobileMenu;//export MobileMenu function to use it when It needed
////End of MobileMenu function///
