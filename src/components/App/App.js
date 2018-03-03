import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";

import Game from "../Game";
import Register from "../Register";
import requireAuthentication from "../HOCs/requireAuthentication";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={requireAuthentication(Game, true)} />
                <Route path='/register' component={requireAuthentication(Register, false)} />
            </Switch>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.stats.authenticated };
}

export default withRouter(connect(mapStateToProps)(App));

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