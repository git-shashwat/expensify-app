import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <div className="error-image-overlay">
                    <div className="error-image-container"></div>
                    <div className="error-image-text">Sorry this page is cordoned off</div>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;