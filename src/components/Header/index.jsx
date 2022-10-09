
// this is a Header function that has a header with 3 sections (these 3 sections is the section 1 & 2 &3 that we can find it in components folder in the Header folder )
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./Header.scss"

//// start of Header function ///

function Header() {
  return (
    <header id="main-header">
      <section className="header">
        {/* Top Header */}
        <Section1 /> 
      </section>
      <section className="header">
        {/*Sticky Header  */}
        <Section2 />
      </section>
      <section className="header">
        {/* NavBar */}
        <Section3 />
        </section>
    </header>
  );
}

export default Header; //export Header function to use it when It needed
//// End of Header function ///
