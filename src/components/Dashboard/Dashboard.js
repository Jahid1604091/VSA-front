import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getMyBlog, deleteMyBlog } from '../../actions/blog'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
const Dashboard = ({ getMyBlog, deleteMyBlog, blog: { blogs, loading } }) => {
    useEffect(() => {
        getMyBlog();
    }, [getMyBlog])
    const handleDelete = id => {
        deleteMyBlog(id)
    }
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (blogs.length === 0) {
        return <div className='page-100'>
            <div className="section">
                <div className="section-center text-center">
                    <h2>No Blogs Found</h2>

                </div>
            </div>
        </div>
    }

    return (
        <Wrapper className='page-100'>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Posted Date</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Views</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map((blog, idx) => {
                                console.log(blog)
                                return (
                                    <tr>

                                        <td>{idx + 1}</td>
                                        <td>{blog.text}</td>
                                        <td> <Moment format='D MMMM, YYYY  h:mm a'>{blog.date}</Moment></td>
                                        <td>{blog.likes.length}</td>
                                        <td>{blog.views}</td>
                                        <td onClick={() => handleDelete(blog._id)}><span className='dlt-btn bg-danger text-light p-1'>X</span></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    .dlt-btn{
        cursor: pointer;
        transition:var(--transition) ;
    }
`
Dashboard.propTypes = {
    getMyBlog: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    blog: state.blog
})
export default connect(mapStateToProps, { getMyBlog, deleteMyBlog })(Dashboard)