import React from 'react';
import PropTypes from 'prop-types';
import './IconCard.css';


export default class IconCard extends React.Component {
  constructor(props) {
    super(props);
    this.linkRef = React.createRef();
    this.gotoLink = this.gotoLink.bind(this);
  }

  gotoLink(event) {
    if (event.target.tagName.toLocaleLowerCase() === 'a') {
      return;
    }

    this.linkRef.current.click();
  }

  render() {
    const {
      isHidden, baseUrl, name, path,
    } = this.props;
    // eslint-disable-next-line
    const icon = require(`../../iconoteka/${path}`);
    const iconAddress = baseUrl + icon;

    return !isHidden && (
      <div className="icon-card" onClick={this.gotoLink}>
        <img className="icon-card__icon" src={baseUrl + icon} alt="icon" />
        <span className="icon-card__title">{name}</span>
        <a className="icon-card__download" ref={this.linkRef} download={path} href={iconAddress}>Download</a>
      </div>
    );
  }
}

IconCard.propTypes = {
  isHidden: PropTypes.bool,
  baseUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

IconCard.defaultProps = {
  isHidden: false,
};
