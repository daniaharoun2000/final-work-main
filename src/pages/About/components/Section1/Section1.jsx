//Section1 Section from About Page by Dania Haroun !!!
//this section has a page sequence (home->about)
import { Col, Row } from "react-bootstrap";
import homeiconforaboutsection from '../../images/homeiconforaboutsection.svg';//home icon svg 
import Container from "../../../../components/Container";//my Container
import './Section1.scss'; //styling for this section

////start of Section1 function///
function Section1() {
  return (
    // aboutrowhover for hover the div
    <div className="aboutrowhover">
      <Container>
        <div className="py-4">
            {/* here is 1 row with 2 cols */}
        <Row>        
                {/* first col has an about title */}
             <Col xl={6} xs={6}>
                    <div className="textabout">
                       About Us
                        </div>
              </Col>
                              {/* 2nd col has  a page sequence (home->about) */}

<Col xl={6} xs={6}>
{/* The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical. */}
                            <ol className="olabout p-0 align-items-center d-flex">
                                <li>
                                    <a href="/">
<img src={homeiconforaboutsection} className="homeicon ms-2" alt=""/>         
                           </a>
                                </li>
                                <li><div>{'->'}</div></li>
                                <li ><a href="/about" className="text-decoration-none text-dania ms-2">About Us</a></li>
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

