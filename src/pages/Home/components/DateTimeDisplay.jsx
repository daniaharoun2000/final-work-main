// This component for an  Expires box
//  This fun to return the value of days & hours & minutes & seconds with some styling
import React from 'react';
////start of DateTimeDisplay function///

const DateTimeDisplay = ({ value }) => {
  return (
//  return the value of days & hours & minutes & seconds with some styling
      <span style={{marginLeft:7}}>{value}</span>
  
  );
};

export default DateTimeDisplay;////export DateTimeDisplay function///

////End of DateTimeDisplay function///
