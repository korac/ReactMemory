import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";

import ModalConductor from "../ModalConductor";
import Game from "../Game";
import Register from "../Register";
import requireAuthentication from "../HOCs/requireAuthentication";

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={requireAuthentication(Game, true)} />
                    <Route path='/register' component={requireAuthentication(Register, false)} />
                </Switch>
                <ModalConductor />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.stats.authenticated };
}

export default withRouter(connect(mapStateToProps)(App));