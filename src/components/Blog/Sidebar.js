import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import Category from './Category'
import SocialIcons from '../shared/SocialIcons'
import LatestBlog from './LatestBlog'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Wrapper>
      <Card className='rounded-0 text-center card'>
        <img src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
          alt="" className='img-fluid' />
        <Card.Body>
          <SocialIcons />
          <Card.Title className='py-2'>Cristine Smith</Card.Title>
          <Card.Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque dolore magnam aliquam quaerat voluptatem.
          </Card.Text>
          <button className="btn-3"><span>read more</span></button>
        </Card.Body>
      </Card>

      <div className="newsletter mt-4">
        <Card className='rounded-0 text-center bg-dark '>
          <Card.Body>
            <Card.Text className='text-white'>
              <h5>Subscribe to our newsletter</h5>
              <input type="text" className='form-control rounded-0 my-2' placeholder='Your email' />
              <input type="submit" className='my-1 rounded-0 p-1 btn btn-outline-warning' value='Subscribe' />
            </Card.Text>

          </Card.Body>
        </Card>
      </div>

      <div className="categories mt-4">
        <h4>Categories</h4>
        <Category />
        <Category />
        <Category />
      </div>

      <div className="latest-blogs mt-4">
        <h4>Latest Blogs</h4>
        <LatestBlog />
        <LatestBlog />
        <LatestBlog />
      </div>

      <div className="mt-4">
        <h4>tags</h4>
        <div className="tags">
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
          <Link to='/' className='btn btn-danger'>Travel</Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

  .btn-3{
    border:0;
    text-transform:uppercase ;
    color:var(--clr-red-light) ;
    transition:var(--transition) ;
    transition: border-bottom 0.6s linear;
    &:hover{
        color:var(--clr-red-light) ;
       
      }
    span{
     display:inline-block ;
     margin:0 ;
      /* border-bottom:1px solid var(--clr-red-light) ; */
      :after {
        display:block;
        content: '';
        border-bottom: solid 2px var(--clr-red-light) ;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transform-origin:0 50%;
      }
      &:hover:after{
        transform: scaleX(1); 
      }
   }
  }

  .tags a{
    margin:5px 5px 0 0;
    border:0 ;
    border-radius:0 ;
    
  }
`
export default Sidebar