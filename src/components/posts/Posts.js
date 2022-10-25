import React from 'react'
import './posts.css'
import { Link, useNavigate } from 'react-router-dom'

const Posts = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus accusantium praesentium suscipit ex? Consequuntur ullam expedita modi, obcaecati, voluptatem minus dignissimos, aliquid enim dolorum id amet nesciunt deleniti quasi!",
            category: "Technology",
            image: "https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus accusantium praesentium suscipit ex? Consequuntur ullam expedita modi, obcaecati, voluptatem minus dignissimos, aliquid enim dolorum id amet nesciunt deleniti quasi!",
            category: "Arts",
            image: "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus accusantium praesentium suscipit ex? Consequuntur ullam expedita modi, obcaecati, voluptatem minus dignissimos, aliquid enim dolorum id amet nesciunt deleniti quasi!",
            category: "Science, Technology",
            image: "https://images.pexels.com/photos/3695297/pexels-photo-3695297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },

        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatibus accusantium praesentium suscipit ex? Consequuntur ullam expedita modi, obcaecati, voluptatem minus dignissimos, aliquid enim dolorum id amet nesciunt deleniti quasi!",
            category: "Food",
            image: "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    let navigate = useNavigate();



    return (

        <div className="wrapper">
            <section className="wrapper--home">
                <div className="posts">
                    {posts.map((post) => (
                        <div className="post" key={post.id}>
                            <div className="post--img">
                                <Link to={`/post/${post.id}`} >
                                    <img src={post.image} alt="post" />
                                </Link>
                            </div>
                            <div className="post--content">
                                <div className="">
                                    <Link to={`/post/${post.id}`} >
                                        <h1 className='post--title'>{post.title}</h1>
                                    </Link>
                                    <span className='post--category'>{post.category}</span>
                                </div>
                                <p>{post.desc}</p>
                                <button className="cta cta--post" onClick={() => { navigate(`/post/${post.id}`) }}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Posts
