import React from 'react'
import Login from '../Loginpage/Login';
export default function Privateroute({children}) {
    const token=localStorage.getItem('userToken');
  return (
    <div>
    {
        token ? children : <Login />
    }
    </div>
  )
}
