import Rating from "../Rating";
import AddButton from "../AddButton";
import { Col, Row,Button } from "react-bootstrap";

import { useCart } from "react-use-cart";

export default function SlideContent(props) {
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

<div className="product-rating mt-2 mb-2">
  <Rating />
</div>
<Row >
<Button
           className="bg-cat border-light rounded-pill"
            onClick={() => {
              addItem(props.item);
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
