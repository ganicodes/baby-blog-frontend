import React, { useContext, useEffect, useState } from 'react'
import './blog.css'
import axios from 'axios'
import { AuthContext } from '../../context/authContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import parser from 'html-react-parser'

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

const Blog = ({ id }) => {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const { data } = await axiosInstance.get(`/posts/${id}`);
                setPost(data.post);
            } catch (error) {
                console.error(error);
            }
        }

        getPost();
    }, [id]);


    const handleEdit = () => {
        navigate("/write", { state: post });
    }
    const handleDelete = async () => {
        const { data } = await axiosInstance.delete(`/posts/${post._id}`);
        console.log(data);
        navigate("/");
    }

    const { user } = useContext(AuthContext);
    const currentUser = user?.userdetails.name;

    return (
        <div>
            <div className="blog">
                <div className="blog--image">
                    {post.photo ? <img src={`../images/${post.photo}`} alt="post" /> : <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="post" />}
                    <div className="blog--credits">
                        <img className='blog--user-image' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="">
                            <span className="blog--user-name">{post.author}</span>
                            <p className="blog--category">{post.categories} </p>
                            <p className="blog--uploaded-date">
                                {new Date(post.createdAt).toDateString()}
                            </p>
                        </div>
                        {currentUser === post.author && <div className="blog--user-actions">
                            <ion-icon name="create" onClick={handleEdit}></ion-icon>
                            <ion-icon name="trash-sharp" onClick={handleDelete}></ion-icon>
                        </div>}
                    </div>
                </div>
                <div className="blog--content">
                    <h1 className='blog--title'>{post.title}</h1>
                    {parser(`<div class="blog--description"> ${post.desc} </div>`)}
                </div>
            </div>
        </div >
    )
}

export default Blog
