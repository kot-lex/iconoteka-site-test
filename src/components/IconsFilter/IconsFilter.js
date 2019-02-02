import React from 'react';
import PropTypes from 'prop-types';
import './IconsFilter.scss';
import Dropdown from '../Dropdown';

export default class IconsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { onChange } = this.props;
    
    return (
      <div className="icons-filter">

        <div className="icons-filter__search-wrap">
          <input
            className="icons-filter__search"
            placeholder="search icon"
            ref={this.inputRef}
            onChange={onChange}
            onKeyUp={onChange}
          />
        </div>

        <ul className="icons-filter__style">
        <li>
          <Dropdown
            onChange={item => console.log(item)}
            items={[
              {
                key: 'bold',
                title: 'Bold',
              },
              {
                key: 'regular',
                title: 'Regular',
                selected: true
              },
              {
                key: 'medium',
                title: 'Medium',
              },
              {
                key: 'light',
                title: 'Light',
              },
            ]}
          />
          </li>
          <li>
            <Dropdown
              onChange={item => this.props.onStyleChange(item)}
              items={[
                {
                  key: 'stroke',
                  title: 'Stroke',
                },
                {
                  key: 'fill',
                  title: 'Fill',
                }
              ]}
            />
          </li>
        </ul>

      </div>);
  }
}

IconsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['fill', 'stroke']).isRequired,
};
