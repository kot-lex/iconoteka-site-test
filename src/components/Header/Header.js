import React from 'react';
import './Header.css';
import IconsFilter from '../IconsFilter';
import logo from './logo.svg';

export default function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="header">
        <img src={logo} className="header__logo" alt="iconoteka" />
        <ul className="header__menu">
          <li><a href="#link">about</a></li>
          <li><a href="#link">#iconoteka</a></li>
          <li><a href="https://github.com/iconoteka/iconoteka">github</a></li>
        </ul>
      </div>
      <IconsFilter
                onChange={props.onSearch}
                style={props.style}
                onStyleChange={props.onStyleChange}
              />
    </div>
  );
}
