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

const defaultTitleStyles = {
    entering: {
        position: 'absolute',
        transform: 'translateY(-40px)',
        opacity: 0,
        transition: 'all .3s ease'
    },
    entered: {
        display: 'none'
    }
};

const userTitleStyles = {
    entered: {
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'all .3s ease'
    }
};

const defaultDescriptionStyles = {
    entering: {
        position: 'absolute',
        transform: 'translateY(-40px)',
        opacity: 0,
        transition: 'all .3s ease .1s'
    },
    entered: {
        display: 'none'
    }
};

const userDescriptionStyles = {
    entered: {
        transform: 'translateY(0)',
        opacity: 1,
        transition: 'all .3s ease'
    }
};

const registerTransitionStyles = {
    entering: {
        opacity: 0,
        transition: 'opacity .45s ease'
    }
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = { registering: false, ready: false };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.redirectIfRegistered = this.redirectIfRegistered.bind(this);
    }

    componentWillMount() {
        this.redirectIfRegistered(this.props.username);
    }

    componentDidMount() {
        document.body.classList.add('body--blue');
    }

    componentWillUnmount() {
        document.body.classList.remove('body--blue');
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.username) {
            this.setState({ registering: false });
        }
        // this.redirectIfRegistered(nextProps.username);
    }

    redirectIfRegistered(username = this.props.username) {
        if(username) {
            this.props.history.push('/');
        }
    }

    renderFormContent(valid) {
        if(!this.props.username) {
            return (
                <div className="form-fields">
                    <Field
                        type="text"
                        name="username"
                        component={this.renderField}
                        autofocus={true}
                    />
                    <div className="form-submit">
                        <button type="submit" className={`form-button ${ valid && !this.state.registering ? 'form-button--active' : ''}`}>Confirm name</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="form-fields">
                <div className="form-submit">
                    <button type="button" className="form-button form-button--active" onClick={this.handleStartClick}>Start a game</button>
                </div>
            </div>
        );
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
                        autoFocus={field.autofocus}
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

    handleStartClick() {
        this.setState({ ready: true });
    }

    render() {
        const { handleSubmit, valid } = this.props;

        return (
            <div className="register-wrapper">
                <Transition in={this.state.ready} timeout={450} onEntered={this.redirectIfRegistered}>
                    {
                        (state) => {
                            return (
                                <div className="register-card" style={{...registerTransitionStyles[state]}}>
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
                                            <Transition in={!!this.props.username} timeout={300}>
                                                {
                                                    (titleState) => {
                                                        console.log(titleState);
                                                        return <div className="form-title" style={{...defaultTitleStyles[titleState]}}>Game Register</div>;
                                                    }
                                                }
                                            </Transition>
                                            <Transition in={!!this.props.username} timeout={100} mountOnEnter={true}>
                                                {
                                                    (titleState) => {
                                                        return <div className="form-title user-registered-content" style={{...userTitleStyles[titleState]}}>{`Welcome, ${this.props.username}!`}</div>;
                                                    }
                                                }
                                            </Transition>
                                            <Transition in={!!this.props.username} timeout={300}>
                                                {
                                                    (descriptionState) => {
                                                        return (
                                                            <div className="form-description" style={{...defaultDescriptionStyles[descriptionState]}}>
                                                                Please enter your name before the game starts. <span role="img" aria-label="emoji">🚀</span>
                                                            </div>
                                                        );
                                                    }
                                                }
                                            </Transition>
                                            <Transition in={!!this.props.username} timeout={200} mountOnEnter={true}>
                                                {
                                                    (descriptionState) => {
                                                        return (
                                                            <div className="form-description user-registered-content" style={{...userDescriptionStyles[descriptionState]}}>
                                                                Thanks for your registration. Here's a cookie for you <span role="img" aria-label="emoji">🍪</span>
                                                                <br/>Start the game whenever you feel ready!
                                                            </div>
                                                        );
                                                    }
                                                }
                                            </Transition>
                                            {this.renderFormContent(valid)}
                                        </form>
                                    </div>
                                </div>
                            );
                        }
                    }
                </Transition>
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