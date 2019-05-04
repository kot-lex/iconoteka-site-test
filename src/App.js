import React, { Component } from 'react';
import './App.scss';
import IconsGrid from './components/IconsGrid';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AppContext from './AppContext';

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
      this.changeOpenDropdownState = this.changeOpenDropdownState.bind(this);
    }

    componentDidMount() {
      this.filterIcons();
    }

    onSearch(event) {
      this.setState({
        search: event.target.value,
      });

      const { style } = this.state;
      this.filterIcons(style, event.target.value);
    }

    onStyleChange(style) {
      this.setState({ style: style.key });
      this.filterIcons(style.key);
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

    changeOpenDropdownState(name, isOpen) {
      this.setState({
        openDropdown: isOpen ? name : null,
      });
    }

    /* eslint-disable */
    filterIconGroup(group, search, style) {
      const items = group.items && group.items
        // Filter by search string
        .filter(iconItem => iconItem.path.includes(search.toLowerCase()))
        // Filter by style
        .filter(iconItem => (style === 'fill' && iconItem.isFill)
          || (style === 'stroke' && iconItem.isStroke));

      return Object.assign({}, group, {
        items,
      });
    }
    /* eslint-enable */

    render() {
      const { style, filteredItems } = this.state;
      return (
        <AppContext.Provider value={{
          openDropdown: this.state.openDropdown,
          changeOpenDropdownState: this.changeOpenDropdownState,
        }}
        >
          <div className="app">
            <Hero onSearch={this.onSearch} style={style} onStyleChange={this.onStyleChange} />

            <main className="app__content">
              <IconsGrid items={filteredItems} baseUrl={baseUrl} />
            </main>
            <Footer />
          </div>
        </AppContext.Provider>
      );
    }
}

export default App;
