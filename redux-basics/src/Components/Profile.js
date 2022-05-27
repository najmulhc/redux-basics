import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value)
  return (
      <div>
          <h1>Profile</h1>
          <h2>Name:{ user.name}</h2>
          <h2>location:{user.location}</h2>
          
    </div>
  )
}

export default Profile