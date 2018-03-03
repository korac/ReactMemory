import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function requireAuthentication(WrapperComponent, isProtected) {
    class Authentication extends Component {

        renderRestricted() {
            return (
                this.props.authenticated ?
                    <WrapperComponent {...this.props} /> :
                    <Redirect to='/register' />
            );
        }

        renderNonRestricted() {
            return (
                this.props.authenticated ?
                    <Redirect to='/' /> :
                    <WrapperComponent {...this.props} />
            );
        }

        renderRestriction() {
            return isProtected ? this.renderRestricted() : this.renderNonRestricted();
        }

        render() {
            return this.renderRestriction();
        }

    }

    function mapStateToProps({ stats }) {
        return { authenticated: stats.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}

export default requireAuthentication;