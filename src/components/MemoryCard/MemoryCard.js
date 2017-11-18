import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import * as actions from '../../actions';

import background from './blue.jpg';
=======

import CssIcon from '../icons/CssIcon/CssIcon';
import RubyIcon from '../icons/RubyIcon/RubyIcon';
import RailsIcon from '../icons/RailsIcon/RailsIcon';
import ReactIcon from '../icons/ReactIcon/ReactIcon';
import HtmlIcon from '../icons/HtmlIcon/HtmlIcon';
import JsIcon from '../icons/JsIcon/JsIcon';
import PyIcon from '../icons/PyIcon/PyIcon';
import PhpIcon from '../icons/PhpIcon/PhpIcon';
>>>>>>> initializing app; first card compontent and icons

class MemoryCard extends Component {
    constructor(props) {
        super(props);

<<<<<<< HEAD
        this.state = { flipped: false, cardId: this.props.cardId };
=======
        this.state = { flipped: false };
>>>>>>> initializing app; first card compontent and icons
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState({ flipped: !this.state.flipped });
<<<<<<< HEAD
        this.props.guessCard(this.state.cardId);
        // console.log(`Card Id je: ${this.state.cardId}`)
=======
>>>>>>> initializing app; first card compontent and icons
    }

    cardStateStyle() {
        return this.state.flipped ? 'memory-card memory-card--flipped' : 'memory-card'
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="card-perspective">
                <div className={this.cardStateStyle()} onClick={this.flipCard}>
                    <div className="card-side card-side__front">
                        <img src={background} className="front-background" alt="Card background" />
                    </div>
                    <div className="card-side card-side__back">
                        {this.props.children}
                    </div>
=======
            <div className={this.cardStateStyle()} onClick={this.flipCard}>
                <div className="card-side card-side__front"></div>
                <div className="card-side card-side__back">
                    <PhpIcon />
>>>>>>> initializing app; first card compontent and icons
                </div>
            </div>
        );
    }

}

<<<<<<< HEAD
export default connect(null, actions)(MemoryCard);
=======
export default MemoryCard;
>>>>>>> initializing app; first card compontent and icons
