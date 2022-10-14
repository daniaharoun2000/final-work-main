
//this is a section that shows items with details(price,quantity,total,title.img)
import Rating from "../Rating";
import { Col, Row,Button } from "react-bootstrap";
import { useCart } from "react-use-cart";//react-use-cart is a lightweight shopping cart hook for React, Next. js, and Gatsby

// useCart: Create persistent carts with local storage, or your own adaptor. react-use-cart supports flexible cart item schemas, multiple carts per page and offers cart handlers that let you trigger actions on item add, update or remove. It has no dependencies and is not tied to a specific payment gateway or checkout."

export default function SlideContent(props) {
  // addItem & useCart hook , for add to cart
  const { addItem } = useCart();

    return (
      
    <div className="p-3 border cardhovering">
<img
src={props.img}  className="w-100 margintoptodayimage imghovering"
  alt=""
/>

<a href="/" tabIndex="0">
  <h6 className="name">
  {props.Title}   </h6>
</a>

<h5 className="sold text-content">
  <span className="text-themecolor price">
  {props.price} 
  </span>
  <del className="dell">20</del>
</h5>
{/* call Rating component */}
<div className="product-rating mt-2 mb-2">
  <Rating />
</div>
{/* Row that has a button for add to the cart */}
<Row >
<Button
           className="bg-cat border-light rounded-pill"
            onClick={() => {
              addItem(props.item);console.log('item add!')
            }}
          >
           <Col xl={12} xs={12}>
            <div className="justify-content-center d- text-gray" > Add</div>

            </Col>   
                          {/* the 2nd col has a div that contain (+) icon  */}

        
          </Button></Row>
</div>
);
}
