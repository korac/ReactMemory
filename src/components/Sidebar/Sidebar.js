import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { guessReset, pairGuessed } from '../../actions';

import ReactIcon from '../icons/ReactIcon/ReactIcon';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = { currentlyGuessedPair: [] }
    }

    componentWillReceiveProps(nextProps) {
        // TODO - Design a better Redux state; Should track globally which card is turned?

        // console.log('Next props are: ', nextProps.guessed);
        if (nextProps.guessed.length === 2) {
            if (nextProps.guessed[0] === nextProps.guessed[1]) {
                console.log('Tocni su pogodjeni!', nextProps.guessed);
                this.props.pairGuessed();
            } else {
                console.log('Krivi su pogodjeni', nextProps.guessed);
            }

            console.log('Resetiranje...');
            this.props.guessReset();
            // setTimeout(() => {
            //     console.log('Resetiranje...');
            //     this.props.guessReset();
            // }, 1500);
        }
    }

    render() {
        return (
            <div className="sidebar" style={{...this.props.style}}>
                <header className="sidebar-header">
                    <ReactIcon color='#fff' />
                </header>
                <div className="sidebar-body">
                    {/*<div className="game-stats">Pairs guessed: {this.props.pairsGuessed}</div>*/}
                    {/*<Link to='/register'>Back to Register</Link>*/}
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { guessed: state.guess, pairsGuessed: state.stats.pairGuesses };
}

export default connect(mapStateToProps, { guessReset, pairGuessed })(Sidebar);