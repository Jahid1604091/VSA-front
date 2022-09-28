import React from 'react'
import { useLocation } from 'react-router-dom'
import Body from './Body'
import Navbar from './Navbar'


const Header = () => {
  const { pathname } = useLocation()
  
  return (
    <>
    
      {pathname === '/' &&
        <>
          <Body />
        </>
      }

      <Navbar />
    </>
  )
}

export default Header