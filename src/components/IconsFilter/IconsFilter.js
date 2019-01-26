import React from 'react';
import PropTypes from 'prop-types';
import './IconsFilter.css';

export default class IconsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { onChange, style, onStyleChange } = this.props;
    return (
      <div className="icons-filter">
        <input
          className="icons-filter__search"
          onChange={onChange}
          onKeyUp={onChange}
          placeholder="Search"
          ref={this.inputRef}
        />

        <ul className="icons-filter__style">
          <li className={
            style === 'fill'
              ? 'icons-filter__control icons-filter__control_active'
              : 'icons-filter__control'
          }
          >
            <a href="#fill" onClick={event => onStyleChange(event, 'fill')}>Fill</a>
            <ul className="icons-filter__dropdown">
              <li>Bold</li>
              <li>Regular</li>
              <li>Medium</li>
              <li>Light</li>
            </ul>
          </li>
          <li className={
            style === 'stroke'
              ? 'icons-filter__control icons-filter__control_active'
              : 'icons-filter__control'
          }
          >
            <a href="#stroke" onClick={event => onStyleChange(event, 'stroke')}>Stroke</a>
            <ul className="icons-filter__dropdown">
              <li>Stroke</li>
              <li>Fill</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

IconsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['fill', 'stroke']).isRequired,
};
