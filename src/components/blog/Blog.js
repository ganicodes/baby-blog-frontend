import React, { useEffect, useState } from 'react'
import './blog.css'
import axios from 'axios'

const Blog = ({ id }) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/posts/${id}`);
                setPost(response.data.post);
            } catch (error) {
                console.error(error);
            }
        }

        getPost();
    }, [id])

    return (
        <div>
            <div className="blog">
                <div className="blog--image">
                    <img src={post.photo} alt="" />
                    <div className="blog--credits">
                        <img className='blog--user-image' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="">
                            <span className="blog--user-name">{post.author}</span>
                            {/* {post.categories.map((cat) => (
                                <p className="blog--category">{cat} </p>
                            ))} */}
                            <p className="blog--uploaded-date">
                                {new Date(post.createdAt).toDateString()}
                            </p>
                        </div>
                        <div className="blog--user-actions">
                            <ion-icon name="create"></ion-icon>
                            <ion-icon name="trash-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="blog--content">
                    <h1 className='blog--title'>{post.title}</h1>

                    <p className="blog--description"> {post.desc} </p>
                </div>
            </div>
        </div>
    )
}

export default Blog
