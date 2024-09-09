import { useState } from 'react'

import './App.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
import { UserContext } from './context'
import { IUserAdd } from './types'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [users, setUsers] = useState([
    {id:101, name:"Armen", age: 34, salary: 350000, isMarried: true},
    {id:102, name:"Ashot", age: 40, salary: 440000, isMarried: false},
    {id:103, name:"Karine", age: 32, salary: 320000},
    {id:104, name:"Lusine", age: 37, salary: 600000, isMarried: true}
  ])

  const handleRemove = (id:number):void =>{
    setUsers(users.filter(user=> user.id != id))
  }

  const handleAdd = (user:IUserAdd):void =>{
   setUsers([...users,user])
  }

  return (
    <>
      <UserContext.Provider value={{users, handleRemove, handleAdd}}>
          <AddUser />
          <UserList />
      </UserContext.Provider>
    </>
  )
}

export default App
