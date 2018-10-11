import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessCard } from '../../actions/index';
import injectSheet from 'react-jss';

import styles from './MemortCard.styles';
import background from './blue.jpg';

class MemoryCard extends Component {
  constructor(props) {
    super(props);

    this.state = { flipped: false, guessed: false };
    this.flipCard = this.flipCard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.pairsGuessed &&
      nextProps.pairsGuessed.indexOf(this.props.cardId) > -1
    ) {
      this.setState({ guessed: true });
    } else if (!nextProps.previousGuess && this.state.flipped) {
      this.setState({ flipped: false });
    }
  }

  flipCard() {
    if (!this.state.guessed) {
      this.setState({ flipped: !this.state.flipped });
      this.props.guessCard(this.props.cardId, this.props.cardKey);
    }
  }

  // cardStateStyle() {
  //   return this.state.flipped || this.state.guessed
  //     ? 'memory-card memory-card--flipped'
  //     : 'memory-card';
  // }

  render() {
    const { classes } = this.props;
    const { flipped, guessed } = this.state;

    return (
      <div className={classes.cardPerspective}>
        <div
          className={
            flipped || guessed ? classes.memoryCardFlipped : classes.memoryCard
          }
          onClick={this.flipCard}
        >
          <div className={classes.cardSideFront}>
            <img
              src={background}
              className={classes.frontBackground}
              alt="Card background"
            />
          </div>
          <div className={classes.cardSideBack}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    previousGuess: state.guess.previousGuess,
    pairsGuessed: state.guess.pairsGuessed
  };
}

export default injectSheet(styles)(
  connect(
    mapStateToProps,
    { guessCard }
  )(MemoryCard)
);
