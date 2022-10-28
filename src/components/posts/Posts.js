import React, { useEffect, useState } from 'react'
import './posts.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const Posts = () => {
    let navigate = useNavigate();

    const location = useLocation()
    const cat = location.search.split("=")[1];

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const response = cat ? await axios.get(`http://localhost:8000/api/posts?category=${cat}`)
                    : await axios.get(`http://localhost:8000/api/posts/`);

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
                                    <img src={post.photo} alt="post" />
                                </Link>
                            </div>
                            <div className="post--content">
                                <div className="">
                                    <Link to={`/post/${post._id}`} >
                                        <h1 className='post--title'>{post.title}</h1>
                                    </Link>
                                    {/* {post.categories.map((category) => (
                                        <span className='post--category'>{category} </span>
                                    ))} */}
                                </div>
                                <p>{post.desc}</p>
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
