import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessReset, pairGuessed, deregisterUser } from '../../actions';
import PropTypes from 'prop-types';

import ReactIcon from '../icons/ReactIcon/ReactIcon';
import LogoutIcon from '../icons/LogoutIcon/LogoutIcon';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = { currentlyGuessedPair: [] };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // TODO - Design a better Redux state; Should track globally which card is turned?

        // console.log('Next props are: ', nextProps.guessed);
        if (nextProps.guessed.length === 2) {
            if (nextProps.guessed[0] === nextProps.guessed[1]) {
                console.log('Tocni su pogodjeni!', nextProps.guessed);
                this.props.pairGuessed();
            } else {
                console.log('Krivi su pogodjeni', nextProps.guessed);
            }

            console.log('Resetiranje...');
            this.props.guessReset();
            // setTimeout(() => {
            //     console.log('Resetiranje...');
            //     this.props.guessReset();
            // }, 1500);
        }
    }

    handleLogoutClick() {
        this.props.deregisterUser();
    }

    render() {
        return (
            <div className="sidebar" style={{...this.props.style}}>
                <header className="sidebar-header">
                    <ReactIcon color='#fff' />
                </header>
                <hr/>
                <div className="sidebar-body">
                    {/*<div className="game-stats">Pairs guessed: {this.props.pairsGuessed}</div>*/}
                    <div className="sidebar-body__content">
                        <div className="game-stats">
                            <div className="stats-info">Pairs Guessed:</div>
                            <div className="pairs__guessed">0</div>
                            {/*<span className="pairs__total">/24</span>*/}
                        </div>
                    </div>
                    <div className="sidebar-body__logout" onClick={this.handleLogoutClick}>
                        <LogoutIcon />
                        <div className="logout-message">Exit game</div>
                    </div>
                </div>
            </div>
        );
    }

}

Sidebar.propTypes = {
    style: PropTypes.object.isRequired,
    guessReset: PropTypes.func.isRequired,
    pairGuessed: PropTypes.func.isRequired,
    deregisterUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { guessed: state.guess, pairsGuessed: state.stats.pairGuesses };
}

export default connect(mapStateToProps, { guessReset, pairGuessed, deregisterUser })(Sidebar);