import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Iconoteka = require('./iconoteka/iconoteka.json');
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';


class App extends Component {
    onChange = (e) => {
        const Iconoteka = Object.assign({}, this.state.Iconoteka);
        Iconoteka.items = this.state.Iconoteka.items.map(group => this.filter(group, e.target.value));
        this.setState({ Iconoteka });
    };

    state = {
        Iconoteka
    };

    filter(group, search) {
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
        const images = group.items && group.items.map(iconItem => {
            const icon = require(`./iconoteka/${iconItem.path}`);
            return !iconItem.hidden && <img src={baseUrl + icon} alt="icon" style={{ width: '100px', height: '100px' }} />
        }).filter(item => item);

        return (images && !!images.length) && (
            <div>
                <h1>{group.name}</h1>
                {images}
            </div>
        )
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <input style={{fontSize: '200%', width: '600px', padding: '3px'}} onChange={this.onChange} placeholder="Search"/>
            {this.state.Iconoteka.items && this.state.Iconoteka.items.map(group => this.getIcons(group))}
        </p>
      </div>
    );
  }
}

export default App;
