import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import background from './blue.jpg';

class MemoryCard extends Component {
    constructor(props) {
        super(props);

        this.state = { flipped: false, cardId: this.props.cardId };
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState({ flipped: !this.state.flipped });
        this.props.guessCard(this.state.cardId);
        // console.log(`Card Id je: ${this.state.cardId}`)
    }

    cardStateStyle() {
        return this.state.flipped ? 'memory-card memory-card--flipped' : 'memory-card'
    }

    render() {
        return (
            <div className="card-perspective">
                <div className={this.cardStateStyle()} onClick={this.flipCard}>
                    <div className="card-side card-side__front">
                        <img src={background} className="front-background" alt="Card background" />
                    </div>
                    <div className="card-side card-side__back">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, actions)(MemoryCard);