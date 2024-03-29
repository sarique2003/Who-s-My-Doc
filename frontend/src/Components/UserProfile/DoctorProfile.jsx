import React, { useContext, useEffect } from 'react'
import './DoctorProfile.css'
import img from '../../assets/img-back.jpg'
import { AuthContext } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'
export default function DoctorProfile() {
    const {isAuthenticated}=useContext(AuthContext)
    const doc=isAuthenticated[0] && isAuthenticated[1]
    const navigate=useNavigate()
    useEffect(()=>{
        if(doc.type!=='doctor')
        navigate('/')
        // console.log(doc)
    },[])
    return (
        <>
        <NavBar/>
        <section class="vh-100 main-section" style={{ "background-color": "#f4f5f7;" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col me-auto ms-auto mb-4 mb-lg-0">
                        <div class="card mb-3" style={{ "border-radius": ".5rem;" }}>
                            <div class="row g-0">
                                <div class="col-md-4 gradient-custom text-center text-white"
                                    style={{ "border-top-left-radius": ".3rem", "border-bottom-left-radius": ".2rem" }}>
                                    <img src={img}
                                        alt="Avatar" class="img-fluid my-5 rounded-circle" style={{ "width": "150px" }} />
                                    <h5>{doc.name}</h5>
                                    
                                    <i class="far fa-edit mb-5"></i>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body p-4">
                                        <h5>Information</h5>
                                        <hr class="mt-0 mb-4" />
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h5>Email</h5>
                                                <p class="text-muted">{doc.email}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h5>Username</h5>
                                                <p class="text-muted">{doc.username}</p>
                                            </div>

                                        </div>
                                        <h5>Projects</h5>
                                        <hr class="mt-0 mb-4" />
                                        <div class="row pt-1">
                                            <div class="col-6 mb-3">
                                                <h5>Qualification</h5>
                                                <p class="text-muted">{doc.qualification}</p>
                                            </div>
                                            <div class="col-6 mb-3">
                                                <h5>Specialisation</h5>
                                                <p class="text-muted">{doc.specialisation}</p>
                                            </div>
                                            
                                        </div>
                                        <hr />
                                        <div class="row pt-1">
                                            <div class="col-4 mb-3">
                                                <h5>Fees</h5>
                                                <p class="text-muted">{doc.fees}</p>
                                            </div>
                                            <div class="col-4 mb-3">
                                                <h5>Location</h5>
                                                <p class="text-muted">{doc.location}</p>
                                            </div>
                                            <div class="col-4 mb-3">
                                                <h5>Timing</h5>
                                                <p class="text-muted">{doc.timeslot_start}:00 - {doc.timeslot_end}:00</p>
                                            </div>
                                        </div>
                                        {/* <div class="d-flex justify-content-start">
                                            <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
