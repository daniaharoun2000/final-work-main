import Rating from "../Rating";
import AddButton from "../AddButton";
import { Card, Button } from "react-bootstrap";

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
  <del className="dell">28.56</del>
</h5>

<div className="product-rating mt-2">
  <Rating />
</div>
<Button
            variant="themecolor"
            onClick={() => {
              addItem(props.item);
            }}
          >
            Add to cart
          </Button>
</div>
);
}
