import React from 'react';
import PropTypes from 'prop-types';

import './IconsGrid.css';
import IconsGroup from '../IconsGroup';

export default function IconsGrid({ items, baseUrl }) {
  const newItems = items.map(
    group => group.name && <IconsGroup baseUrl={baseUrl} group={group} key={group.name} />,
  );

  return newItems.length
    ? newItems
    : (
      <div className="icons-group">
        <h3 className="icons-group__title">We don't have this icon yet</h3>
      </div>);
}

IconsGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  baseUrl: PropTypes.string.isRequired,
};
