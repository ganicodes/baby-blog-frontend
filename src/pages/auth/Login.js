import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/AuthContext'
import './auth.css'
const Login = () => {
    const navigate = useNavigate();
    const { dispatch, isFetching } = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        // login start
        dispatch({ type: "LOGIN_START" });

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", { email: emailRef.current.value, password: passwordRef.current.value })
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
            navigate("/")
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }

    // console.log(user.userdetails);
    console.log(emailRef.current);
    return (
        <div className="auth--page">
            <div className='wrapper--auth'>
                <h3>Login</h3>
                <div className="auth">
                    <form onSubmit={handleLogin} className="auth--form">
                        <div className="auth--form-inputs">
                            <input ref={emailRef} required type="email" placeholder='Username/Email' />
                            <input ref={passwordRef} required type="password" placeholder='Password' />
                        </div>

                        <div className="">
                            <button type='submit' className="cta cta-primary cta--auth" disabled={isFetching}>Login</button>
                        </div>
                        <span>Don't you have an account? <Link to="/signup" >Register</Link></span>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login
