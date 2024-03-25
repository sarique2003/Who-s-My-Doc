import React, { useState } from "react";
import img from "../../assets/backgoround.jpg";

const Patientpages = () => {
  const [formData, setFormData] = useState({
    specialty: "",
    location: "",
    date: "",
  });

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

  const locations = [
    "Newtown",
    "Serampore",
    "Naihati",
    "Kalyani",
    "Kankinara",
    "Sealdah",
    "Barrackpore",
    "Dum Dum",
    "Biddhnanagr",
  ];

  const doctors = [
    {
      specialty: "Cardiologist",
      name: "Dr. Smith",
      regNo: "12345",
      qualification: "MD",
      specialisation: "Cardiology",
      location: "Newtown",
      fees: "$100",
      availableTimeSlots: ["10:00 AM", "11:00 AM"],
    },
    {
      specialty: "Cardiologist",
      name: "Dr. Johnson",
      regNo: "67890",
      qualification: "MBBS",
      specialisation: "Dermatology",
      location: "Serampore",
      fees: "$80",
      availableTimeSlots: ["9:00 AM", "2:00 PM"],
    },
    {
      specialty: "Endocrinologist",
      name: "Dr. Williams",
      regNo: "54321",
      qualification: "MD",
      specialisation: "Endocrinology",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // Logging form data to console for demonstration

    // Filter doctors based on the selected specialty
    const filtered = doctors.filter(
      (doctor) => doctor.specialty === formData.specialty
    );
    setFilteredDoctors(filtered);

    // Clear form fields after logging data
    setFormData({
      specialty: "",
      location: "",
      date: "",
    });
  };

  const doctorSubmit = (e) => {
    e.preventDefault();

    // Filter doctors based on the selected specialty
    const selectedDoctors = filteredDoctors.filter((doctor) => doctor.selected);
    console.log("Selected Doctors:", selectedDoctors);

    // Clear form fields after logging data
    setFormData({
      specialty: "",
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
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              style={{ marginBottom: "10px", width: "100%", padding: "8px" }}
            >
              <option value="">Select Specialty</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
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
                      <strong>{doctor.name}</strong> - {doctor.specialty}
                    </label>
                    <br />
                    <label htmlFor={`doctor${index}`}>
                      Reg No: {doctor.regNo}
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
                    <label htmlFor={`doctor${index}`}>
                      Available time slots:{" "}
                      {doctor.availableTimeSlots.join(", ")}
                    </label>
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
  );
};

export default Patientpages;
