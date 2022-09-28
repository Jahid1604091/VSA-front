import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
    if (loading) return <h1>Loading...</h1>;
    if (isAuthenticated) return children;

    return <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute)