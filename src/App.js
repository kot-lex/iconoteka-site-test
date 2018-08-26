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
        style: 'fill',
        search: ''
    };

    constructor(props) {
        super(props);
        this.onStyleChange = this.onStyleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(event) {
        this.setState({
            search: event.target.value
        });

        this.filterIcons();
    }

    onStyleChange(event, style) {
        event.preventDefault();
    }

    filterIcons(style = this.state.style, search = this.state.search) {
        const Iconoteka = Object.assign({}, this.state.Iconoteka);
        const filteredGroups = this.state.Iconoteka.items.map(group => this.filterIconGroup(group, search, style));
        Iconoteka.items = filteredGroups;
        this.setState({ Iconoteka });
    }

    filterIconGroup(group, search, style) {
        let hiddenItems = 0;
        const items = group.items && group.items.map(iconItem => {
            const isHidden = !iconItem.path.includes(search.toLowerCase());
            if (isHidden) {
                hiddenItems += 1;
            }
            const newItem = Object.assign({}, iconItem, {
                isHidden
            });
            return newItem;
        });

        return Object.assign({}, group, {
            items,
            hiddenItems
        })
    }

  render() {
    return (
      <div className="app">
        <Header/>
        <IconsFilter onChange={this.onSearch} style={this.state.style} onStyleChange={this.onStyleChange} />
        <IconsGrid iconoteka={this.state.Iconoteka} baseUrl={baseUrl} />
      </div>
    );
  }
}

export default App;
