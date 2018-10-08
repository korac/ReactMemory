import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout, showWinModal } from '../../actions';
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
    if (nextProps.pairsGuessed === this.props.totalCardPairs) {
      this.props.showWinModal();
    }
  }

  handleLogoutClick() {
    this.props.userLogout();
  }

  render() {
    return (
      <div className="sidebar" style={{ ...this.props.style }}>
        <header className="sidebar-header">
          <ReactIcon color="#fff" />
        </header>
        <hr />
        <div className="sidebar-body">
          <div className="sidebar-body__content">
            <div className="game-stats">
              <div className="stats-info">Pairs Guessed:</div>
              <div className="pairs__guessed">
                {this.props.pairsGuessed || 0}
              </div>
            </div>
          </div>
          <div
            className="sidebar-body__logout"
            onClick={this.handleLogoutClick}
          >
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
  userLogout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    guessed: state.guess,
    pairsGuessed: state.guess.pairsGuessed.length,
    totalCardPairs: state.stats.totalCardPairs
  };
}

export default connect(
  mapStateToProps,
  { userLogout, showWinModal }
)(Sidebar);
