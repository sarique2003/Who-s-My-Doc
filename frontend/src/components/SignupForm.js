<<<<<<< HEAD
=======
// import React, { useState } from 'react';
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

// const SignupForm = ({ setIsLoggedIn }) => {
//   const naviga = useNavigate();
//   const [formData, setFormData] = useState({
//     firstname: '',
//     age: '',
//     sex: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmpassword: '',
//   });

//   function Changehandler(event) {
//     setFormData((prevData) => ({
//       ...prevData,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   function submitHandler(event) {
//     event.preventDefault();

//     if(formData.password !=formData.confirmpassword){
//       toast.error('invalid password');
//       return;
//     }
//     setIsLoggedIn = true;
//     toast.success('Successfully created your account');
//     const acc = {
//       ...formData
//     };
//     console.log("printing")
//     console.log(acc);
//     naviga('/dashboard');


//   }

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div>
//           <button>Patient</button>
//           <button>Doctor</button>
//         </div>
//         <div>
//           <label>
//             <p>
//                Name <sup>*</sup>{' '}
//             </p>
//             <input
//               name="firstname"
//               type="text"
//               value={formData.firstname}
//               onChange={Changehandler}
//               placeholder="Enter the First Name"
//               required
//             />
//           </label>
//         </div>
//         <label>
//           <p>
//             Age <sup>*</sup>{' '}
//           </p>
//           <input
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={Changehandler}
//             placeholder="Enter the age"
//             required
//           />
//         </label>
//         <label>
//           <p>
//             Sex <sup>*</sup>{' '}
//           </p>
//           <select
//             name="sex"
//             value={formData.sex}
//             onChange={Changehandler}
//             required
//           >
//             <option value="">Select Sex</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Third Gender">Third Gender</option>
//           </select>
//         </label>
//         <label>
//           <p>
//             Email <sup>*</sup>{' '}
//           </p>
//           <input
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={Changehandler}
//             placeholder="Enter the email"
//             required
//           />
//         </label>
//         <label>
//           <p>
//             Username <sup>*</sup>{' '}
//           </p>
//           <input
//             name="username"
//             type="text"
//             value={formData.username}
//             onChange={Changehandler}
//             placeholder="Enter the username"
//             required
//           />
//         </label>
//         <div>
//           <label>
//             <p>
//               Password <sup>*</sup>{' '}
//             </p>
//             <input
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               value={formData.password}
//               onChange={Changehandler}
//               placeholder="Enter the Password"
//               required
//             />
//             <span onClick={() => setShowPassword((prev) => !prev)}>
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </label>
//           <label>
//             <p>
//               Confirm Password <sup>*</sup>{' '}
//             </p>
//             <input
//               name="confirmpassword"
//               type={showConfirmPassword ? 'text' : 'password'}
//               value={formData.confirmpassword}
//               onChange={Changehandler}
//               placeholder="Enter the Confirm Password"
//               required
//             />
//             <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
//               {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </label>
//         </div>

//         <button>Create Account</button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;


>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
<<<<<<< HEAD
import './SignupForm.css';
=======
import axios from 'axios';
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    sex: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
    reg_no: '',
    experience: '',
    location: '',
    qualifications: '',
    specialisation: '',
    timeslot_start: '',
    timeslot_end: '',
    fee_charges: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('patient'); // Default to patient

  function Changehandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  }

  const submitHandler = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

<<<<<<< HEAD
    setIsLoggedIn= true;
    toast.success('Successfully created your account');
    naviga('/dashboard');
