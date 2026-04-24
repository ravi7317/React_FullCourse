import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="clock-wrapper">
      <div className="clock-container">
        <div className="date-display">
          {formatDate(time)}
        </div>
        <div className="time-display">
          <span>{hours}</span>
          <span className="separator">:</span>
          <span>{minutes}</span>
          <span className="seconds">{seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
