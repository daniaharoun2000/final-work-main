//Section2 Section from About Page by Dania Haroun !!!
//this section has a page sequence (home->about)
import { Col, Row } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
import './Section2.scss'; //styling for this section
import returnarrow from '../../images/returnarrow.svg'
import { useCart } from "react-use-cart"; //react-use-cart is a lightweight shopping cart hook for React, Next. js, and Gatsby

////start of Section2 function///
function Section2() {
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
      } = useCart();
      if (isEmpty) return <h1 className="text-center">Cart Empty</h1>;
      
  return (
    
    <div>
      <Container>
        {/* row with 2 cols */}
            <Row className="g-sm-5 g-3">
                {/* first col , item details */}
                <Col xxl={9}>
                    <div >
                        <div className="table-responsive-xl">
                        <h6>cart =({totalUniqueItems})</h6>
          <h6>total items={totalItems}</h6>
                            <table>
                                <tbody>
                                {items.map((item, index) => {
                                    
                return (
                                   
                                <tr className="cartborder" key={index}>
                                    
                                    <td>
                                    <a href="/home">
                                                    <img src={item.image} className="w-75 h-100" alt=""/>
                                                </a>
                                           
                                        </td>
                                         <td>
                                            <h6 className="text-themecolor">Name : </h6>
                                            <h6>{item.title}</h6>
                                           
                                        </td>
                                        <td>
                                            <h6 className="text-themecolor">Price</h6>
                                            <h6>{item.price} </h6>
                                           
                                        </td>
                                        <td>
                                        <h6 className="text-themecolor">Quantity</h6>
                                            <h6>({item.quantity}) </h6>
                                               
                                        </td>
                                        <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        -
                      </button>
                      <button
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                        className="btn btn-info ms-2"
                      >
                        +
                      </button>
                      
                    </td>
                                        <td>
                                       
                                            <h6 className="text-themecolor">Total</h6>
                                            <h6 className="text-dd">{item.price*item.quantity}</h6>
                                        </td>
                                        <td>
                                            <h6 className="text-themecolor">Action</h6>
                                            <button
                        className="btn btn-danger ms-2 my-2"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        remove
                      </button>
                                        </td>
                                    </tr>
                )})}
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
                            <Row><Col xs={6}>  <h6 className="text-aa">Total (USD)</h6>
</Col>
                                <Col xs={6}>   <h6 className="text-themecolor justify-content-end d-flex">{cartTotal}</h6>
</Col></Row>
                         </div>

                        <div className="mt-3">
                            <Row>
                                        <Col xl={12}><button className="btn btn-dd text-badge ps-3 pe-3 w-100 bg-dark">
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

