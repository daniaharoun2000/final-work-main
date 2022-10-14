//TopSaveToday Section from Right Part on Home Page by Dania Haroun !!!
import CountdownTimer from '../../CountdownTimer'; //call CountdownTimer component
import { Col, Row } from "react-bootstrap";
import data from '../../../../Cart/Data';
import SlideContent from '../../Slider/SlideContent';
function TopSaveToday() {
    /////////////----------------This constants for use them in CountdownTimer component in an  Expires box ---------------------------/////////////////
//I assuemed that expire time is after 333 days from now
  const THREE_DAYS_IN_MS = 333 * 24 * 60 * 60 * 1000; // 
  //new Date() creates a new date object with the current date and time
  //getTime() returns the number of milliseconds since specific time (now in my state)
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS;//time after 333 days from now
      /////////////----------------End of This constants---------------------------/////////////////

  return (
    
    <div >
      
        {/* there is 2 rows */}
        <div className="pb-5">
          {/* the first row has 2 cols */}
      <Row>
        {/* the first col is a  text */}
          <Col xxl={6 }xl={6}xs={12} md={12}> 
          {/* title */}
            <div className="title title-flex">
          <div >
            <h2>Top Save Today</h2>

            <span className="title-leaf">
              <img
                src="https://themes.pixelstrap.com/fastkart/assets/svg/1/grocery.svg"
                className="icon-width" alt="img"
              />
            </span>
           
            <p>
              Don't miss this opportunity at a special discount just for this
              week.
            </p>
          </div>
        </div>
        </Col>
         
     
               {/* the 2nd col is an  Expires box */}

          <Col xxl={6} xl={6} xs={12} md={12}  className="d-flex justify-content-end mb-2">
            <div className="align-items-center justify-content-center d-flex bg-dd text-badge border border-light rounded timeboxsection3">
            {/* clock svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="timingsvg mx-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {/* text */}
              <span className="name align-items-center justify-content-center d-flex">Expires in :</span>
{/* CountdownTimer component , it is about calculating the expire time */}
{/* dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS; */}
              <CountdownTimer targetDate={dateTimeAfter333Days} />
            </div>
          </Col>
        </Row>
        {/* 2nd row */}
                  {/* react gutters from bootstrap */}
{/* in xxl -> show 4 cols  , in xl -> show 3 cols ,in lg -> show 3 cols , in md -> show 3 cols ,in sm -> show 3 cols ,  in xs -> show 2 cols*/}
        <Row className="row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-2 me-0 ms-0">
              {/* there is 10 cols */}
                                  {/* here , each item will mapped and shown */}

              {data.productData.map((items) => {
            return (
                              // {/* here I call SlideContent component and give it some props*/}

              <SlideContent
                key={items.id}
                Title={items.title}
            
                img={items.image}
                price={items.price}
                item={items}
              />
              
                 );})}
        </Row>
        </div>
     

    </div>
  );
}
export default TopSaveToday;
