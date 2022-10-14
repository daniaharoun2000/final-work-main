//Section2 Section from Cart Page by Dania Haroun !!!
//this section shows the cart items & total price ....
import { Col, Row,Button } from "react-bootstrap";
import Container from "../../../../components/Container";//my Container
import './Section2.scss'; //styling for this section
import returnarrow from '../../images/returnarrow.svg'
import { useCart } from "react-use-cart"; //react-use-cart is a lightweight shopping cart hook for React, Next. js, and Gatsby

// useCart: Create persistent carts with local storage, or your own adaptor. react-use-cart supports flexible cart item schemas, multiple carts per page and offers cart handlers that let you trigger actions on item add, update or remove. It has no dependencies and is not tied to a specific payment gateway or checkout."

////start of Section2 function///
function Section2() {
    //here I used useCart from "react-use-cart"
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        
      } = useCart();
      //if there is no items , "Cart is empty" will shown
      if (isEmpty) return <h1 className="text-center">Cart Empty</h1>;
      console.log({totalUniqueItems}) ;
      console.log({totalItems}) ;

  return (
    
    <div>
      <Container>
        {/* row with 2 cols */}
            <Row className="g-sm-5 g-3">
                {/* first col , item details */}
                <Col xxl={9}>
                    <div >
                        <div className="table-responsive-xl">
                            {/* the {totalUniqueItems} is the number of items  */}
                        <h6>cart =({totalUniqueItems})</h6>
                        {/* the {totalItems} is the sum of all items quantity */}
          <h6>total items={totalItems}</h6>
                            <table>
                                <tbody>
                                    {/* here , each item will mapped and shown */}
                                {items.map((item, index) => {
                                    
                return (
                                   
                                <tr className="cartborder" key={index}>
                                    {/* first td for item img */}
                                    <td className="pe-3 py-3">
                                    <a href="/">
                                        {/* the src will come from item.image */}
                                                    <img src={item.image} className=" cartitemimg" alt=""/>
                                                </a>
                                           
                                        </td>
                                         {/* 2nd td for item Name */}
                                         <td className="pe-5 py-3">
                                            <h6 className="text-themecolor">Name : </h6>
                                            {/* the name will come from item.title */}
                                            <h6>{item.title}</h6>
                                           
                                        </td>
                                        {/* 3rd td for item Price */}
                                        <td className="pe-5 py-3">
                                            <h6 className="text-themecolor">Price</h6>
                                            {/* the price will come from item.price */}
                                            <h6>{item.price} </h6>
                                           
                                        </td>
                                        {/* 4th td for item Quantity */}
                                        <td className="pe-5 py-3">
                                        <h6 className="text-themecolor">Quantity</h6>
                                        {/* the Quantity will come from item.quantity */}
                                            <h6>({item.quantity}) </h6>
                                               
                                        </td>
                                        {/* 5th td for item add & reduce from quantity  */}
                                        <td className="pe-5 py-3" >
                                            {/* there is 2 butns, the first for -> - , the 2nd for -> + */}
                      <Button
                        onClick={() =>
                            // on btn click , the Quantity will reduce by one (by updateItemQuantity)
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gg text-badge mb-2 quantitybutton rounded-circle"
                      >
  <h6 className="m-0 p-0 text-gray">-</h6>

                      </Button>
                      <Button
                        onClick={() => {
 // on btn click , the Quantity will plus by one (by updateItemQuantity)

                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                        className="bg-gg text-badge quantitybutton rounded-circle"
                      >
                        <h6 className="m-0 p-0 me-0 text-gray">+</h6>
                      </Button>
                      
                    </td>
                    {/* 6th td for item Total */}
                                        <td className="pe-5 py-3">
                                       
                                            <h6 className="text-themecolor">Total</h6>
                                            {/* to find Item Total , I will multiply price with quantity*/}
                                            <h6>{item.price*item.quantity}</h6>
                                        </td>
                                        {/* 7th td for item Remove */}
                                        <td>
                                            <h6 className="text-themecolor">Action</h6>
                                            {/* here is a btn for remove all item */}
                                            <Button
                        className="text-dd m-0 p-0"
                        onClick={() => {
                          removeItem(item.id);console.log("Item Removed !")

                        }}
                      >
                      <h6>Remove</h6>  
                      </Button>
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
{/* the {cartTotal} is the sum of all items prices */}
                                <Col xs={6}>   <h6 className="text-themecolor justify-content-end d-flex">{cartTotal}</h6>
</Col></Row>
                         </div>

                        <div className="mt-3">
                            <Row>
                                        <Col xl={12}><Button className="btn btn-dd text-badge ps-3 pe-3 w-100 bg-dark">
                                        <h6 className="w-100 justify-content-center d-flex">Process To Checkout</h6></Button></Col>
                                        <Col xl={12}><div className="align-items-center"> <Button className="btn btn-bgray text-dark ps-3 pe-3 w-100 mt-2 mb-5" href="/">
                                        <h6 className="w-100 justify-content-center d-flex"><img src={returnarrow} className="returnarrowsize me-1"alt=""/>Return To Shopping</h6></Button>  </div></Col>
                                      
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

