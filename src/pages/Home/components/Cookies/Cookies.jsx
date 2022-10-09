//Cookies Box by Dania Haroun !!!

import { useState } from "react"; //to use it in show & hide cookies box

import { Col, Row, Button } from "react-bootstrap";
////start of Cookies function///

function Cookies() {
  //I use this hook to control the Cookies Box (show & close)

  const [showcookiesbox, setshowcookiesbox] = useState(true); //  showcookiesbox = true so the box will appear at the begining and it will change when I click in the OK button

  return (
    // if showcookiesbox is true , make style ->cookie-bar-box
    // if it is false , make style ->hhide (hide the cookies box)
    <div className={`lightbox ${showcookiesbox ? "cookie-bar-box" : "hhide"}`}>
      {/* here we have a Row with one column */}
      <Row>
        <Col xl={12}>
          <div>
            <div className="cookie-box">
              <div className="cookie-image align-items-center justify-content-center d-flex">
                {/* cookie img */}

                <img
                  src="https://themes.pixelstrap.com/fastkart/assets/images/cookie-bar.png"
                  alt=""
                />
                {/* cookie title */}

                <h2>Cookies!</h2>
              </div>
              {/* cookie contain */}
              <div className="cookie-contain">
                <h5 className="text-aa">
                  We use cookies to make your experience better
                </h5>
              </div>
            </div>
            {/* cookie buttons */}
            <div className="Button-group align-items-center justify-content-center d-flex">
              {/*  Privacy Policy  Button*/}
              <Button className="cookiesbutton align-items-center justify-content-center d-flex bg-badge text-dania">
                Privacy Policy
              </Button>
              {/*  OK  Button*/}
              {/* on click on (OK Button) the setshowcookiesbox will equal false so the box will be hidden */}
              <Button
                className="cookiesbutton align-items-center justify-content-center d-flex bg-primary text-badge"
                onClick={() => setshowcookiesbox(false)}
              >
                OK
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cookies; //export Cookies function to use it when It needed
////End of Cookies function///
