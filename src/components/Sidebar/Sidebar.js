import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout, showWinModal } from '../../actions';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Sidebar.styles';
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
    const { classes } = this.props;

    return (
      <div className={classes.sidebar} style={{ ...this.props.style }}>
        <header className={classes.sidebarHeader}>
          <ReactIcon className={classes.reactIcon} color="#fff" />
        </header>
        <hr />
        <div className={classes.sidebarBody}>
          <div className={classes.sidebarBodyContent}>
            <div className={classes.gameStats}>
              <div className="stats-info">Pairs Guessed:</div>
              <div className={classes.pairsGuessed}>
                {this.props.pairsGuessed || 0}
              </div>
            </div>
          </div>
          <div
            className={classes.sidebarBodyLogout}
            onClick={this.handleLogoutClick}
          >
            <LogoutIcon />
            <div className={classes.logoutMessage}>Exit game</div>
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

export default injectSheet(styles)(
  connect(
    mapStateToProps,
    { userLogout, showWinModal }
  )(Sidebar)
);
