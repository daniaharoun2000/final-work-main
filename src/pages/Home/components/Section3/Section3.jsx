//Section 3 from Home Page by Dania Haroun !!!
//here we will call Section3LeftPart & Section3RightPart
import { Container } from "../../../../components";//my Container
import { Col, Row } from "react-bootstrap";
import Section3LeftPart from "./Section3LeftPart";
import Section3RightPart from "./Section3RightPart";

////start of Section3 function///

function Section3() {
  return (
    <div >
      <Container>
        <section>
          <div>
            {/* here we have row with 2 cols  */}
            <Row>
              {/* the first col is Section3LeftPart ,it  will appear in xl & xxl */}
              <Col xxl={3} xl={4} className="d-none d-xl-block">
                <Section3LeftPart />
              </Col>
                            {/* the 2nd col is Section3RightPart */}

              <Col xxl={9} xl={8}>
                <Section3RightPart />
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
}
export default Section3;//export Section3 function to use it when It needed 
////End of Section3 function///

