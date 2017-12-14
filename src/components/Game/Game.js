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

    componentDidMount() {
        document.body.classList.add('body--blue');
    }

    componentWillUnmount() {
        document.body.classList.remove('body--blue');
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