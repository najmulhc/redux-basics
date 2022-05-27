import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Users = () => {
    const user = useSelector((state) => state.user.value);
    useEffect(() => {
       console.log(user)
    }, [user])
  return (
    <>
      {user.map((use) => (
        <li>{use.name}</li>
      ))}
    </>
  );
};

export default Users;
