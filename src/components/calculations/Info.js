import React from 'react';
import './Info.css';

export default function Info() {
  return (
    <div className="info-container">
      <h2 className="info">Guide</h2>
      <ul className="info-list">
        <li>
          The Food and Drug Administration (FDA) recommends 1,000 IUs of Vitamin D daily, which is
          equivalent to 10-15 minutes of mid-day sun exposure
        </li>
        <li>Between 10 a.m. and 3 p.m. is the usual window for significant sun exposure</li>
        <li>Sunscreen should be applied if outside longer than 15 minutes</li>
        <li>
          Sun exposure and/or Vitamin D supplements are best. Diet is not a reliable source of
          Vitamin D
        </li>
      </ul>
    </div>
  );
}
