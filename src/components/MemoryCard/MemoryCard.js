import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessCard } from '../../actions/index';

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

  cardStateStyle() {
    return this.state.flipped || this.state.guessed
      ? 'memory-card memory-card--flipped'
      : 'memory-card';
  }

  render() {
    return (
      <div className="card-perspective">
        <div className={this.cardStateStyle()} onClick={this.flipCard}>
          <div className="card-side card-side__front">
            <img
              src={background}
              className="front-background"
              alt="Card background"
            />
          </div>
          <div className="card-side card-side__back">{this.props.children}</div>
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

export default connect(
  mapStateToProps,
  { guessCard }
)(MemoryCard);
