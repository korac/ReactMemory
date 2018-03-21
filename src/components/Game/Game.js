import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";
import MemoryCardContainer from "../MemoryCardContainer";
import { sidebarTransitionStyles, containerTransitionStyles } from "./animationStyles";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = { game: false };
    }

    componentDidMount() {
        this.setState({ game: true });
        document.body.classList.add('body--blue');
    }

    componentWillUnmount() {
        document.body.classList.remove('body--blue');
    }

    render() {
        return (
            <div className="game">
                <Transition in={this.state.game} timeout={0} mountOnEnter={true}>
                    {
                        (sidebarState) => {
                            return <Sidebar style={{...sidebarTransitionStyles[sidebarState]}} />;
                        }
                    }
                </Transition>
                <Transition in={this.state.game} timeout={0}>
                    {
                        (containerState) => {
                            return <MemoryCardContainer style={{...containerTransitionStyles[containerState]}} totalCardPairs={this.props.totalCardPairs} />;
                        }
                    }
                </Transition>
            </div>
        );
    }

}

// TODO - https://en.wikipedia.org/wiki/Concentration_(game)

Game.propTypes = {
    username: PropTypes.string
};

function mapStateToProps({ stats }) {
    return {
        username: stats.username,
        totalCardPairs: stats.totalCardPairs
    };
}

export default connect(mapStateToProps)(Game);