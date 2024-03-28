import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import BookingRecorCard from './BookingRecorCard';
import NavBar from '../Navbar/NavBar';
import { AuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function PatientProfile() {
    const { isAuthenticated, login, logout } = useContext(AuthContext);
    const [previousRecords, setPreviousRecords] = useState([]);
    const navigate = useNavigate();

    const getAllRecords = async () => {
        try {
            const res = await axios.post('http://localhost:3000/patient/previous-records', {
                'email': isAuthenticated[1]?.email  //for checking
            })
            setPreviousRecords(res.data);

        } catch (error) {
            console.log("Error in fetching records");
        }
    }
    useEffect(() => {
        getAllRecords();
    }, [])

    useEffect(() => {
        if (isAuthenticated[0] === false)
            navigate('/login')
    }, [isAuthenticated])

    useEffect(() => {
        console.log(previousRecords);
    }, [previousRecords])

    return (
        <div>
            <NavBar />
            <br />
            {
                previousRecords.map((rec, index) => {
                    return (
                        <BookingRecorCard rec={rec} />
                    )
                })
            }
        </div>
    )
}

export default PatientProfile