import React, { useContext } from 'react'
import './navbar.css'
import logo from '../../img/logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext/AuthContext'
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const cat = location.search.split("=")[1];

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
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
                        <li className='navlinks'><Link to="/?category=science" className={cat === "science" ? "navbar--links-active" : ""} >Science</Link></li>
                        <li className='navlinks'><Link to="/?category=art" className={cat === "art" ? "navbar--links-active" : ""}>Art</Link></li>
                        <li className='navlinks'><Link to="/?category=tech" className={cat === "tech" ? "navbar--links-active" : ""}>Tech</Link></li>
                        <li className='navlinks'><Link to="/?category=food" className={cat === "food" ? "navbar--links-active" : ""}>Food</Link></li>
                        <li className='navlinks'><Link to="/?category=travel" className={cat === "travel" ? "navbar--links-active" : ""}>Travel</Link></li>
                        <li className='navlinks'><Link to="/?category=cinema" className={cat === "cinema" ? "navbar--links-active" : ""}>Cinema</Link></li>
                    </ul>

                    <div className="navbar--cta">
                        <button className="cta" onClick={() => { user ? navigate("/write") : navigate("/login") }}>Write</button>
                        {!user ? <button className="cta cta-primary" onClick={() => { navigate("/login"); }}>Login</button>
                            : <button className="cta cta-primary" onClick={handleLogout}>Logout</button>}
                    </div>
                </div>

            </div>

        </nav>
    )
}
export default Navbar
