import React from 'react';
import PropTypes from 'prop-types';
import './IconsFilter.scss';
import Dropdown from '../Dropdown';
import AppContext from '../../AppContext';

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

      <AppContext.Consumer>
        {({ openDropdown, changeOpenDropdownState }) => (
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
                  name="thickness"
                  openDropdown={openDropdown}
                  onChangeOpenDropdownState={changeOpenDropdownState}
                  items={[
                    {
                      key: 'bold',
                      title: 'Bold',
                    },
                    {
                      key: 'regular',
                      title: 'Regular',
                      selected: true,
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
                  key="test"
                  onChange={item => this.props.onStyleChange(item)}
                  openDropdown={openDropdown}
                  onChangeOpenDropdownState={changeOpenDropdownState}
                  name="style"
                  items={[
                    {
                      key: 'stroke',
                      title: 'Stroke',
                    },
                    {
                      key: 'fill',
                      title: 'Fill',
                    },
                  ]}
                />
              </li>
            </ul>

          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

IconsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  onStyleChange: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['fill', 'stroke']).isRequired,
};
