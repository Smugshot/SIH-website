import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({component : Component}) => {
    let auth = { token : false}
  return (
         auth.token ? <Component/> :  <Navigate to={'/login'}  />
  )
    
}

export default PrivateRoute;
