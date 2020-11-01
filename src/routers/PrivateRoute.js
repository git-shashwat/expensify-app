import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import ErrorBoundary from '../components/ErrorBoundary';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <ErrorBoundary>
        <Suspense fallback={<LoadingPage />}>
            <Route {...rest} component={(props) => (
                isAuthenticated ? (
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                    <Redirect to="/" />
                )
            )} />    
        </Suspense>    
    </ErrorBoundary>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);