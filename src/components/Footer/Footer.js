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
        <li><a href="https://www.instagram.com/iconoteka/">Instagram</a></li>
        <li><a href="https://www.facebook.com/iconoteka">Facebook</a></li>
        <li><a href="https://twitter.com/iconoteka">Twitter</a></li>
        <li><a href="https://iconoteka.tumblr.com/">Tumblr</a></li>
      </ul>
    </div>
  );
}
