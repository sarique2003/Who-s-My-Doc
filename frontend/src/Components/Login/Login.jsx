import React, { useState } from 'react'
import './Login.css'
import img from '../../assets/img-back.jpg'
import { Link } from 'react-router-dom'
export default function Login() {
    const [type, setType] = useState('doctor')

    const [user,setUser]=useState({
        email:'',
        password:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(user.password.length<8){
            alert('Password must be of at least 8 characters')
            return
        }
    }

    const handletype = (e) => {
        setType(e.target.value)
        console.log(e.target.value)
    }
    
    const handlechangeUser=(e)=>{
        setUser((us)=>{
            return {...us,[e.target.name]:e.target.value}
        })
    }

    return (
        <div className="container-main rounded d-flex ailgn-content-center ">
            <div className="main-box rounded m-auto row">
                <div className="col-6 form-inp overflow-auto">
                    <h1 className="text-center mt-3">Login</h1>
                    <form className='my-5 ps-2' >
                        <div className="d-flex  input-div type-sel align-items-center justify-content-center fs-5">
                            Select the type of User
                            <select id="dropdown  " name="dropdown" v className='mx-2 p-2 rounded' value={type} onChange={handletype}>
                                <option value="doctor" >Doctor</option>
                                <option value="patient" >Patient</option>

                            </select>
                        </div>
                        <hr />
                        <div className=" input-div my-3 fs-5">
                            <p className='d-block'>Enter your Email</p>
                            <input type="email" className='p-2 b-0 rounded' required placeholder='Enter your email' name='email' onChange={handlechangeUser} value={user.email} />
                        </div>
                        <hr />
                        <div className=" input-div my-3 fs-5">
                            <p className='d-block'>Enter your password</p>

                            <input type="password" visible className='p-2 b-0 rounded' required placeholder='Enter your password' name='password' onChange={handlechangeUser} value={user.password} />
                        </div>
                        <div className="submit-button mt-5 d-flex justify-content-center">
                            <button className="btn btn-success">Login</button>

                        </div>
                        <div className="link-to-signup mt-2 text-center">
                            Don't have an account?
                            <Link to='/'>Register</Link>
                        </div>

                    </form>

                </div>
                <div className="col-6 p-0 ">
                    <img src={img} alt="" className='rounded-end' />
                </div>
            </div>
        </div>
    )
}
