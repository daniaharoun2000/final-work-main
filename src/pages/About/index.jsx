//About Index by Dania Haroun !!!
//here I import all sections & components in Aboutpage
import MobileMenu from '../Home/components/MobileNavbar/MobileMenu';
import Footer from '../Home/Footer';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';

////start of About  function///

function About() {
  return (
    <div id="main-about">
      <section className='pt-4'>
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
      <section className='pt-4'>
        {/* Section 2 section */}
        <Section4 />
      </section>
      <section className='pt-4'>
        {/* Section 2 section */}
        <Section5 />
      </section>
      <section>
        {/* Footer section */}
        <Footer />
      </section>
      <MobileMenu />
    </div>
  );
}

export default About; //export About function to use it in index.js
////End of About  function///
