import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineUserAdd, AiOutlineLogin } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'
const Register = ({ isAuthenticated, register }) => {

  const [formData, setFormData] = useState({
   name: '', email: '', password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData)
  }

     //redirect if logged in 
     const navigate = useNavigate();
     if(isAuthenticated){
         navigate('/dashboard')
     }
 
  return (
    <Wrapper>
      <div className='page-100'>
        <div className="container">
          <div className="row">
            <h3 className='text-center text-md-start text-uppercase'><AiOutlineUserAdd size={35} /> Register</h3>
            <form onSubmit={handleSubmit} className='shadow py-4'>
           
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text"
                  name='name'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text"
                  name='email'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password"
                  name='password'
                  className="form-control"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>

              <div className="mb-3 form-check">

                <label className="form-check-label" >Already a member ? <Link to='/login'>Login</Link></label>
              </div>


              <button type="submit" className="btn btn-danger shadow rounded-0 text-uppercase"><AiOutlineLogin /> Sign up</button>
            </form>

          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  input{
    border-radius:0;
   
    &:focus{
      outline: none;
      box-shadow: none; 
      
    }
  }
`

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired
}
const mapStateToProps = state => (
  {
    isAuthenticated: state.auth.isAuthenticated
  }
)
export default connect(mapStateToProps, { register })(Register)