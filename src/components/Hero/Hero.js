import React from 'react';
import * as PropTypes from 'prop-types';
import Header from '../Header';

export default function Hero(props) {
  return (
    <div className="hero">
      <Header
        onSearch={props.onSearch}
        style={props.style}
        onStyleChange={props.onStyleChange}
      />
    </div>
  );
}

Hero.propTypes = {
  onSearch: PropTypes.func.isRequired,
  style: PropTypes.string.isRequired,
  onStyleChange: PropTypes.func.isRequired,
};
