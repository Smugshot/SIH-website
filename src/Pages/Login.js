import axios from 'axios'
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'

const Login = (e) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(email,password );
  const dataSubmit = (e) =>{
    e.preventDefault()
    console.log(`Responese is sending for ${email} & password is ${password}`);
    axios
    .post('http://localhost:8030/login', {email , password} ,{
            headers: {"Content-Type":'application/json'}
    })
    .then((response)=>{
      console.log("response sucefully recevied just before if condition:", response);
      if (response.status == 200) {
          console.log(response, "Running");
          navigate('/Dashboard.js')
          
      }
  }).catch((error)=>{
      console.log(`This is ${error}`);
  })
  }

  return (
    <div  style={{"backgroundColor":"", "height":"100vh"}} className='back-color'>
        <form className='center-all-data'>
                <div className='container p-5 rounded-4 data-box' >
                        <h1 className='pt-2 text-center white pb-5 headingg fw-bold fs-1' >Welcome To the Login Page !!</h1>
                  <div className="mb-3">
                        <h5 className='white sml-heading fs-4 bold'>Email address</h5>
                        <input type="email" className="form-control border border-0 normal" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} 
                        onChange={(e)=> setEmail(e.target.value)}/>
                        <div id="emailHelp" className="form-text smokewhite normal fw-bold fs-6"> We'll never share your email with anyone else. </div>
                  </div>
                  <div className="mb-3">
                        <h5 className='white sml-heading fs-4 bold'>Password</h5>
                        <input type="email" 
                          className="form-control border border-0 normal" id="exampleInputEmail1"
                          value={password} onChange={(e)=> setPassword(e.target.value)}/>
                  </div>
                  <div className='mb-3'>
                    <p className='form-text smokewhite normal fw-bold fs-6'>Haven't Register yet
                    <span>
                    <Link to='/register' style={{color:"white",marginLeft:"3px",marginRight:"3px"}}>Register Now</Link>
                    </span> 
                    !!!</p>
                  </div>
                  <button type="submit" className="btn btn-warning headingg fs-3 border border-0 mt-4" onClick={dataSubmit}>
                        Submit
                  </button>
                </div>
        </form>
    </div>
  )
}

export default Login
