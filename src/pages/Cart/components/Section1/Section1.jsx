//Section1 Section from cart Page by Dania Haroun !!!
//this section has a page sequence (home->cart)
import { Col, Row } from "react-bootstrap";
import homeiconforcartsection from '../../images/homeiconforcartsection.svg';//home icon svg 
import Container from "../../../../components/Container";//my Container
import './Section1.scss'; //styling for this section
////start of Section1 function///
function Section1() {
  return (
    <div className="bg-cat">
      <Container>
        <div className="py-4">
            {/* here is 1 row with 2 cols */}
        <Row>        
                {/* first col has an cart title */}
             <Col xl={6} md={6}>
                    <div className="textabout">
                       Cart
                        </div>
              </Col>
                              {/* 2nd col has  a page sequence (home->cart) */}

<Col xl={6} md={6}>
{/* The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical. */}
                            <ol className="olabout p-0 align-items-center d-flex">
                                <li>
                                    <a href="/">
<img src={homeiconforcartsection} className="homeicon ms-2" alt=""/>         
                           </a>
                                </li>
                                <li><div>{'->'}</div></li>
                                <li ><a href="/cart" className="text-decoration-none text-dania ms-2">Cart</a></li>
                            </ol>
                            </Col>
                  
                 </Row>
                </div>
          
      
   
      </Container>
    </div>
  );
}
export default Section1;//export Section1 function to use it when It needed 
////End of Section1 function///

