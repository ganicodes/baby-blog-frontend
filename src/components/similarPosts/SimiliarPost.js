import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './similiarPost.css'

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

const SimiliarPost = ({ id }) => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [cat, setCat] = useState("")

    useEffect(() => {
        const getCategoryOfCurrentPost = async () => {
            try {
                const { data } = await axiosInstance.get(`/posts/${id}`);
                setCat(data.post.categories)
            } catch (error) {
                console.error(error);
            }
        }

        const getPost = async () => {
            try {
                const { data } = await axiosInstance.get(`/posts/?category=${cat}`);
                setPosts(data);
            } catch (error) {
                console.error(error);
            }
        }
        getCategoryOfCurrentPost();
        getPost();
    }, [id, cat])


    return (
        <div className='similiar-post--container'>
            <span>Other posts based on your interest</span>
            {posts?.map((post) => (
                <div key={post._id} className="similiar-post--card">
                    {/* <img src={post.photo} alt="" /> */}
                    {post.photo ? <img src={`../images/${post.photo}`} alt="post" /> : <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />}
                    <h3>{post.title}</h3>
                    <button className="cta cta--post" onClick={() => { navigate(`/post/${post._id}`) }}>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default SimiliarPost
