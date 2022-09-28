import React from 'react'
import styled from 'styled-components'
import blogImg from '../../assets/images/logo.png'
import {AiOutlinePlus} from 'react-icons/ai'
import {DiGhostSmall} from 'react-icons/di'
import { Link } from 'react-router-dom'
import BlogForm from '../Blog/BlogForm'
const Body = () => {
  return (
    <Wrapper>
      <img src={blogImg} alt="blog image" className='img-fluid' />
      <div className="text-center">
        <div className="btn-group">
          <Link to='/blogs' className='btn btn-outline-danger text-dark' title='All Blogs'><DiGhostSmall/> <span className='d-none d-md-inline'>All Blogs</span> </Link>
          <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" title='Add New Blog'><AiOutlinePlus/><span className='d-none d-md-inline'>New Blog</span> </button>
          <BlogForm/>
        </div>

      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img{
    width:150px ;
    display: block;
    margin-left: auto;
    margin-right: auto;
 
  }
`
export default Body