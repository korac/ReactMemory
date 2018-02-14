import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Game from "../Game";
import Register from "../Register";

class App extends Component {
    render() {
        return [
            <Route exact path='/' component={Game} key="game-component" />,
            <Route path='/register' component={Register} key="register-component" />
        ];
    }
}

export default App;

// <Route exact path='/'
//        render={routeProps => (
//            this.props.username ? <Game {...routeProps} /> : <Redirect to="/register" />
//        )}
//        key="game-component"
// />,
//     <Route exact path='/register'
//            render={routeProps => {
//                console.log('aaa');
//                return (
//                    !this.props.username ? <Register {...routeProps} /> : <Redirect to="/" />
//                )}}
//            key="register-component"
//     />