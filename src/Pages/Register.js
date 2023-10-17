import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AlertInfo from '../components/alertInfo'

const Register = (res,req) => {
    const navigate = useNavigate()
    const [email , setEmail] = useState('')
    const [mobile , setMobile] = useState('')
    const [password , setPassword] = useState('')
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [roles , setRoles] = useState('')
    const [info , setInfo] = useState(false)

    const datasubmit = (e) =>{
        e.preventDefault();
        console.log(`This is your ${roles}`);
        console.log("console is working of sending data");
        axios
        .post('http://localhost:8030/users', {email, firstName, lastName, mobile, password, roles} ,{
            headers: {"Content-Type":'application/json'}
        })
        .then((response)=>{
            console.log("response sucefully recevied just before if condition:", response);
            if (response.status == 201) {
                setTimeout(()=>{
                    setEmail("")
                    setMobile("")
                    setPassword("")
                    setFirstName("")
                    setLastName("")
                },[2400])
                console.log("201 status log is working")
                setTimeout(()=>{
                    navigate('/login')
                    setInfo(true)
                },[4500])
            }
        }).catch((error)=>{
            setInfo(false)
            console.log(`This is ${error}`);
        })
    }

  return (
       <div>
            <form className='w-100 center-all-data back-color'>
                {info && <AlertInfo msg={'Your data Submited sucessfully'}/>}
                {/* {res.status == 400 && <p>All field are reqired</p>} */}
                    <div className='container p-5 rounded data-box'>
                        <div className='contaniers mx-auto'>
                            <h1 className='text-center p-2 mb-3 white headingg fw-bold'>Register Now</h1>
                            <div className='mb-3'>
                                <h5 className='white sml-heading fw-bold'>First Name</h5>
                                <input type='text' className='form-control border boder-0 normal' value={firstName} onChange={(e)=>{setFirstName(e.target.value);}}/>
                            </div>
                            <div className='mb-3'>
                                <h5 className='white sml-heading fw-bold'>Last Name</h5>
                                <input type='text' className='form-control border boder-0 normal' value={lastName} onChange={(e)=>{setLastName(e.target.value);}}/>
                            </div>
                            <div className='mb-3'>
                                <h5 className='white sml-heading fw-bold'>Mobile No</h5>
                                <input type='number' className='form-control border boder-0 normal' value={mobile} onChange={(e)=>{setMobile(e.target.value);}}/>
                            </div>
                            <div className='mb-3'>
                                <h5 className='white sml-heading fw-bold'>E-mail Id</h5>
                                <input type='email' className='form-control border boder-0 normal' value={email} onChange={(e)=>{setEmail(e.target.value);}}/>
                            </div>
                            <div className='mb-3'>
                                <h5 className='white sml-heading fw-bold'>Password</h5>
                                <input type='password' className='form-control border boder-0 normal' value={password} onChange={(e)=>{setPassword(e.target.value);}}/>
                            </div>
                            <select className="form-select" onChange={(e)=>setRoles(e.target.value)}>
                                <option>Open this select menu</option>
                                <option value="admin">Admin</option>
                                <option value="student">Student</option>
                            </select>
                            {/* <Form.Control className="mb-3" size="sm" as="select" onChange={(e) => setRoles(e.target.value)}>
                            <option>Select your role</option>
                            <option value='admin'>admin</option>
                            <option value='student'>student</option>
                        </Form.Control> */}
                            <div className='m-0 p-0'>
                            <label className='smokewhite normal fw-bolder'>Having a Account <span>
                                <Link to='/login' style={{color:"white",marginLeft:"3px",marginRight:"3px"}}> Login Noww</Link></span> !!!</label>
                            </div>
                            <button className='btn btn-warning headingg fs-3 border border-0 mt-4' onClick={datasubmit}>
                                Submitt !!!
                            </button>
                        </div>
                        
                    </div>
            </form>
       </div>
  )
}

export default Register
