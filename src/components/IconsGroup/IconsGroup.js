import React from 'react';
import PropTypes from 'prop-types';

import IconCard from '../IconCard';
import './IconsGroup.scss';

export default function IconsGroup({ group, baseUrl }) {
  const images = group.items
    .map(iconItem => (
      <IconCard
        key={iconItem.fileName}
        path={iconItem.path}
        name={iconItem.name}
        fileName={iconItem.fileName}
        isHidden={iconItem.isHidden}
        baseUrl={baseUrl}
      />
    ));

  return (
    <div className="icons-group">
      <h3 className="icons-group__title">{group.name}</h3>
      <div className="icons-group__content">
        {images}
      </div>
    </div>
  );
}

IconsGroup.propTypes = {
  group: PropTypes.shape({
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  baseUrl: PropTypes.string.isRequired,
};
