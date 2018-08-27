import React, { Component } from 'react';
import './App.css';
import IconsFilter from './components/IconsFilter';
import Header from './components/Header';
import IconsGrid from './components/IconsGrid/IconsGrid';

const Iconoteka = require('./iconoteka/iconoteka.json');

const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';


class App extends Component {
    state = {
      Iconoteka,
      filteredItems: Iconoteka.items,
      style: 'fill',
      search: '',
    };

    constructor(props) {
      super(props);
      this.onStyleChange = this.onStyleChange.bind(this);
      this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
      this.filterIcons();
    }

    onSearch(event) {
      this.setState({
        search: event.target.value,
      });

      this.filterIcons(this.state.style, event.target.value);
    }

    onStyleChange(event, style) {
      event.preventDefault();
      this.setState({ style });
      this.filterIcons(style);
    }

    filterIcons(style = 'fill', search = '') {
      const { Iconoteka: iconoteka } = this.state;
      const filteredGroups = iconoteka.items
        .map(
          group => this.filterIconGroup(group, search, style),
        )
        .filter(group => group.items && group.items.length);

      this.setState({ filteredItems: filteredGroups });
    }

    filterIconGroup(group, search, style) {
      const items = group.items && group.items
        // Filter by search string
        .filter(iconItem => iconItem.path.includes(search.toLowerCase()))
        // Filter by style
        .filter((iconItem) => {
          return (style === 'fill' && iconItem.isFill)
          || (style === 'stroke' && iconItem.isStroke);
        });

      return Object.assign({}, group, {
        items,
      });
    }

    render() {
      const { style, filteredItems } = this.state;
      return (
        <div className="app">
          <Header />
          <IconsFilter
            onChange={this.onSearch}
            style={style}
            onStyleChange={this.onStyleChange}
          />
          <IconsGrid items={filteredItems} baseUrl={baseUrl} />
        </div>
      );
    }
}

export default App;
