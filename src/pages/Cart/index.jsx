//cart Index by Dania Haroun !!!
//here I import all sections & components in cartpage
import MobileMenu from '../Home/components/MobileNavbar/MobileMenu';
import Footer from '../../components/Footer/index';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import React from 'react';
import Home from './Home';

////start of cart  function///

function Cart() {
  return (
    <div id="main-cart">
      <section className='pt-3'>
        {/* Section 1 section */}
       <Section1/>
      </section>
      <section className='pt-5'>
        {/* Section 2 section */}
       <Section2/>
      </section>
   
         <div id="main-home" className='pt-5'> <Footer/>
      <MobileMenu />
      </div>
    </div>
  );
}

export default Cart; //export cart function to use it in index.js
////End of cart  function///
