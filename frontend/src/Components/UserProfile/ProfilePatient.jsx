
// PatientProfile.jsx

import React, { useContext, useEffect } from 'react';
import './ProfilePatient.css';
import img2 from '../../assets/prof-user.jpg';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

export default function ProfilePatient() {
    const { isAuthenticated } = useContext(AuthContext);
    const patient = isAuthenticated[0] && isAuthenticated[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (patient.type === 'doctor')
            navigate('/');
    }, []);

    return (
        <>
            <NavBar />
            <section className="vh-100 main-section" style={{ backgroundColor: "#f4f5f7" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col d-flex justify-content-center mb-4 mb-lg-0">
                            <div className="card mb-3" style={{ borderRadius: ".5rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4    gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: ".3rem", borderBottomLeftRadius: ".2rem" }}>
                                        <img src={img2} alt="Avatar" className="img-fluid my-5 rounded-circle" style={{ width: "150px" }} />
                                        <h5>{patient.name}</h5>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8 ">
                                        <div className="card-body p-4">
                                            <h5>Information</h5>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h5>Email</h5>
                                                    <p className="text-muted">{patient.email}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h5>Username</h5>
                                                    <p className="text-muted">{patient.username}</p>
                                                </div>
                                            </div>
                                            <h5>Details</h5>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h5>Age</h5>
                                                    <p className="text-muted">{patient.age}</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h5>Sex</h5>
                                                    <p className="text-muted">{patient.sex===''?'Male':patient.sex}</p>
                                                </div>
                                            </div>
                                            <hr />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

