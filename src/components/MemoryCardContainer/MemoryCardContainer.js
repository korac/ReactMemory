import React, { Component } from 'react';
import MemoryCard from "../MemoryCard";
import Wrapper from './Wrapper';

import CssIcon from '../icons/CssIcon/CssIcon';
import RailsIcon from '../icons/RailsIcon/RailsIcon';
import ReactIcon from '../icons/ReactIcon/ReactIcon';
import HtmlIcon from '../icons/HtmlIcon/HtmlIcon';
import JsIcon from '../icons/JsIcon/JsIcon';
import PyIcon from '../icons/PyIcon/PyIcon';
import PhpIcon from '../icons/PhpIcon/PhpIcon';
import JavaIcon from '../icons/JavaIcon/JavaIcon';

class MemoryCardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { cardsNumber: 6 };
    }

    getIcons() {
        return [<JsIcon />, <PyIcon />, <ReactIcon />, <RailsIcon />, <HtmlIcon />, <CssIcon />, <JavaIcon />, <PhpIcon />];
    }

    renderCards() {
        const cards = [];
        const icons = this.getIcons();
        for(let i = 0; i < this.state.cardsNumber / 2; i++) {
            const first_card = <MemoryCard key={`first-card-${i}`} cardId={`card-${i}`}>{icons[i]}</MemoryCard>;
            const second_card = <MemoryCard key={`second-card-${i}`} cardId={`card-${i}`}>{icons[i]}</MemoryCard>;
            cards.push(first_card, second_card);
        }
        return cards;
    }

    shuffleCards(cards) {
        let m = cards.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = cards[m];
            cards[m] = cards[i];
            cards[i] = t;
        }

        return cards;
    }

    render() {
        return (
            <Wrapper no={this.state.cardsNumber}>
                {this.shuffleCards(this.renderCards())}
            </Wrapper>
        );
    }

}

export default MemoryCardContainer;