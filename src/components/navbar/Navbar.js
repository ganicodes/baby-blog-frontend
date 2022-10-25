import React from 'react'
import './navbar.css'
import logo from '../../img/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    let navigate = useNavigate();

    return (
        <nav className='navbar'>
            <div className="wrapper navbar--wrapper">
                <div className="navbar--logo">
                    <Link to="/">
                        <img src={logo} alt="logo" className='logo' />
                    </Link>
                </div>

                <div className="navbar--links">
                    <ul>
                        <li className='navlinks'><Link to="/" className='navbar--links-active' >Science</Link></li>
                        <li className='navlinks'><Link to="/">Art</Link></li>
                        <li className='navlinks'><Link to="/">Tech</Link></li>
                        <li className='navlinks'><Link to="/">Food</Link></li>
                        <li className='navlinks'><Link to="/">Travel</Link></li>
                        <li className='navlinks'><Link to="/">Cinema</Link></li>
                    </ul>

                    <div className="navbar--cta">
                        <button className="cta" onClick={() => {
                            navigate("/write")
                        }}>Write</button>
                        <button className="cta cta-primary" onClick={() => {
                            navigate("/login");
                        }}>Login</button>
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default Navbar
