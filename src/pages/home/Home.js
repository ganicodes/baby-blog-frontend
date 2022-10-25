import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Posts from '../../components/posts/Posts'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Posts />
        </div>
    )
}

export default Home
