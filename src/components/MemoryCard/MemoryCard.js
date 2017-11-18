import React, { Component } from 'react';

import CssIcon from '../icons/CssIcon/CssIcon';
import RubyIcon from '../icons/RubyIcon/RubyIcon';
import RailsIcon from '../icons/RailsIcon/RailsIcon';
import ReactIcon from '../icons/ReactIcon/ReactIcon';
import HtmlIcon from '../icons/HtmlIcon/HtmlIcon';
import JsIcon from '../icons/JsIcon/JsIcon';
import PyIcon from '../icons/PyIcon/PyIcon';
import PhpIcon from '../icons/PhpIcon/PhpIcon';

class MemoryCard extends Component {
    constructor(props) {
        super(props);

        this.state = { flipped: false };
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        this.setState({ flipped: !this.state.flipped });
    }

    cardStateStyle() {
        return this.state.flipped ? 'memory-card memory-card--flipped' : 'memory-card'
    }

    render() {
        return (
            <div className={this.cardStateStyle()} onClick={this.flipCard}>
                <div className="card-side card-side__front"></div>
                <div className="card-side card-side__back">
                    <PhpIcon />
                </div>
            </div>
        );
    }

}

export default MemoryCard;