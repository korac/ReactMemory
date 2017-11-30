import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';

class Game extends Component {

    componentWillMount() {
        if(!this.props.username) {
            this.props.history.push('/register');
        }
    }

    render() {
        return (
            <div className="game">
                <Sidebar />
                <MemoryCardContainer />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { username: state.stats.username };
}

export default connect(mapStateToProps)(Game);