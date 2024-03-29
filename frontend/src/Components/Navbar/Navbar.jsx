import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';
import './NavBar.css'
export default function NavBar() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlelogout = () => {
        logout()
        localStorage.removeItem('whosmydoc')
        navigate('/login')
    }
    useEffect(() => {
        // if (isAuthenticated[0] === false)
        // navigate('/login')
    }, [isAuthenticated])

    return (
        <div>
            {
                // isAuthenticated[0] &&
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand me-auto" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" style={{ width: '100%' }}>
                               {isAuthenticated[0] &&
                               <>
                                <li className="nav-item ms-auto">
                                    <Link className="nav-link active" aria-current="page" to="/patient">Book Doctor</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/patient-profile">Previous Records</Link>
                                </li>
                                <li className="nav-item me-auto">
                                    <Link className="nav-link active" to="#">User Details</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="#">{isAuthenticated[1]?.name}</Link>
                                </li>
                                </>}

                                <li className="nav-item ">
                                    {
                                        isAuthenticated[0] ?
                                            <button className="btn btn-danger" onClick={handlelogout}>Logout</button> :
                                            <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>

                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>}
        </div>
    )
}
