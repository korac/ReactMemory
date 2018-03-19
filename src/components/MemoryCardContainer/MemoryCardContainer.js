import React, { Component } from 'react';
import MemoryCard from "../MemoryCard";

import CssIcon from '../icons/CssIcon/CssIcon';
import RailsIcon from '../icons/RailsIcon/RailsIcon';
import ReactIcon from '../icons/ReactIcon/ReactIcon';
import HtmlIcon from '../icons/HtmlIcon/HtmlIcon';
import JsIcon from '../icons/JsIcon/JsIcon';
import AngularIcon from '../icons/AngularIcon/AngularIcon';
import PyIcon from '../icons/PyIcon/PyIcon';
import PhpIcon from '../icons/PhpIcon/PhpIcon';
import JavaIcon from '../icons/JavaIcon/JavaIcon';
import AndroidIcon from "../icons/AndroidIcon/AndroidIcon";
import CSharpIcon from "../icons/CSharpIcon/CSharpIcon";
import D3Icon from "../icons/D3Icon/D3Icon";
import DebianIcon from "../icons/DebianIcon/DebianIcon";
import DockerIcon from "../icons/DockerIcon/DockerIcon";
import GithubIcon from "../icons/GithubIcon/GithubIcon";
import MysqlIcon from "../icons/MysqlIcon/MysqlIcon";
import PostgresIcon from "../icons/PostgresIcon/PostgresIcon";
import RedisIcon from "../icons/RedisIcon/RedisIcon";
import AppleIcon from "../icons/AppleIcon/AppleIcon";
import AWSIcon from "../icons/AWSIcon/AWSIcon";
import DjangoIcon from "../icons/DjangoIcon/DjangoIcon";
import DotNetIcon from "../icons/DotNetIcon/DotNetIcon";
import FacebookIcon from "../icons/FacebookIcon/FacebookIcon";
import FirefoxIcon from "../icons/FirefoxIcon/FirefoxIcon";
import GitIcon from "../icons/GitIcon/GitIcon";
import GoIcon from "../icons/GoIcon/GoIcon";
import HerokuIcon from "../icons/HerokuIcon/HerokuIcon";
import MongoIcon from "../icons/MongoIcon/MongoIcon";
import NodeIcon from "../icons/NodeIcon/NodeIcon";
import SassIcon from "../icons/SassIcon/SassIcon";
import SwiftIcon from "../icons/SwiftIcon/SwiftIcon";
import VSIcon from "../icons/VSIcon/VSIcon";
import VueIcon from "../icons/VueIcon/VueIcon";
import WebpackIcon from "../icons/WebpackIcon/WebpackIcon";
import WindowsIcon from "../icons/WindowsIcon/WindowsIcon";

class MemoryCardContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { totalCardPairs: 0 };
    }

    componentDidMount() {
        this.setState({ totalCardPairs: this.props.totalCardPairs });
    }

    getIcons() {
        return [
            <JsIcon />,
            <PyIcon />,
            <ReactIcon />,
            <RailsIcon />,
            <AngularIcon />,
            <HtmlIcon />,
            <CssIcon />,
            <JavaIcon />,
            <PhpIcon />,
            <AndroidIcon />,
            <CSharpIcon />,
            <D3Icon />,
            <DebianIcon />,
            <DockerIcon />,
            <GithubIcon />,
            <MysqlIcon />,
            <PostgresIcon />,
            <RedisIcon />,
            <AppleIcon />,
            <AWSIcon />,
            <DjangoIcon />,
            <DotNetIcon />,
            <FacebookIcon />,
            <FirefoxIcon />,
            <GitIcon />,
            <GoIcon />,
            <HerokuIcon />,
            <MongoIcon />,
            <NodeIcon />,
            <SassIcon />,
            <SwiftIcon />,
            <VSIcon />,
            <VueIcon />,
            <WebpackIcon />,
            <WindowsIcon />
        ];
    }

    renderCards() {
        const cards = [];
        const icons = this.getIcons();
        for(let i = 0; i < this.state.totalCardPairs; i++) {
            const first_card = <MemoryCard key={`first-card-${i}`} cardKey={`first-card-${i}`} cardId={`card-${i}`}>{icons[i]}</MemoryCard>;
            const second_card = <MemoryCard key={`second-card-${i}`} cardKey={`second-card-${i}`} cardId={`card-${i}`}>{icons[i]}</MemoryCard>;
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
            <div className="main-window" style={{...this.props.style}}>
                <div className="cards-container">
                    {this.shuffleCards(this.renderCards())}
                </div>
            </div>
        );
    }

}

export default MemoryCardContainer;