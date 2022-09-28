import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi'

const SocialIcons = () => {
    return (
        <Wrapper>
            <Link to='/'><FiFacebook /></Link>
            <Link to='/'><FiLinkedin /></Link>
            <Link to='/'><FiTwitter /></Link>
            <Link to='/'><FiYoutube /></Link>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    cursor: pointer;
    a{
        transition:var(--transition) ;
        color:var( --clr-grey-5) ;
        margin:0 10px;
        &:hover{
            color: var(--clr-red-light);
        }
    }
`
export default SocialIcons