import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';

const Reset = () => {
    const dispatch = useDispatch();
    const reset = e => {
        e.preventDefault();
        dispatch(login({
            name: "Reset Name", 
            location:"Reset Location"
        }))
    }
  return (
    <button onClick={reset}>Reset</button>
  )
}

export default Reset