import React, { useState } from 'react';
import booking from './resp';
import "./Doctorpages.css";

const Doctorpages = () => {
  const [doctorData] = useState({
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    },
    bookings: booking.slots,
    start_time: booking.start_time
  });

  // Function to render timing slots
  const renderTimingSlots = () => {
    const { start_time } = doctorData;
    const timingSlots = [];
    for (let i = 0; i < 4; i++) {
      timingSlots.push(
        <td key={i} style={{ width: '20%' }}>
          {start_time + i}:00 - {start_time + i + 1}:00
        </td>
      );
    }
    return timingSlots;
  };

  // Function to render schedule
  const renderSchedule = () => {
    const { schedule, bookings } = doctorData;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Schedule</th>
            {renderTimingSlots()}
          </tr>
        </thead>
        <tbody>
          {Object.entries(schedule).map(([day, slots], index) => (
            <tr key={day}>
              <td>{day}</td>
              <td>
                {slots.map((slot, i) => (
                  <button key={i} className={slot.status ? 'booked' : 'not-booked'}>
                    {slot.status ? 'booked' : 'not-booked'}
                  </button>
                ))}
              </td>
              {bookings[index].map((booking, i) => (
                <td key={i}>
                  <button className={booking.status ? 'booked' : 'not-booked'}>
                    {booking.status ? 'booked' : 'not-booked'}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="mt-20" style={{ display: 'flex', justifyContent: 'center' }}>
      <div  className="schedule-container" style={{ width: 'fit-content', padding: '20px', backgroundColor: '#3498db', borderRadius: '10px', marginLeft: '20px' ,textAlign: 'center'  }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Doctor's Schedule</h2>
        <div className="schedule-container">
          {renderSchedule()}
        </div>
      </div>
    </div>
   
  );
};

export default Doctorpages;
