import React, { useContext, useEffect, useState } from 'react';
import booking from './resp';
import "./Doctorpages.css";
import axios from 'axios';
import { AuthContext } from '../../context/AuthProvider';
import Modal from './Modal';
import NavBar from '../Navbar/NavBar';
// import Navbar from '../Navbar/NavBar';

const Doctorpages = () => {

  const [patientdetails, setpatientDetails] = useState('')
  const date = new Date()
  const nd = new Date()
  const dates = []
  for (let i = 0; i < 7; i++) {
    nd.setDate(date.getDate() + i + 1)
    dates.push(nd.toISOString().split('T')[0])
  }

  let email = ''
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  if (isAuthenticated[0]) {
    email = isAuthenticated[1].email
  }

  const [doctorData, setdoctorData] = useState({
    bookings: booking.slots,
    start_time: booking.start_time
  });

  // Function to render timing slots
  const renderTimingSlots = () => {
    const { start_time, bookings } = doctorData;
    const timingSlots = [];
    for (let i = 0; i < bookings[0].length; i++) {
      timingSlots.push(
        <td key={i} style={{ width: '20%' }}>
          {start_time + i}:00 - {start_time + i + 1}:00 Hr.
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

              {bookings[index].map((booking, i) => (
                <td key={i}>
                  <button className={booking.status ? 'booked' : 'not-booked'} disabled={!booking.status} name={booking.status ? booking.content.patient_email : ''} onClick={handleShowPatient} date={dates[index]} slot={i} >
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

  const getdatadoctor = async () => {
    await axios.post(`http://localhost:3000/doctor`, { 'email': email }).then((result) => {
      console.log(result.data)
      setdoctorData((data) => {
        return { ...data, 'bookings': result.data.slots, 'start_time': result.data.start_time }
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  const showmodal = () => {
    const btn = document.getElementById('openmodal')
    btn.click();
  }

  const handleShowPatient = async (e) => {
    console.log(e.target.getAttribute('date'))
    await axios.post(`http://localhost:3000/doctor/get-patient`, { 'patient_email': e.target.name }).then((result) => {
      console.log(result.data)
      setpatientDetails({
        ...result.data,
        'date': e.target.getAttribute('date'),
        'slot': `${doctorData.start_time + parseInt(e.target.getAttribute('slot'))}-${doctorData.start_time + parseInt(e.target.getAttribute('slot')) + 1}`
      })

    }).catch((error) => {
      console.log(error)
    })
  }
  // console.log(patientdetails)

  useEffect(() => {
    getdatadoctor()
  }, [])
  console.log(patientdetails)
  useEffect(() => {
    if (patientdetails !== '')
      showmodal()
  }, [patientdetails])


  return (
    <>
      <NavBar />
      <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="schedule-container" style={{ width: 'fit-content', padding: '0px', backgroundColor: '#3498db', borderRadius: '10px', marginLeft: '20px', textAlign: 'center' }}>
          <h2 style={{ color: 'black', marginBottom: '20px' }}>Doctor's Schedule</h2>
          <div className="schedule-container2" style={{ marginLeft: "15px", marginRight: "15px" }}>
            {renderSchedule()}
          </div>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id='openmodal' style={{ display: 'none' }}>

          Launch demo modal
        </button>
        <Modal patientdetails={patientdetails} />
      </div >
    </>

  );
};

export default Doctorpages;
