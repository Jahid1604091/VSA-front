import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({login,isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: '', password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        login(formData)
       
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
                        <h3 className='text-center text-md-start text-uppercase'><AiOutlineUser size={35} /> Login</h3>
                        <form onSubmit={handleSubmit} className='shadow py-4'>
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

                                <label className="form-check-label">Not a member ? <Link to='/register'>Register</Link></label>
                            </div>


                            <button type="submit" className="btn btn-danger shadow rounded-0 text-uppercase"><AiOutlineLogin /> Login</button>
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
Login.propTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool
}

const mapStateToProps = state =>(
    {
        isAuthenticated:state.auth.isAuthenticated
    }
)
export default connect(mapStateToProps,{login}) (Login);