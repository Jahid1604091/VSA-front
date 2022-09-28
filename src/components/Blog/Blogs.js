import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBlogs } from '../../actions/blog'
import PropTypes from 'prop-types'
import Blog from './Blog'
import styled from 'styled-components'
const Blogs = ({ getBlogs, blog: { blogs, loading } }) => {
    useEffect(() => {
        getBlogs();
    }, [getBlogs])

    return (
        <Wrapper className='page-100'>
            <div className="container">
               <h2 className='text-center'>All Blogs</h2>
                {
                    blogs.map(blog => <Blog key={blog._id} {...blog}/>)
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    .card{
        transition:var(--transition) ;
        &:hover{
            /* border:1px solid var(--clr-red-light) ; */
            box-shadow:var(--dark-shadow);
            
                :before {
                    transition:var(--transition) ;
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    border-width: 0 16px 16px 0;
                    border-style: solid;
                    border-color: var(--clr-red-light) #fff;

                                }
        }

    }
`

const propTypes = {
    getBlogs: PropTypes.func.isRequired,
    blog: PropTypes.object.isRequired
}
const mapStateToProps = state => ({

    blog: state.blog
})
export default connect(mapStateToProps, { getBlogs })(Blogs)