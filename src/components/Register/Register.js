import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser} from "../../actions";
import { Transition } from 'react-transition-group';

import SpinnerIcon from '../icons/SpinnerIcon/SpinnerIcon';
import CardsIcon from '../icons/CardsIcon/CardsIcon';
import UserIcon from "../icons/UserIcon/UserIcon";

const spinnerTransitionStyles = {
    entered: {
        animationDuration: '6s',
        animationName: 'rotateSpinner',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
    },
    exiting: {
        animationDuration: '6s',
        animationName: 'rotateSpinner',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationPlayState: 'paused'
    },
    exited: {
        animationDuration: '6s',
        animationName: 'rotateSpinner',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationPlayState: 'paused'
    }
};

const cardsTransitionStyles = {
    entered: {
        transform: 'scale(0)',
        transition: 'all .2s ease .1s'
    }
};

const userTransitionStyles = {
    entered: {
        transform: 'scale(1)',
        transition: 'all .2s ease .2s'
    }
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = { registering: false };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        this.redirectIfRegistered(this.props.username);
    }

    componentDidMount() {
        document.body.classList.add('body--auth');
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.username) {
            this.setState({ registering: false });
        }
        // this.redirectIfRegistered(nextProps.username);
    }

    redirectIfRegistered(username) {
        if(username) {
            this.props.history.push('/');
        }
    }

    renderField(field) {
        const { meta } = field;
        return (
            <div className="form-field">
                <div className={`field-label ${meta.active || meta.dirty ? 'field--focused' : ''}`}>YOUR NAME</div>
                <div className={`field-input ${meta.active ? 'field--focused' : ''}`}>
                    <input
                        type="text"
                        autoComplete="off"
                        { ...field.input }
                    />
                </div>
            </div>
        );
    }

    handleFormSubmit({ username }) {
        this.setState({ registering: true });
        this.props.registerUser(username, this.props.history);
    }

    render() {
        const { handleSubmit, valid } = this.props;

        return (
            <div className="register-wrapper">
                <div className="register-card">
                    <div className="card-content">
                        <div className="card-content__icon">
                            <Transition in={this.state.registering} timeout={0}>
                                {
                                    (spinnerState) => {
                                        return <SpinnerIcon style={{...spinnerTransitionStyles[spinnerState]}} />;
                                    }
                                }
                            </Transition>
                            <Transition in={!!this.props.username} timeout={0}>
                                {
                                    (cardsState) => {
                                        return <CardsIcon style={{...cardsTransitionStyles[cardsState]}} />;
                                    }
                                }
                            </Transition>
                            <Transition in={!!this.props.username} timeout={0}>
                                {
                                    (userState) => {
                                        return <UserIcon style={{...userTransitionStyles[userState]}} />;
                                    }
                                }
                            </Transition>
                        </div>
                        <form className="card-content__form" onSubmit={handleSubmit(this.handleFormSubmit)}>
                            <div className="form-title">Game Register</div>
                            <div className="form-description">
                                Please enter your name before the game starts. <span role="img" aria-label="emoji">🚀</span>
                            </div>
                            <div className="form-fields">
                                <Field
                                    type="text"
                                    name="username"
                                    component={this.renderField}
                                />
                                <div className="form-submit">
                                    <button type="submit" className={`form-button ${ valid ? 'form-button--active' : ''}`}>Start Game</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { username: state.stats.username };
}

function validate(values) {
    const errors = {};

    if(!values.username) {
        errors.username = 'Please enter a name.';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'RegisterForm'
})(
    connect(mapStateToProps, { registerUser })(Register)
);