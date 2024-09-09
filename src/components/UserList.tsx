import React from 'react'
import { UserContext } from '../context';
import { useContext } from 'react';

const UserList:React.FC = () => {
  const context = useContext(UserContext)

  if(!context){
    throw new Error("Outside provider")
  }
  const {users,handleRemove} = context;
  return (
    <div>
      {
        users.map(user=> 
          <div key={user.id} className="d-flex p-4 border justify-content-between align-items-center">
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.salary}</p>
            <button className="btn btn-danger" onClick={()=> handleRemove(user.id)}>x</button>
          </div>
        )
      }
    </div>
  )
}

export default UserList