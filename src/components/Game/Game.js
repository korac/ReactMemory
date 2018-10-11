import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Sidebar from '../Sidebar';
import MemoryCardContainer from '../MemoryCardContainer';
import {
  sidebarTransitionStyles,
  containerTransitionStyles
} from '../MemoryCardContainer/animationStyles';
import styles from './Game.styles';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = { game: false };
  }

  componentDidMount() {
    document.body.classList.add('body--blue');
    this.setState({ game: true });
  }

  componentWillUnmount() {
    document.body.classList.remove('body--blue');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.game}>
        <Transition in={this.state.game} timeout={1000}>
          {sidebarState => {
            return (
              <Sidebar style={{ ...sidebarTransitionStyles[sidebarState] }} />
            );
          }}
        </Transition>
        <Transition in={this.state.game} timeout={1000}>
          {containerState => {
            return (
              <MemoryCardContainer
                style={{ ...containerTransitionStyles[containerState] }}
                totalCardPairs={this.props.totalCardPairs}
              />
            );
          }}
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

export default injectSheet(styles)(connect(mapStateToProps)(Game));
