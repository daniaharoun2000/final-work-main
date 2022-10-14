//AddButton by Dania Haroun !!!
// AddButton will be used in Top Save Today & Food Cupboard sections
import {Row,Col,Button} from "react-bootstrap";
import "./AddButton.scss";
import { useCart } from "react-use-cart";

////start of AddButton function///

function AddButton(props) {

  const { addItem } = useCart();

  return (
    <div>
      
        {/* here we have a row with 2 columns(the columns are in a Button )  */}
        <Row>
            <Button className="bg-cat buttonclass mt-2" onClick={() => {
              addItem(props.item);
            }}>
              {/* the first col has an "ADD" text */}
          <Col xl={6} xs={6}>
            <div className="justify-content-end d-flex" > Add</div>
            </Col>   
                          {/* the 2nd col has a div that contain (+) icon  */}

         <Col xl={6} xs={6}>
           <div className="d-flex justify-content-end align-items-end">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bg-badge text-themecolor plusbutton"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg></div></Col>   
            </Button>
         
        </Row>
    </div>
  );
}
export default AddButton;//export AddButton function to use it when It needed (in Top Save Today & Food Cupboard sections)
////End of AddButton function///

