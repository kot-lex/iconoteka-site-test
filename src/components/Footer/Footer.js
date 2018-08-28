import React from 'react';

import './Footer.css';

export default function Footer() {
  return (

    <div className="footer">
      <div className="footer__copy">
        copyright 2018 oleg turbaba
        <br />
        all rights reserved
      </div>
      <ul className="footer__links">
        <li><a href="#link">Instagram</a></li>
        <li><a href="#link">Facebook</a></li>
        <li><a href="#link">Twitter</a></li>
        <li><a href="#link">Tumblr</a></li>
      </ul>
    </div>
  );
}
