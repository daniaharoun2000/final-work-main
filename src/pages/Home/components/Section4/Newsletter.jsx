//Section 4 from Home Page by Dania Haroun !!!
// Join our newsletter  , this section has an bg images with some texts
import { Container } from "../../../../components";//my Container
import { Col, Row } from "react-bootstrap";
////start of Newsletter function///
function Newsletter() {
  return (
    <div >
   <Container>
    <div>
      {/* here is a Row with an one Col */}
    <Row className="pb-5">
      {/* this Col has background image with some texts */}
      <Col xl={12}>
                        <div className="newsletterbg position-relative d-flex justify-content-center align-items-center" >
                            <div className="textforimage2 mt-1 align-items-center justify-content-center d-flex">
                                <div >
                                <h2 className="text-badge textsizenewsletter">
                      Join our newsletter and get...
                    </h2>
                    <h5 className="text-yellow textsizenewsletter">
                      $20 discount for your first order
                    </h5>
                    <div >
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Your Email"
                      />
                      <button
                        className="btn mt-xxl-4 mt-2 home-button mend-auto text-overflow-1 bg-dd text-white"
                      >
                      Subscribe
                      </button>
                                  </div>
                            </div>
               
                   </div> </div></Col></Row></div>
   </Container>
   </div>
  );
}
export default  Newsletter;//export Newsletter function to use it when It needed 
////End of Newsletter function///
