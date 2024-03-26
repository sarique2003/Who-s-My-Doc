import React, { useEffect, useState } from "react";
import img from "../../assets/backgoround.jpg";
import Navbar from "../Navbar/Navbar";
import "./Patientpages.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Patientpages = () => {

  const [locations, setLocation] = useState([]);
  const [specialties, setSpecialities] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate();

  //getting the locations available
  const fetchlocations = async () => {
    await axios.get(`http://localhost:3000/patient/get-locations`).then((result) => {
      console.log(result.data)
      setLocation(result.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const fetchSpecialities = async () => {
    await axios.get(`http://localhost:3000/patient/get-specialities`).then((result) => {
      setSpecialities(result.data)
    }).catch((error) => {
      console.log(error)
    })

  }
  useEffect(() => {
    fetchlocations();
    fetchSpecialities();
  }, [])

  //getting the dates available
  const currentDate = new Date();
  let minDate = new Date(currentDate);
  minDate.setDate(currentDate.getDate() + 1); // Adding 7 days to the current date
  let maxDate = new Date(currentDate);
  maxDate.setDate(currentDate.getDate() + 7);
  // Format the dates in yyyy-mm-dd format for the input field
  minDate = minDate.toISOString().split('T')[0];
  maxDate = maxDate.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    specialisation: specialties[0],
    location: locations[0],
    date: minDate,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //for booking the slot
  const [bookingDetails, setBookingDetails] = useState({
    doctor_email: '',
    patient_email: 'pat1@email',  //later it will be fetched from the context api
    date_of_appointment: minDate,
    slot_booked: 0
  });

  const handlechangeBookingDetails = (name, value) => {
    setBookingDetails((details) => {
      return { ...details, [name]: value }
    })
  }



  const bookDoctor = async () => {
    console.log("Booking details before the api call ", bookingDetails);
    const res = await axios.post(`http://localhost:3000/patient/book-doctor`, bookingDetails);
    // navigate("/");   //write here required destination

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData); // Logging form data to console for demonstration
    if (formData.location != 'hulu') {
      axios.post(`http://localhost:3000/patient/find-doctor`, formData).then((result) => {
        console.log(result.data)
        setFilteredDoctors(result.data)
      }).catch((error) => {
        crossOriginIsolated.log(error)
      })
    }
  };

  const doctorSubmit = (e) => {
    e.preventDefault();

    // Filter doctors based on the selected specialisation
    const selectedDoctors = filteredDoctors.filter((doctor) => doctor.selected);
    console.log("Selected Doctors:", selectedDoctors);

    // Clear form fields after logging data
    setFormData({
      specialisation: "",
      location: "",
      date: "",
    });

    // Reset selected state for doctors
    setFilteredDoctors(
      filteredDoctors.map((doctor) => ({ ...doctor, selected: false }))
    );
  };

  const handleDoctorSelection = (index) => {
    const updatedDoctors = filteredDoctors.map((doctor, i) => {
      if (i === index) {
        return { ...doctor, selected: !doctor.selected };
      }
      return doctor;
    });
    setFilteredDoctors(updatedDoctors);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{
          backgroundColor: "#9ACD32",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div style={{ marginRight: "20px", height: "280px" }}>
          <img
            src={img}
            alt="Placeholder"
            style={{
              maxHeight: "100%",
              width: "300px",
              marginTop: "300px",
              marginLeft: "40px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginTop: "-10px",
            marginLeft: "450px",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "auto",
              maxHeight: "400px",
              overflowY: "auto", // Add overflowY to enable vertical scrolling if needed
              backgroundColor: "#3498db",
              borderRadius: "10px",
              padding: "20px",
              marginLeft: "10px",
            }}
          >
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Patient Information Form
            </h2>
            <form onSubmit={handleSubmit}>
              <select
                name="specialisation"
                value={formData.specialisation}
                onChange={handleChange}
                style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
              >
                <option value="">Select Doctor</option>
                {specialties.map((specialisation, index) => (
                  <option key={index} value={specialisation}>
                    {specialisation}
                  </option>
                ))}
              </select>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
              >
                <option value="">Select Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <input
                type="date"
                name="date"
                // min={minDate}   //for testing purpose removing the constraint
                // max={maxDate}
                value={formData.date}
                onChange={(event) => {
                  handleChange(event);
                  handlechangeBookingDetails("date_of_appointment", formData.date);
                  // console.log(bookingDetails.date_of_appointment);
                }}
                style={{ marginBottom: "20px", width: "100%", padding: "8px" }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2ecc71",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </form>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginLeft: "200px",
              height: "400px", // Set a fixed height for the container
              overflowY: "auto", // Enable vertical scrolling
            }}
          >
            <div style={{ marginLeft: "20px", width: "100%" }}>
              <div
                style={{
                  width: "600px", // Adjust width as needed
                  backgroundColor: "#3498db",
                  borderRadius: "10px",
                  padding: "20px",
                  marginTop: "50px", // Added marginTop
                }}
              >
                <h2 style={{ color: "white", marginBottom: "20px" }}>
                  Available Doctors
                </h2>
                <ul>
                  {filteredDoctors.map((doctor, index) => (
                    <li key={index}>
                      <label htmlFor={`doctor${index}`}>
                        <strong>{doctor.name}</strong> - {doctor.specialisation}
                      </label>
                      <br />
                      <label htmlFor={`doctor${index}`}>
                        Reg No: {doctor.regno}
                      </label>
                      <br />
                      <label htmlFor={`doctor${index}`}>
                        Qualification: {doctor.qualification}
                      </label>
                      <br />
                      <label htmlFor={`doctor${index}`}>
                        Specialization: {doctor.specialisation}
                      </label>
                      <br />
                      <label htmlFor={`doctor${index}`}>
                        Location: {doctor.location}
                      </label>
                      <br />
                      <label htmlFor={`doctor${index}`}>
                        Fees: {doctor.fees}
                      </label>
                      <br />
                      {
                        doctor.slots.map((slot, index2) => (
                          slot ?
                            <button key={index2} className={(doctor.email === bookingDetails.doctor_email && index2 === bookingDetails.slot_booked) ? "selected_slot" : "available_slot"}
                              onClick={() => {
                                handlechangeBookingDetails("doctor_email", doctor.email);
                                handlechangeBookingDetails("slot_booked", index2);

                              }}
                            > Book Slot {doctor.timeslot_start + index2} : 00 Hr</button> :
                            <button key={index2} disabled={true} style={{ background: "red", color: "white", margin: "4px" }}> Unavialable  {doctor.timeslot_start + index2} : 00 Hr</button>

                        ))
                      }
                      <br />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={bookDoctor}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#2ecc71",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "20px", // Added marginTop
                  }}
                >
                  {bookingDetails.doctor_email !== "" ? "Book You Slot" : "Select You Slot"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Patientpages;
