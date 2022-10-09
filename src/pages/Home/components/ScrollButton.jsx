//ScrollButton by Dania Haroun !!!
// ScrollButton will be used in All page
// ScrollButton is a button that will take the user to Top of the page
import svgg from'../images/topIcon.svg'; //top arrow image
////start of ScrollButton function and export it///
export default function ScrollButton() {
  return (
    <div>
      <button className='bg-primary scroolbutton'
        onClick={() => {
          //  scroll to top on page load
    //horizontally =0 ,vertically=0 ,behavior=smooth
    //The scroll-behavior property specifies whether to smoothly animate the scroll position, instead of a straight jump, when the user clicks on a link within a scrollable box.
   
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        // button's style
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          color: '#fff',
          border:'#699',
        width:'1'
        }}
      >
        {/* img on the button (top arrow icon) */}
       <img
                    src={svgg}
                    className="iconn align-items-center"
                    alt="img"
                  />
      </button>
    </div>
  );
}
