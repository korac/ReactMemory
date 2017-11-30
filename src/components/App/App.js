import React, { Component } from 'react';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sidebar />
                <MemoryCardContainer />
            </div>
        );
    }
}

export default App;
