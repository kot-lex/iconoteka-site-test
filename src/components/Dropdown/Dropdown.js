import React, { Component } from 'react';

class Dropdown extends Component {
  state = {
    isOpen: false,
    selected: null,
  };

  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    const preselected = props.items.find(item => item.selected);
    // Select the first item if nothing proivded
    const selected = preselected || props.items[0];

    this.state = {
      selected
    }
  }

  onChange(e) {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onItemSelect(item) {
    this.setState({
      selected: item,
    });
    this.props.onChange(item);
  }

  render() {
    const label = this.state.selected.title;
    return (
      <div className="icons-filter__control" onClick={this.onChange}>
        <a className="icons-filter__style-item-name" href="#regular">{label}</a>
        <ul className="icons-filter__dropdown" style={this.state.isOpen ? { display: 'block' } : {}}>
          { this.props.items.map(item => <li data-key={item.key} onClick={() => this.onItemSelect(item)}>{item.title}</li>) }
        </ul>
      </div>
    );
  }
}

export default Dropdown;
