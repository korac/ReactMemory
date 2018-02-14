import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deregisterUser } from '../../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ReactIcon from '../icons/ReactIcon/ReactIcon';
import LogoutIcon from '../icons/LogoutIcon/LogoutIcon';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = { currentlyGuessedPair: [] };
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
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
                    <div className="sidebar-body__content">
                        <div className="game-stats">
                            <div className="stats-info">Pairs Guessed:</div>
                            <div className="pairs__guessed">{this.props.pairsGuessed || 0}</div>
                        </div>
                    </div>
                    <div>
                        <Link to="/register">Register</Link>>
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
    deregisterUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { guessed: state.guess, pairsGuessed: state.guess.pairsGuessed.length };
}

export default connect(mapStateToProps, { deregisterUser })(Sidebar);