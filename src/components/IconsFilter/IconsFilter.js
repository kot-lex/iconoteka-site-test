import React from 'react';
import './IconsFilter.css';

export default function IconsFilter(props) {
    return (
      <div className="icons-filter">
          <input className="icons-filter__search" onChange={props.onChange} onKeyUp={props.onChange} placeholder="Search"/>
          <ul className="icons-filter__style">
              <li>
                  Style
              </li>
              <li className={
                  props.style === 'fill' ?
                      'icons-filter__control icons-filter__control_active' :
                      'icons-filter__control'
              }>
                  <a href="#fill" onClick={event => props.onStyleChange(event, 'fill')}>Fill</a>
              </li>
              <li className={
                  props.style === 'stroke' ?
                      'icons-filter__control icons-filter__control_active' :
                      'icons-filter__control'
              }>
                  <a href="#stroke" onClick={event => props.onStyleChange(event, 'stroke')}>Stroke</a>
              </li>
          </ul>
      </div>
    );
}
