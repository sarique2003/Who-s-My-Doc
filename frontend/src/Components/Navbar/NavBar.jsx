import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider';

export default function Navbar() {

    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlelogout = () => {
        logout()
        navigate('/login')
    }
    useEffect(()=>{
        if(isAuthenticated[0]===false)
        navigate('/login')
    },[isAuthenticated])

    return (
        <div>
            {isAuthenticated[0] &&<nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{width:'100%'}}>
                            <li className="nav-item ms-auto">
                                <Link className="nav-link active" aria-current="page" href="#">Book Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Previous Records</Link>
                            </li>
                            <li className="nav-item me-auto">
                                <Link className="nav-link" href="#">User Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">{isAuthenticated[1].name}</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-danger" onClick={handlelogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>}
        </div>
    )
}
