import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Alert = ({ alerts }) =>
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
        <Wrapper>
            <div key={alert.id} className='container'>
                <div className={`alert alert-${alert.alertType} text-uppercase rounded-0 alert-dismissible fade show mt-2`} role="alert">
                    <strong> {alert.msg}!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>

        </Wrapper>


    ))




const Wrapper = styled.div`
    
`

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    //from root reducer state
    alerts: state.alert
})
export default connect(mapStateToProps)(Alert)