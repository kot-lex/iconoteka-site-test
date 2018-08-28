import React from 'react';
import './Header.css';
import logo from './logo.svg';

export default function Header(props) {
  return (
    <div className="header">
      <img src={logo} className="header__logo" alt="iconoteka"/>
      <ul className="header__menu">
        <li><a href="#link">about</a></li>
        <li><a href="#link">#iconoteka</a></li>
        <li><a href="#link">github</a></li>
      </ul>
    </div>
  );
}
