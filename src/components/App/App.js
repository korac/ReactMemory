<<<<<<< HEAD
import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';
=======
import React, {Component} from 'react';
import logo from '../../logo.svg';

import MemoryCard from '../MemoryCard';
>>>>>>> initializing app; first card compontent and icons

class App extends Component {
    render() {
        return (
            <div className="App">
<<<<<<< HEAD
                <Sidebar />
                <MemoryCardContainer />
=======
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="cards-container">
                    <MemoryCard />
                </div>
>>>>>>> initializing app; first card compontent and icons
            </div>
        );
    }
}

export default App;
