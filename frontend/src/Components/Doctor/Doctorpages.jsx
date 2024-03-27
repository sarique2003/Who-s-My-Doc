import React, { useContext, useEffect, useState } from 'react';
import booking from './resp';
import "./Doctorpages.css";
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';

const Doctorpages = () => {
  const date=new Date()
  const nd=new Date()
  const dates=[]
  for(let i=0;i<7;i++){
    nd.setDate(date.getDate()+i+1)
    dates.push(nd.toISOString().split('T')[0])
  }
  
  let email=''
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  if(isAuthenticated[0]){
    email=isAuthenticated[1].email
  }
  console.log(email)
  console.log(dates)
  const [doctorData,setdoctorData] = useState({
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
    const { start_time,bookings } = doctorData;
    const timingSlots = [];
    for (let i = 0; i < bookings[0].length; i++) {
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
            {/* <th>Schedule</th> */}
            {renderTimingSlots()}
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={date}>
              <td>{date}</td>
              {/* <td>
                {slots.map((slot, i) => (
                  <button key={i} className={slot.status ? 'booked' : 'not-booked'}>
                    {slot.status ? 'booked' : 'not-booked'}
                  </button>
                ))}
              </td> */}
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

  const getdatadoctor=async()=>{
    await axios.post(`http://localhost:3000/doctor`,{'email':email}).then((result)=>{
      console.log(result.data)
      setdoctorData((data)=>{
        return {...data,'bookings':result.data.slots,'start_time':result.data.start_time}
      })
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getdatadoctor()
  },[])

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
