import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';
import { sidebarTransitionStyles, containerTransitionStyles } from "../MemoryCardContainer/animationStyles";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = { game: false};
    }

    componentWillMount() {
        this.redirectIfDeregistered(this.props.username);
    }

    componentDidMount() {
        document.body.classList.add('body--blue');
        this.setState({ game: true });
    }

    componentWillUnmount() {
        document.body.classList.remove('body--blue');
    }

    componentWillReceiveProps(nextProps) {
        this.redirectIfDeregistered(nextProps.username);
    }

    redirectIfDeregistered(username) {
        if(!username) {
            this.props.history.push('/register');
        }
    }

    render() {
        return (
            <div className="game">
                <Transition in={this.state.game} timeout={1000}>
                    {
                        (sidebarState) => {
                            return <Sidebar style={{...sidebarTransitionStyles[sidebarState]}} />;
                        }
                    }
                </Transition>
                <Transition in={this.state.game} timeout={1000}>
                    {
                        (containerState) => {
                            return <MemoryCardContainer style={{...containerTransitionStyles[containerState]}} />;
                        }
                    }
                </Transition>
            </div>
        );
    }

}

Game.propTypes = {
    username: PropTypes.string
};

function mapStateToProps(state) {
    return { username: state.stats.username };
}

export default connect(mapStateToProps)(Game);