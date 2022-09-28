import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBlog } from '../../actions/blog'
import { IoIosArrowBack } from 'react-icons/io'
import { addLike, removeLike } from '../../actions/blog'
import Actions from './Actions'
import Blog from './Blog'
const BlogDetails = ({ getBlog, blog: { blog, loading,likedUsers } }) => {
  
  const { id } = useParams();
  useEffect(() => {
    getBlog(id)
  }, [getBlog, id])

  if (loading || blog === null) {
    return <div className='page-100'>
      <div className="container">
        <h1 className='p-5'>Loading...</h1>
      </div>
    </div>
  }
  return (
    <Wrapper className='page-100'>
      <Blog {...blog} likedUsers={likedUsers} details={true}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`
BlogDetails.propTypes = {
  getBlog: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  blog: state.blog
})
export default connect(mapStateToProps, { getBlog, addLike, removeLike })(BlogDetails)