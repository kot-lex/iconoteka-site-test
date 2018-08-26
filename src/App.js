import React, { Component } from 'react';
import './App.css';
import IconsGroup from './components/IconsGroup';
import IconsFilter from './components/IconsFilter';
import Header from './components/Header';

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
        Iconoteka.items = this.state.Iconoteka.items.map(group => this.filterIconGroup(group, search));
        this.setState({ Iconoteka });
    }
    filterIconGroup(group, search, style) {
        const items = group.items && group.items.map(iconItem => {
            const newItem = Object.assign({}, iconItem, {
                hidden: !iconItem.path.includes(search.toLowerCase())
            });
            return newItem;
        });

        return Object.assign({}, group, {
            items
        })
    }

    getIcons(group) {
        return <IconsGroup baseUrl={baseUrl} group={group} />
    }

  render() {
    return (
      <div className="app">
        <Header/>
        <IconsFilter onChange={this.onSearch} style={this.state.style} onStyleChange={this.onStyleChange} />
        {this.state.Iconoteka.items && this.state.Iconoteka.items.map(group => this.getIcons(group))}
      </div>
    );
  }
}

export default App;
