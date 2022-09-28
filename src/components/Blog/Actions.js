import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addLike, removeLike } from '../../actions/blog'

const Actions = ({ addLike, removeLike,_id,likes }) => {
    return (
        <Wrapper>
            <div className="text-md-end share">

                <span onClick={e => addLike(_id)}> <AiOutlineLike /> {likes.length || 0} </span>
                <span onClick={e => removeLike(_id)}> <AiOutlineDislike /> </span>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.article`
 
    .share{
       
        span{
            cursor: pointer;
            transition:var(--transition) ;
            margin:0 10px ;
            &:last-child{
                margin-right:0;
            }
            &:first-child{
                margin-left:0 ;
            }
            &:hover{
                color:var(--clr-red-light) ;
            }
        }
    }
    
    @media screen and (min-width: 768px) and (max-width:1199px) {
    .share{
        display:flex ;
        justify-content:space-between ;

    }
}
`

export default connect(null, { addLike, removeLike })(Actions)