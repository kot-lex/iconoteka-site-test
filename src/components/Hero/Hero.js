import React from 'react';
import * as PropTypes from 'prop-types';
import './Hero.scss';

import Header from '../Header';
import IconsFilter from '../IconsFilter';

export default function Hero(props) {
  return (
    <div className="hero">
      <Header
        onSearch={props.onSearch}
        style={props.style}
        onStyleChange={props.onStyleChange}
      />
      <IconsFilter
        onChange={props.onSearch}
        style={props.style}
        thickness={props.thickness}
        onStyleChange={props.onStyleChange}
        onThicknessChange={props.onThicknessChange}
      />
    </div>
  );
}

Hero.propTypes = {
  onSearch: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  onThicknessChange: PropTypes.func.isRequired,
};
