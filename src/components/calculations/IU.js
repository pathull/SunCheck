import React from 'react';
import './IU.css';
import { Circle } from 'rc-progress';

export default function IU({ counter }) {
  const percentHandler = (arg) => {
    if (arg > 1000) {
      return 100;
    } else {
      return arg / 10;
    }
  };

  return (
    <div className="box">
      <div className="iu-container">
        <div className="iu">{counter ? counter : 0}</div>
        <p className="tag">IU</p>
      </div>
      <Circle
        className="circle-bar"
        percent={percentHandler(counter)}
        strokeWidth="10"
        strokeColor="orange"
      ></Circle>
    </div>
  );
}
