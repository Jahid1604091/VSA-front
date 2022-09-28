import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

const Category = () => {
    return (
        <Wrapper>
            <div className='mt-4'>
                <Card className='rounded-0 text-center bg-dark '>
                    <img src="https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt="" className='img-fluid' />
                    <Card.Body>
                        <Card.Text className='text-white'>
                            <h5>Travel</h5>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    img{
        height:100px ;
    }
`

export default Category