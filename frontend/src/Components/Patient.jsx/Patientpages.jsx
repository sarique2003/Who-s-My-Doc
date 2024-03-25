import React, { useState } from 'react';

const Patientpages = () => {
  const [formData, setFormData] = useState({
    specialty: '',
    location: '',
    date: ''
  });

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const specialties = [
    'Cardiologist',
    'Dermatologist',
    'Endocrinologist',
    'Gastroenterologist',
    'Hematologist',
    'Neurologist',
    'Oncologist',
    'Pediatrician',
    'Psychiatrist',
    'Surgeon',
    'Urologist'
  ];

  const locations = [
    'Newtown',
    'Serampore',
    'Naihati',
    'Kalyani',
    'Kankinar',
    'Sealdah',
    'Barrackpore',
    'Dum Dum',
    'Biddhnanagr'
  ];

  const doctors = [
    { specialty: 'Cardiologist', name: 'Dr. Smith', availableTimeSlots: ['10:00 AM', '11:00 AM'] },
    { specialty: 'Dermatologist', name: 'Dr. Johnson', availableTimeSlots: ['9:00 AM', '2:00 PM'] },
    { specialty: 'Endocrinologist', name: 'Dr. Williams', availableTimeSlots: ['11:00 AM', '3:00 PM'] },
    // Add more doctors as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // Logging form data to console for demonstration

    // Filter doctors based on the selected specialty
    const filtered = doctors.filter(doctor => doctor.specialty === formData.specialty);
    setFilteredDoctors(filtered);

    // Clear form fields after logging data
    setFormData({
      specialty: '',
      location: '',
      date: ''
    });
  };

  return (
    <div className='mt-20' style={{ display: 'flex', justifyContent: 'center', marginTop: '250px', marginLeft: '350px' }}>
      <div
        style={{
          width: '400px',
          height: 'auto',
          backgroundColor: '#3498db',
          borderRadius: '10px',
          padding: '20px',
          marginLeft: '100px' // Adjusted left margin
        }}
      >
        <h2 style={{ color: 'white', marginBottom: '20px' }}>Patient Information Form</h2>
        <form onSubmit={handleSubmit}>
          <select
            name='specialty'
            value={formData.specialty}
            onChange={handleChange}
            style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
          >
            <option value=''>Select Specialty</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>
          <select
            name='location'
            value={formData.location}
            onChange={handleChange}
            style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
          >
            <option value=''>Select Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <input
            type='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            style={{ marginBottom: '20px', width: '100%', padding: '8px' }}
          />
          <button type='submit' style={{ width: '100%', padding: '10px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px' }}>Submit</button>
        </form>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '200px' }}>
        <div style={{ marginLeft: '20px' }}>
          <div
            style={{
              width: '300px', // Adjust width as needed
              backgroundColor: '#3498db',
              borderRadius: '10px',
              padding: '20px',
              marginTop: '50px' // Added marginTop
            }}
          >
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Available Doctors</h2>
            <ul>
              {filteredDoctors.map((doctor, index) => (
                <li key={index}>
                  <strong>{doctor.name}</strong> - {doctor.specialty}<br />
                  Available time slots: {doctor.availableTimeSlots.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patientpages;
