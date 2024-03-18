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


import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupForm = ({ setIsLoggedIn }) => {
  const naviga = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
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
  }

  function submitHandler(event) {
    event.preventDefault();
   
    if (formData.password !== formData.confirmpassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoggedIn(true);
    toast.success('Successfully created your account');
    naviga('/dashboard');
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
          name="fees_charge"
          type= "number"
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
          name="simeslot_start"
          type="text"
          value={formData.specialisation}
          onChange={Changehandler}
          placeholder="Enter timeslot_start"
          required
        />
      </label>
      
      <label>
        <p>timeslot_end<sup>*</sup>{' '}</p>
        <input
          name="timeslot_end"
          type="text"
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
    <div>
      <div>
        <button onClick={() => setUserType('patient')}>Patient</button>
        <button onClick={() => setUserType('doctor')}>Doctor</button>
      </div>
     {userType === 'doctor' ? (
        <form onSubmit={submitHandler}>
          {doctorFormFields}
          <button>Create Account</button>
        </form>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label>
              <p>Name <sup>*</sup>{' '}</p>
              <input
                name="firstname"
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
          <button>Create Account</button>
        </form>
      )}
    </div>
  );
};

export default SignupForm;
