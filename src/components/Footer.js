import React from 'react'


const Footer = () => {
  return (
    <p className='text-center fw-bold fst-italic pt-2' style={{
      borderTop:'1px solid #e66b6b'
    }}>
          &copy;{new Date().getFullYear()} | All rights reserved | <a href='http://jahid1.xyz'>Jahid</a>
    </p>
  )
}

export default Footer