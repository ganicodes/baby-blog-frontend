import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Blog from '../../components/blog/Blog'

import SimiliarPost from '../../components/similarPosts/SimiliarPost'

import './singlePost.css'
import { useLocation } from 'react-router-dom'

const SinglePost = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <section className="wrapper--singlePost">
                    <div className="wrapper--blog">
                        <Blog id={id} />
                    </div>
                    <div className="wrapper--similiar-posts">
                        <SimiliarPost />
                    </div>
                </section>
            </div>
        </>
    )
}

export default SinglePost
