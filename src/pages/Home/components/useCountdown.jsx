// This component for an  Expires box

import { useEffect, useState } from 'react'; // hooks

  //targetDate is come from dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS from TopSaveToday component

  ////start of useCountdown function///

const useCountdown = (targetDate) => {
    //new Date() creates a new date object with the current date and time(targetDate)
  //getTime() returns the number of milliseconds since specific time (targetDate in my state)
  const countDownDate = new Date(targetDate).getTime(); 

  const [countDown, setCountDown] = useState(
        // how time is remined !
    countDownDate - new Date().getTime()
    //countDown=countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
//countDown=countDownDate - new Date().getTime());
    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};
////End of useCountdown function///

  ////start of getReturnValues function///

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
////End of getReturnValues function///

export { useCountdown }; //export useCountdown function
