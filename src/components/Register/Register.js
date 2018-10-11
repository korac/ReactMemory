import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registerUser, userLogin } from '../../actions';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './Register.styles';
import SpinnerIcon from '../icons/SpinnerIcon/SpinnerIcon';
import CardsIcon from '../icons/CardsIcon/CardsIcon';
import UserIcon from '../icons/UserIcon/UserIcon';
import {
  spinnerTransitionStyles,
  cardsTransitionStyles,
  userTransitionStyles,
  defaultTitleStyles,
  userTitleStyles,
  defaultDescriptionStyles,
  userDescriptionStyles,
  registerTransitionStyles
} from './animationStyles';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { registering: false, registered: false };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleOnEnteredTransition = this.handleOnEnteredTransition.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('body--blue');
  }

  componentWillUnmount() {
    document.body.classList.remove('body--blue');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.username) {
      this.setState({ registering: false });
    }
  }

  handleOnEnteredTransition() {
    this.props.userLogin();
  }

  renderFormContent(valid) {
    const { classes } = this.props;

    if (!this.props.username) {
      return (
        <div className={classes.formFields}>
          <Field
            type="text"
            name="username"
            component={field => this.renderField(field, classes)}
            autofocus={true}
          />
          <div className={classes.formSubmit}>
            <button
              type="submit"
              className={
                valid && !this.state.registering
                  ? classes.formButtonActive
                  : classes.formButton
              }
            >
              Confirm name
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className={classes.formFields}>
        <div className={classes.formSubmit}>
          <button
            type="button"
            className={classes.formButtonActive}
            onClick={this.handleStartClick}
          >
            Start a game
          </button>
        </div>
      </div>
    );
  }

  renderField(field, classes) {
    const { meta } = field;

    return (
      <div className={classes.formField}>
        <div className={classes.fieldLabel}>YOUR NAME</div>
        <div className={classes.fieldInput}>
          <input
            type="text"
            autoComplete="off"
            autoFocus={field.autofocus}
            {...field.input}
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
    this.setState({ registered: true });
  }

  tidyName(name) {
    if (name.length > 15) {
      return `${name.substr(0, 15)}..`;
    }

    return name;
  }

  renderCardIcons() {
    const { classes } = this.props;

    return (
      <div className={classes.cardContentIcon}>
        <Transition in={this.state.registering} timeout={0}>
          {spinnerState => {
            return (
              <SpinnerIcon
                style={{ ...spinnerTransitionStyles[spinnerState] }}
              />
            );
          }}
        </Transition>
        <Transition in={!!this.props.username} timeout={0}>
          {cardsState => {
            return (
              <CardsIcon
                className={classes.cardsIcon}
                style={{ ...cardsTransitionStyles[cardsState] }}
              />
            );
          }}
        </Transition>
        <Transition in={!!this.props.username} timeout={0}>
          {userState => {
            return (
              <UserIcon
                className={classes.userIcon}
                style={{ ...userTransitionStyles[userState] }}
              />
            );
          }}
        </Transition>
      </div>
    );
  }

  renderCardForm(handleSubmit, valid) {
    const { classes } = this.props;

    return (
      <form
        className={classes.cardContentForm}
        onSubmit={handleSubmit(this.handleFormSubmit)}
      >
        <Transition in={!!this.props.username} timeout={300}>
          {titleState => {
            return (
              <div
                className={classes.formTitle}
                style={{ ...defaultTitleStyles[titleState] }}
              >
                Game Register
              </div>
            );
          }}
        </Transition>
        <Transition
          in={!!this.props.username}
          timeout={100}
          mountOnEnter={true}
        >
          {titleState => {
            return (
              <div
                className={classes.formTitleUserRegisteredContent}
                style={{ ...userTitleStyles[titleState] }}
              >{`Welcome, ${this.tidyName(this.props.username)}!`}</div>
            );
          }}
        </Transition>
        <Transition in={!!this.props.username} timeout={300}>
          {descriptionState => {
            return (
              <div
                className={classes.formDescription}
                style={{ ...defaultDescriptionStyles[descriptionState] }}
              >
                Please enter your name before the game starts.{' '}
                <span role="img" aria-label="emoji">
                  🚀
                </span>
              </div>
            );
          }}
        </Transition>
        <Transition
          in={!!this.props.username}
          timeout={200}
          mountOnEnter={true}
        >
          {descriptionState => {
            return (
              <div
                className={classes.formDescriptionUserRegisteredContent}
                style={{ ...userDescriptionStyles[descriptionState] }}
              >
                Thanks for your registration. Here's a cookie for you{' '}
                <span role="img" aria-label="emoji">
                  🍪
                </span>
                <br />
                Start the game whenever you feel ready!
              </div>
            );
          }}
        </Transition>
        {this.renderFormContent(valid)}
      </form>
    );
  }

  render() {
    const { handleSubmit, valid, classes } = this.props;

    return (
      <div className={classes.registerWrapper}>
        <Transition
          in={this.state.registered}
          timeout={450}
          onEntered={this.handleOnEnteredTransition}
        >
          {state => {
            return (
              <div
                className={classes.registerCard}
                style={{ ...registerTransitionStyles[state] }}
              >
                <div className={classes.cardContent}>
                  {this.renderCardIcons()}
                  {this.renderCardForm(handleSubmit, valid)}
                </div>
              </div>
            );
          }}
        </Transition>
      </div>
    );
  }
}

Register.propTypes = {
  username: PropTypes.string,
  registerUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { username: state.stats.username };
}

function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter a name.';
  }

  return errors;
}

export default injectSheet(styles)(
  reduxForm({
    validate,
    form: 'RegisterForm'
  })(
    connect(
      mapStateToProps,
      { registerUser, userLogin }
    )(Register)
  )
);
