//Section 2 from Footer by Dania Haroun !!!
// Website Parts
import {Row,Col} from "react-bootstrap";

//// start of Section 2 from footer ///

function Section2() {
  return (
<div className="main-footer section-b-space section-t-space">
   
                  {/* here we have one row with 5 columns  */}

        <Row className="pb-3 gy-3 p-3">
            {/* in the first column we have a logo img & some texts */}
                    <Col xl={3}md={6} lg={4} xs={12}>
                    
                        <div className="footer-logo">
                            {/* logo img */}
                            <div className="theme-logo">
                                <a href="/">
                                    <img src="	https://themes.pixelstrap.com/fastkart/assets/images/logo/1.png" alt="" className="logoo"/>
                                </a>
                            </div>
{/* some texts */}
                            <div className="footer-logo-contain mt-4">
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                                    demonstrate the visual form.</p>

                                <ul className="address">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home svgg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        <a href="/"><span className="mx-2">1418 Riverwood Drive, US</span></a>
                                    </li>
                                    <li className="mt-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail svgg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        <a href="/"><span className="mx-2">support@fastkart.com</span></a>
                                    </li>
                                </ul>
                            </div>
                    
                    </div></Col>
                                {/* in the 2nd column we have a footer title and footer contain */}

                    <Col xl={2} lg={3}  md={6} xs={12}>
                        {/* footer title */}
                        <div className="footer-title ">
                            <h4>Categories</h4>
                        </div>
{/* footer contain (ul) with (li) items  */}
                        <div className="footer-contain mt-4">
                            <ul>
                                <li>
                                    <a href="/" className="text-content">Vegetables &amp; Fruit</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Beverages</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Meats &amp; Seafood</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Frozen Foods</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Biscuits &amp; Snacks</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Grocery &amp; Staples</a>
                                </li>
                            </ul>
                        
                    </div></Col>
                                {/* in the 3rd ccolumn we have a footer title and footer contain */}

                    <Col xl={2} lg={3}  md={3}xs={12}>
                    {/* footer title */}
                        <div className="footer-title ">
                            <h4>Useful Links</h4>
                        </div>
{/* footer contain (ul) with (li) items  */}
<div className="footer-contain mt-4">
                            <ul>
                                <li >
                                    <a href="/" className="text-content">Home</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Shop</a>
                                </li>
                                <li className="">
                                    <a href="/about" className="text-content">About Us</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Blog</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                  </Col>
                                                  {/* in the 4th ccolumn we have a footer title and footer contain */}

                    <Col xl={2} lg={2} md={3} xs={12}>
                   {/* footer title */}
                        <div className="footer-title ">
                            <h4>Help Center</h4>
                        </div>
{/* footer contain (ul) with (li) items  */}

                        <div className="footer-contain mt-4">
                            <ul>
                                <li >
                                    <a href="/" className="text-content">Your Order</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Your Account</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Track Order</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Your Wishlist</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">Search</a>
                                </li>
                                <li className="">
                                    <a href="/" className="text-content">FAQ</a>
                                </li>
                            </ul>
                        </div>
               </Col>
      {/* in the 5th ccolumn we have a footer title &  number & email & downlod app */}

                    <Col xl={3} lg={4} md={6} xs={12}>
                        {/* footer title */}

                        <div className="">
                            <h4>Contact Us</h4>
                        </div>
{/* here we have a ul that have Rows and columns , in every column we have a li elemnt  */}
 <div className="mt-4">
                            <ul>
                                {/* first Row */}
                                <Row>
                                    <Col xs={12}>
                                        {/*  number */}
                                <li className="">
                                    <div className="footer-number">
                                        <div className="contact-number">
                                        <div className="d-flex align-items-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone svgg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
       <span className="text-content ms-1">Hotline 24/7 :</span></div>
                                            <h6 className="">91 888 104 2340</h6>
                                        </div>
                                    </div>
                                </li>
                                </Col></Row>
                                {/* 2nd Row */}
                                <Row>
                                    <Col  xs={12}> 
                                     {/*Email  */}
                                <li className=" mt-4"> 
                                    <div className="footer-number">
                                        <div className="contact-number">
                                            <div className="align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail svgg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    <span className="text-content ms-1">Email Address  :</span></div>
                                            <h6 className="">fastkart@hotmail.com</h6>
                                        </div>
                                    </div>
                                </li></Col></Row>
                              {/* 3rd Row */}
                                <Row>
                                    <Col  xs={12}>
                                        {/*Download App   */}
                                <li className="social-app mt-4">
                                    <h5 className="mb-2 text-content">Download App :</h5>
                                    <ul className="d-flex justify-content-center align-items-center">
                                        <li >
                                            <a href="/" target="_blank">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" className="imghovering" alt=""/>
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a href="/" target="_blank">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" className="imghovering" alt=""/>
                                            </a>
                                        </li>
                                    </ul>
                                </li></Col></Row>
                            </ul>
                        </div>
                   
      </Col></Row>
                
            </div>

  );
}
export default Section2;//export Section2 function to use it when It needed
//// start of Section 2 ///
