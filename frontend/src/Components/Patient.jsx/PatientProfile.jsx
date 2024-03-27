import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BookingRecorCard from './BookingRecorCard';

function PatientProfile() {
    const [previousRecords, setPreviousRecords] = useState([]);
    const getAllRecords = async () => {
        try {
            const res = await axios.post('http://localhost:3000/patient/previous-records', {
                'email': 'pat1@email'  //for checking
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
        console.log(previousRecords);
    }, [previousRecords])
    return (
        <div>
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