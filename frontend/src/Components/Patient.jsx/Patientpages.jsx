import React, { useEffect, useState } from "react";
import img from "../../assets/backgoround.jpg";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Patientpages = () => {

  const [locations, setLocation] = useState(['hula'])
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Hematologist",
    "Neurologist",
    "Oncologist",
    "Pediatrician",
    "Psychiatrist",
    "Surgeon",
    "Urologist",
  ];
  //getting the locations available
  const fetchlocations = async () => {
    await axios.get(`http://localhost:3000/patient`).then((result) => {
      console.log(result.data)
      setLocation(result.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  useEffect(() => {
    fetchlocations()
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
  const doctors = [
    {
      specialisation: "Cardiologist",
      name: "Dr. Smith",
      regNo: "12345",
      qualification: "MD",
      location: "Newtown",
      fees: "$100",
      availableTimeSlots: ["10:00 AM", "11:00 AM"],
    },
    {
      specialisation: "Cardiologist",
      name: "Dr. Johnson",
      regNo: "67890",
      qualification: "MBBS",
      location: "Serampore",
      fees: "$80",
      availableTimeSlots: ["9:00 AM", "2:00 PM"],
    },
    {
      specialisation: "Endocrinologist",
      name: "Dr. Williams",
      regNo: "54321",
      qualification: "MD",
      location: "Naihati",
      fees: "$120",
      availableTimeSlots: ["11:00 AM", "3:00 PM"],
    },
    // Add more doctors as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData); // Logging form data to console for demonstration
    if(formData.location!='hulu'){
      axios.post(`http://localhost:3000/patient/find-doctor`,formData).then((result)=>{
        console.log(result.data)
        setFilteredDoctors(result.data)
      }).catch((error)=>{
        crossOriginIsolated.log(error)
      })
    }
    // Filter doctors based on the selected specialisation
    // const filtered = doctors.filter(
    //   (doctor) => doctor.specialisation === formData.specialisation
    // );
    // setFilteredDoctors(filtered);

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
                min={minDate}
                max={maxDate}
                value={formData.date}
                onChange={handleChange}
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
                      <input
                        type="checkbox"
                        checked={doctor.selected || false}
                        onChange={() => handleDoctorSelection(index)}
                        style={{ marginLeft: "-15px" }}
                      />
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
                      {/* <label htmlFor={`doctor${index}`}>
                        Available time slots:{" "}
                        {doctor.availableTimeSlots.join(", ")}
                      </label> */}
                      <br />
                    </li>
                  ))}
                </ul>
                <button
                  onClick={doctorSubmit}
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patientpages;
