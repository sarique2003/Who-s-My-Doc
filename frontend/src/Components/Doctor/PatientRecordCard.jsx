import React from 'react'

function PatientRecordCard({ rec }) {
    return (
        <div className='record-card'>
            <div className='left'>
                <label className='name'>
                    <strong>{rec.name}</strong>
                </label>
                <br />
                <label >
                    Email: {rec.email}
                </label>
                <br />
                <label >
                    Age: {rec.age}
                </label>
                <br />
                <label >
                    Sex: {rec.sex}
                </label>
                <br />
            </div>
            <div className='right'>
                <br />
                <label style={{ color: 'black' }}>Booking Date : {rec.date_of_appointment.split('T')[0]}</label>
                <br />
                <label style={{ color: 'black' }}>Slot : {rec.slot_booked}:00 Hr.</label>
            </div>
        </div>
    )

}

export default PatientRecordCard