import React, { useState } from 'react';

const Doctorpages = () => {
  const [doctorData] = useState({
    name: 'Dr. John Doe',
    rating: 4.5,
    specialization: 'Cardiologist',
    location: 'Newtown',
    schedule: {
      Monday: ['10:00 AM', '11:00 AM', '12:00 PM'],
      Tuesday: ['9:00 AM', '10:00 AM', '11:00 AM'],
      Wednesday: ['2:00 PM', '3:00 PM', '4:00 PM'],
      Thursday: ['11:00 AM', '12:00 PM', '1:00 PM'],
      Friday: ['9:00 AM', '10:00 AM', '11:00 AM'],
      Saturday: ['10:00 AM', '11:00 AM', '12:00 PM'],
    },
    bookings: {
      Monday: ['Patient 1', 'Patient 2'],
      Tuesday: ['Patient 3'],
      Wednesday: [],
      Thursday: ['Patient 4'],
      Friday: [],
      Saturday: [],
    },
  });

  const renderSchedule = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Schedule</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(doctorData.schedule).map(day => (
            <tr key={day}>
              <td>{day}</td>
              <td>{doctorData.schedule[day].join(', ')}</td>
              <td>{doctorData.bookings[day].join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className='mt-20' style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '600px', padding: '20px', backgroundColor: '#3498db', borderRadius: '10px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Doctor Information</h2>
        <div style={{ color: 'white' }}>
          <p><strong>Name:</strong> {doctorData.name}</p>
          <p><strong>Rating:</strong> {doctorData.rating}</p>
          <p><strong>Specialization:</strong> {doctorData.specialization}</p>
          <p><strong>Location:</strong> {doctorData.location}</p>
        </div>
      </div>

      <div style={{ width: '600px', padding: '20px', backgroundColor: '#3498db', borderRadius: '10px', marginLeft: '20px' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Doctor's Schedule</h2>
        {renderSchedule()}
      </div>
    </div>
  );
}

export default Doctorpages;

