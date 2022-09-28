import React, { useEffect, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import styled from 'styled-components'
import { AiOutlineShareAlt, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLike, removeLike, addView, getBlogs } from '../../actions/blog'
import PropTypes from 'prop-types'
import Actions from './Actions'
import YouTube from 'react-youtube';
const Blog = ({ _id, text, name, views, video_id, likedUsers, date, likes, details, auth: { isAuthenticated }, addLike, removeLike, addView }) => {


    const handleView = () => {
        addView(_id)
    }



    return (
        <Wrapper>
            <Container>
                {/* <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} /> */}
                <div>
                    {video_id && <YouTube
                        videoId={video_id}
                        containerClassName="embed embed-youtube"
                        onPlay={handleView}

                    />}
                </div>


                {/* <iframe src={video_url} title="Building a Video Sharing Website (with Node.js, Docker and FFMPEG)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <Row className='mt-2 mt-md-4'>
                    <Col md={7}>
                        <div className="d-flex justify-content-between">
                            <span>{views || 0} views</span>
                            {!details && <Actions _id={_id} likes={likes} />}

                        </div>
                    </Col>

                </Row>

                <Row className='mt-4 mt-md-0'>
                    <Col md={8}>
                        <div className="text-start">
                            <p className='text-muted py-md-1 fst-italic'> <Moment format='D MMMM, YYYY  h:mm a'>{date || new Date()}</Moment> </p>
                        </div>
                        <div className="blog-description my-md-0">
                            <h4>{text}</h4>
                            <h5>{details ? `Posted by ${name}` : ''}</h5>
                        </div>
                        <div className='mb-4'>
                            {details ? <Link to={`/`} className='btn btn-outline-danger text-uppercase shadow px-4 rounded-0'>back</Link>
                                : <Link to={`/blogs/${_id}`} className='btn btn-outline-danger text-uppercase shadow px-4 rounded-0'>details</Link>
                            }
                        </div>
                    </Col>
                    <Col md={4}>
                           
                        <ul>
                            {
                                likedUsers?.map(user => {
                                    return (
                                        <ul class="list-group list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-start mt-2">
                                                <span><img src={user.avatar} alt="" width='25' className='img-circle' /></span>
                                                <div class="ms-2 me-auto ">
                                                    <div class="fw-bold">{user.name}</div>

                                                </div>
                                            </li>
                                        </ul>

                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>

            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.article`
                iframe{
                    height:300px ;
                    width:100% ;
                }
                .img-circle{
                    border-radius:50% ;
                }
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
                        justify-content:flex-end ;

            }
}
                `
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth,
    blog: state.blog
})
export default connect(mapStateToProps, { addLike, removeLike, addView, getBlogs })(Blog)