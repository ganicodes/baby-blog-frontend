import React, { useEffect, useState } from 'react'
import './posts.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

const Posts = () => {
    const navigate = useNavigate();

    const location = useLocation()
    const cat = location.search.split("=")[1];

    const [posts, setPosts] = useState([]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const response = cat ? await axiosInstance.get(`/posts?category=${cat}`)
                    : await axiosInstance.get(`/posts/`);

                // console.log(response.data)
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        getAllPosts();
    }, [cat])

    return (

        <div className="wrapper">
            <section className="wrapper--home">
                <div className="posts">
                    {posts.map((post) => (
                        <div className="post" key={post._id}>
                            <div className="post--img">
                                <Link to={`/post/${post._id}`} >
                                    {post.photo ? <img src={`../images/${post.photo}`} alt="post" /> : <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />}
                                </Link>
                            </div>
                            <div className="post--content">
                                <div className="">
                                    <Link to={`/post/${post._id}`} >
                                        <h1 className='post--title'>{post.title}</h1>
                                    </Link>
                                    <span key={post._id} className='post--category'>{post.categories} </span>
                                </div>
                                <div>{getText(post.desc).substring(0, 150).concat("...")}</div>
                                <button className="cta cta--post" onClick={() => { navigate(`/post/${post._id}`) }}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Posts