=======
    try {
      const base_url = process.env.REACT_APP_API;

      if (userType === 'patient') {
        console.log("here");
        const data = {
          "username": formData.username,
          "email": formData.email,
          "password": formData.password,
          "name": formData.name,
          "age": parseInt(formData.age),
          "sex": formData.sex,
          "type": userType
        };
        console.log(data);
        // const { username, email, password, name, age, sex } = formData;
        // const type = userType;

        const res = await axios.post(`http://localhost:3000/register`, data);
        // const res = await axios.post(`http://localhost:3000/register`,
        //   {
        //     "username": "pat1",
        //     "email": "pat1@email",
        //     "password": "1234",
        //     "name": "Patient Name1",
        //     "age": 30,
        //     "sex": "Male",
        //     "type": "patient"
        //   }

        // );

        // const res = await axios.post(`http://localhost:3000/register`, {
        //   "username": formData.username,
        //   "email": formData.email,
        //   "password": formData.password,
        //   "name": formData.name,
        //   "age": parseInt(formData.age),
        //   "sex": formData.sex,
        //   "type": userType
        // });
        if (res.data.status) {
          console.log("successfully logged in");
          toast.success("Logged In successfully");
          navigate('/login');
        }
        else {
          console.log("Problem in register");
          toast.error(res.data.message);
        }

      }
      else {
        const res = await axios.post(`http://localhost:3000/register`, {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          regno: formData.reg_no,
          qualification: formData.qualifications,
          specialisation: formData.specialisation,
          experience: formData.experience,
          fees: formData.fee_charges,
          timeslot_start: formData.timeslot_start,
          timeslot_end: formData.timeslot_end,
          location: formData.location,
          type: userType
        });

        if (res.data.status) {
          toast.success(res.data.content);
          navigate('/login');
        }
        else {
          toast.error(res.data.message);
        }
      }



    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }

    // setIsLoggedIn(true);
    // toast.success('Successfully created your account');
    // navigate('/dashboard');
    console.log("submit haldler here");
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
  }

  const doctorFormFields = (
    <>
      <label>
        <p>Registration Number <sup>*</sup>{' '}</p>
        <input
          name="reg_no"
          type="text"
          value={formData.reg_no}
          onChange={Changehandler}
          placeholder="Enter Registration Number"
          required
        />
      </label>
      <label>
        <p>Name <sup>*</sup>{' '}</p>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={Changehandler}
          placeholder="Enter Name"
          required
        />
      </label>

      <label>
        <p>Email <sup>*</sup>{' '}</p>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={Changehandler}
          placeholder="Enter Email"
          required
        />
      </label>

      <label>
        <p>Username <sup>*</sup>{' '}</p>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={Changehandler}
          placeholder="Enter Username"
          required
        />
      </label>
      <label>
        <p>Qualification <sup>*</sup>{' '}</p>
        <input
          name="qualifications"
          type="text"
          value={formData.qualifications}
          onChange={Changehandler}
          placeholder="Enter qualification"
          required
        />
      </label>

      <label>
        <p>Specialisation<sup>*</sup>{' '}</p>
        <input
          name="specialisation"
          type="text"
          value={formData.specialisation}
          onChange={Changehandler}
          placeholder="Enter specialisation"
          required
        />
      </label>
      <label>
        <p>Fees<sup>*</sup>{' '}</p>
        <input
<<<<<<< HEAD
          name="fee_charges"
          type= "number"
=======
          name="fees_charge"
          type="number"
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
          value={formData.fee_charges}
          onChange={Changehandler}
          placeholder="Enter fees"
          required
        />
      </label>


      <label>
        <p>Experience <sup>*</sup>{' '}</p>
        <input
          name="experience"
          type="text"
          value={formData.experience}
          onChange={Changehandler}
          placeholder="Enter Experience"
          required
        />
      </label>

      <label>
        <p>Location<sup>*</sup>{' '}</p>
        <input
          name="location"
          type="text"
          value={formData.location}
          onChange={Changehandler}
          placeholder="Enter location"
          required
        />
      </label>
      <div>  <label>
        <p>timeslot_start<sup>*</sup>{' '}</p>
        <input
<<<<<<< HEAD
          name="timeslot_start"
          type="text"
          value={formData.timeslot_start}
=======
          name="simeslot_start"
          type="number"
          value={formData.specialisation}
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
          onChange={Changehandler}
          placeholder="Enter timeslot_start"
          required
        />
      </label>

        <label>
          <p>timeslot_end<sup>*</sup>{' '}</p>
          <input
            name="timeslot_end"
            type="number"
            value={formData.timeslot_end}
            onChange={Changehandler}
            placeholder="Enter timeslot_end"
            required
          />
        </label></div>
      <div>
        <label>
          <p>Password <sup>*</sup>{' '}</p>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={Changehandler}
            placeholder="Enter Password"
            required
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <label>
          <p>Confirm Password <sup>*</sup>{' '}</p>
          <input
            name="confirmpassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmpassword}
            onChange={Changehandler}
            placeholder="Confirm Password"
            required
          />
          <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
      </div>


    </>
  );

  return (
    <div className="container ">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card mt-5">
          <div className="card-body">
            <div className="mb-3">

        <button className ='patient-btn' onClick={() => setUserType('patient')}>Patient</button>
        <button  className ='doctor-btn' onClick={() => setUserType('doctor')}>Doctor</button>
      </div>
<<<<<<< HEAD
     {userType === 'doctor' ? (
        <form className='signupform' onSubmit={submitHandler}>
=======
      {userType === 'doctor' ? (
        <form onSubmit={submitHandler}>
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
          {doctorFormFields}
          <button className=" btn-primary">Create Account</button>
        </form>
      ) : (
        <form className='signupform' onSubmit={submitHandler}>
          <div>
            <label>
              <p>Name <sup>*</sup>{' '}</p>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={Changehandler}
                placeholder="Enter Name"
                required
              />
            </label>
          </div>
          <label>
            <p>Age <sup>*</sup>{' '}</p>
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={Changehandler}
              placeholder="Enter Age"
              required
            />
          </label>
          <label>
            <p>Sex <sup>*</sup>{' '}</p>
            <select
              name="sex"
              value={formData.sex}
              onChange={Changehandler}
              required
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Third Gender">Third Gender</option>
            </select>
          </label>
          <label>
            <p>Email <sup>*</sup>{' '}</p>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={Changehandler}
              placeholder="Enter Email"
              required
            />
          </label>
          <label>
            <p>Username <sup>*</sup>{' '}</p>
            <input
              name="username"
              type="text"
              value={formData.username}
              onChange={Changehandler}
              placeholder="Enter Username"
              required
            />
          </label>
          <div>
            <label>
              <p>Password <sup>*</sup>{' '}</p>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={Changehandler}
                placeholder="Enter Password"
                required
              />
              <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
            <label>
              <p>Confirm Password <sup>*</sup>{' '}</p>
              <input
                name="confirmpassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmpassword}
                onChange={Changehandler}
                placeholder="Confirm Password"
                required
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </label>
          </div>
          <button className="btn-primary">Create Account</button>
        </form>
      )}
    </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default SignupForm;
