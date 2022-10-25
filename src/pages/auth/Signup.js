import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'
const Signup = () => {
    return (
        <div className="auth--page">
            <div className='wrapper--auth'>
                <h3>Sign Up</h3>
                <div className="auth">
                    <form className="auth--form">
                        <div className="auth--form-inputs">
                            <input required type="text" placeholder='Name' />
                            <input required type="email" placeholder='Email (same will be your username)' />
                            <input required type="password" placeholder='Password' />
                            <input required type="password" placeholder='Confirm Password' />
                        </div>

                        <div className="">
                            <button className="cta cta-primary cta--auth">Register</button>
                        </div>
                        <span>Do you already have an account? <Link to="/login" >Login</Link></span>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Signup
