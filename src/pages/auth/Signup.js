import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
const Signup = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // const navigate = useNavigate()
    // const handleSignup = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post("http://localhost:8000/api/auth/signup/",
    //             { name, email, password });
    //         // console.log(response.data);
    //         response.data && navigate("/login");
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });


    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/auth/signup/",
                { name: credentials.name, email: credentials.email, password: credentials.password });
            // console.log(response.data);
            response.data && navigate("/login");
        } catch (error) {
            console.log(error.message)
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    return (
        <div className="auth--page">
            <div className='wrapper--auth'>
                <h3>Sign Up</h3>
                <div className="auth">
                    <form onSubmit={handleSignup} className="auth--form">
                        <div className="auth--form-inputs">
                            <input onChange={onChange} name='name' required type="text" placeholder='Name' />
                            <input onChange={onChange} name='email' required type="email" placeholder='Email (same will be your username)' />
                            <input onChange={onChange} name='password' required type="password" placeholder='Password' />
                            <input onChange={onChange} name='confirmPassword' required type="password" placeholder='Confirm Password' />
                        </div>

                        <div className="">
                            {<button disabled={(credentials.password !== credentials.confirmPassword || !credentials.password || !credentials.confirmPassword)} type="submit" className="cta cta-primary cta--auth">Sign up</button>}
                        </div>
                        <span>Do you already have an account? <Link to="/login" >Login</Link></span>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Signup
