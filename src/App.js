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

    onSearch(event) {
      this.setState({
        search: event.target.value,
      });

      this.filterIcons();
    }

    onStyleChange(event, style) {
      event.preventDefault();
    }

    filterIcons({ style } = this.state, { search } = this.state) {

      const filteredGroups = this.state.Iconoteka.items
        .map(
          group => this.filterIconGroup(group, search, style),
        )
        .filter(group => group.items && group.items.length);

      this.setState({ filteredItems: filteredGroups });
    }

    filterIconGroup(group, search, style) {
      const items = group.items && group.items.filter((iconItem) => {
        return iconItem.path.includes(search.toLowerCase());
      });

      return Object.assign({}, group, {
        items,
      });
    }

    render() {
      return (
        <div className="app">
          <Header />
          <IconsFilter
            onChange={this.onSearch}
            style={this.state.style}
            onStyleChange={this.onStyleChange}
          />
          <IconsGrid items={this.state.filteredItems} baseUrl={baseUrl} />
        </div>
      );
    }
}

export default App;
