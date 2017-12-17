import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';

const sidebarTransitionStyles = {
    entering: {
        opacity: 1,
        transition: 'opacity 1s ease'
    },
    entered: {
        opacity: 1,
    },
    exited: {
        opacity: 0
    }
};

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = { sidebar: false};
    }

    componentWillMount() {
        if(!this.props.username) {
            this.props.history.push('/register');
        }
    }

    componentDidMount() {
        document.body.classList.add('body--blue');
        this.setState({ sidebar: true });
    }

    componentWillUnmount() {
        document.body.classList.remove('body--blue');
    }

    render() {
        return (
            <div className="game">
                <Transition in={this.state.sidebar} timeout={1000}>
                    {
                        (sidebarState) => {
                            console.log(sidebarState);
                            return <Sidebar style={{...sidebarTransitionStyles[sidebarState]}} />;
                        }
                    }
                </Transition>
                {/*<MemoryCardContainer />*/}
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { username: state.stats.username };
}

export default connect(mapStateToProps)(Game);