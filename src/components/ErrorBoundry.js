import React, { Component } from 'react';

class ErrorBoundry extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    render() {
        return this.state.hasError ? <h1>Something went wrong.</h1> : this.props.children
    }
}

export default ErrorBoundry;