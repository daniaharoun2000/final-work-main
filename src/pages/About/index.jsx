//About Index by Dania Haroun !!!
//here I import all sections & components in Aboutpage
import MobileMenu from '../Home/components/MobileNavbar/MobileMenu';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';
import Footer from '../../components/Footer/index';

////start of About  function///

function About() {
  return (
    <div id="main-about">
      <section className='pt-2'>
        {/* Section 1 section */}
        <Section1 />
      </section>
      <section className='pt-4'>
        {/* Section 2 section */}
        <Section2 />
      </section>
      <section className='pt-4'>
        {/* Section 2 section */}
        <Section3 />
      </section>
      <section className='pt-2'>
        {/* Section 2 section */}
        <Section4 />
      </section>
      <section className='pt-2'>
        {/* Section 2 section */}
        <Section5 />
      </section>
      <section className='pt-2'>
        {/* Section 2 section */}
        <Section6/>
      </section>
      <div id="main-home"> <Footer/>
      <MobileMenu />
      </div>
    </div>
  );
}

export default About; //export About function to use it in index.js
////End of About  function///
