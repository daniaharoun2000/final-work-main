
// This component for an  Expires box
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay'; //DateTimeDisplay component
import { useCountdown } from './useCountdown'; //useCountdown component
////start of ExpiredNotice function///

const ExpiredNotice = () => {
  // this const retuen an Expired text when it Expired
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <span>Please select a future date and time.</span>
    </div>
  );
};
////End of ExpiredNotice function///

////start of ShowCounter function///

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  // this const return DateTimeDisplay component with some values from CountdownTimer
  return (

      <a
      href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-badge countdown"
      >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} className="text-badge" />
        <span className="text-badge">:</span>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <span className="text-badge">:</span>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <span className="text-badge">:</span>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>

  );
};
////End of ShowCounter function///

////start of CountdownTimer function///

const CountdownTimer = ({ targetDate }) => {
  // get d , h , m , s from useCountdown 
  //targetDate is come from dateTimeAfter333Days = NOW_IN_MS + THREE_DAYS_IN_MS from TopSaveToday component
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
// if it is expired :
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      // if it is not , return the expired time by ShowCounter const
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer; ////export CountdownTimer function///

////End of CountdownTimer function///
