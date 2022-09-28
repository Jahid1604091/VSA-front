
import Slider from '../components/Slider'
import { Container, Row, Col } from 'react-bootstrap'
import React, { useEffect } from 'react'
import Sidebar from '../components/Blog/Sidebar'
import { AiOutlineReload } from 'react-icons/ai'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getBlogs } from '../actions/blog'
import Blog from '../components/Blog/Blog'
import { Link } from 'react-router-dom'

const Homepage = ({ getBlogs, blog: { blogs, loading } }) => {
    useEffect(() => {
        getBlogs();
    }, [getBlogs])
    // if(loading){
    //     return <h1>Loading...</h1>
    // }
    if (blogs.length === 0 ) {
        return <div className='page-100'>
            <div className="section">
                <div className="section-center text-center">
                    <h2>No Blogs Found</h2>

                </div>
            </div>
        </div>
    }
 
    
    return (
        <>
            <div className='d-none d-md-block'>  <Slider /></div>
            <Container>
                <Row className=''>
                    <Col md={12}>
                        {
                            blogs?.map(blog => <Blog key={blog._id} {...blog} details={false} />)
                        }

                        {/* <div className="my-2 text-center">
                            <Link to='/blogs' className='btn btn-warning rounded-0 text-uppercase text-light fw-bold'><AiOutlineReload size={25} /> load older blogs</Link>
                        </div> */}
                    </Col>
                    {/* <Col md={4}> <Sidebar /> </Col> */}
                </Row>
            </Container>


        </>
    )
}

Homepage.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    blog: state.blog
})
export default connect(mapStateToProps, { getBlogs })(Homepage)