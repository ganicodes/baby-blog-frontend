import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'
const Login = () => {
    return (
        <div className="auth--page">
            <div className='wrapper--auth'>
                <h3>Login</h3>
                <div className="auth">
                    <form action="" className="auth--form">
                        <div className="auth--form-inputs">
                            <input required type="email" placeholder='Username/Email' />
                            <input required type="password" placeholder='Password' />
                        </div>

                        <div className="">
                            <button className="cta cta-primary cta--auth">Login</button>
                        </div>
                        <span>Don't you have an account? <Link to="/signup" >Register</Link></span>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login
