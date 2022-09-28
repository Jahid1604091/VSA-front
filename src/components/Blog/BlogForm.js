import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addBlog } from '../../actions/blog'
import PropTypes from 'prop-types'
const BlogForm = ({addBlog}) => {
    const [formData, setFormData] = useState({
        text: '', v_url: '', description: ''
    })
    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault();
        addBlog(formData)
    }
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <div className="modal fade" id="exampleModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New Blog</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body text-start">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input name='text' onChange={handleChange} value={formData.text} type="text" className="form-control" id="exampleFormControlInput1" placeholder="An example title" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Add a video URL</label>
                                    <input name='v_url' onChange={handleChange} value={formData.v_url} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Tech, React, Nodejs etc" />
                                </div>
                             
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Post</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section`
   
`
BlogForm.propTypes = {
    addBlog:PropTypes.func.isRequired
}

export default connect(null,{addBlog}) (BlogForm)