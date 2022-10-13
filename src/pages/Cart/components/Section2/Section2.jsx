//Section2 Section from About Page by Dania Haroun !!!
//this section has a page sequence (home->about)
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
import './Section2.scss'; //styling for this section
import returnarrow from '../../images/returnarrow.svg'
import React, { Component }  from 'react';

////start of Section2 function///
function Section2() {
  return (
    <div>
      <Container>
        {/* row with 2 cols */}
            <Row className="g-sm-5 g-3">
                {/* first col , item details */}
                <Col xxl={9}>
                    <div >
                        <div className="table-responsive-xl">
                            <table>
                                <tbody>
                                    {/* first tr */}
                                <tr className="cartborder">
                                    <td>
                                    <a href="/home">
                                                    <img src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/2.png" className="w-75 h-100" alt=""/>
                                                </a>
                                           
                                        </td>
                                         <td>
                                            <h5 className="text-primary">Name : </h5>
                                            <h5>Juice</h5>
                                           
                                        </td>
                                        <td>
                                            <h5 className="text-primary">Price</h5>
                                            <h5>$35.10 </h5>
                                           
                                        </td>
                                        <td>
                                            <h5 className="text-primary">Qty</h5>
                                          
                                                   
                                                        <button type="button" className="btn qty-left-minus" data-type="minus" data-field="">
                                                            <i className="fa fa-minus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                        <input className="form-control input-number qty-input" type="text" name="quantity" value="0"/>
                                                        <button type="button" className="btn qty-right-plus" data-type="plus" data-field="">
                                                            <i className="fa fa-plus ms-0" aria-hidden="true"></i>
                                                        </button>
                                                    
                                               
                                        </td>
                                        <td>
                                            <h5 className="text-primary">Total</h5>
                                            <h5 className="text-dd">$35.10</h5>
                                        </td>
                                        <td>
                                            <h5 className="text-primary">Action</h5>
                                            <a>Remove</a>
                                        </td>
                                    </tr>


                               

                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
{/* 2nd col */}
{/* total sum */}
                <Col xxl={3} className="bg-cat">
                    <div className="mt-5">
                        <div className="mt-3 cartborder text-dark">
                            <h4>Cart Total</h4>
                        </div>

              
                        <div className="mt-3 cartborder">
                            <Row><Col xs={6}>  <h5 className="text-aa">Total (USD)</h5>
</Col>
                                <Col xs={6}>   <h5 className="text-primary justify-content-end d-flex">$132.58</h5>
</Col></Row>
                         </div>

                        <div className="mt-3">
                            <Row>
                                        <Col xl={12}><button className="btn btn-dd text-badge ps-3 pe-3 w-100">
                                        <h6 className="w-100 justify-content-center d-flex">Process To Checkout</h6></button></Col>
                                        <Col xl={12}><div className="align-items-center"> <button className="btn btn-bgray text-dark ps-3 pe-3 w-100 mt-2 mb-5">
                                        <h6 className="w-100 justify-content-center d-flex"><img src={returnarrow} className="returnarrowsize me-1"alt=""/>Return To Shopping</h6></button>  </div></Col>
                                      
                                        </Row>
                                </div>
                    </div>
                </Col>
            </Row>
        
          
      
   
      </Container>
    </div>
  );
}
export default Section2;//export Section2 function to use it when It needed 
////End of Section2 function///

