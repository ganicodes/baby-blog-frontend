import React from 'react'
import './similiarPost.css'

const SimiliarPost = () => {
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
    return (
        <div className='similiar-post--container'>
            <span>Other posts based on your interest</span>
            {posts.map((post) => (
                <div key={post.id} className="similiar-post--card">
                    <img src={post.image} alt="" />
                    <h3>{post.title}</h3>
                    <button className="cta cta--post">Read More</button>
                </div>
            ))}
        </div>
    )
}

export default SimiliarPost
