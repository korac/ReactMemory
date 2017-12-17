import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Game from "../Game";
import Register from "../Register";

class App extends Component {
    render() {
        return [
            <Route exact path='/' component={Game} key="game-component" />,
            <Route exact path='/register' component={Register} key="register-component" />
        ];
    }
}

export default App;