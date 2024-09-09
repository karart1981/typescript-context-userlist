import React, { useState } from 'react'
import { IUserAdd} from '../types'
import { UserContext } from '../context'
import { useContext } from 'react'

const AddUser:React.FC = () => {
    
    const context = useContext(UserContext)
    if (!context){
        throw new Error("No context")
    }
   const {handleAdd} = context
   
   const [name, setName] = useState("")
   const [age, setAge] = useState(18)
   const [salary, setSalary] = useState(55000)
   const [error,setError] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    if (!name || !age || !salary) return setError("Please, fill the field");
    
    
    const newUser: IUserAdd = {
        name,
        age,
        salary
    };

    
    handleAdd(newUser)
    setName("")
    setAge(18)
    setSalary(55000)
    setError("")
  }
  return (
    <div>
        <h2>Add User</h2>
        {error && <p style={{color:"red"}}>{error}</p>}
        <form className="input-group mb-3" onSubmit={handleSubmit}>
           <input 
             className="form-control"
             value={name}
             onChange={e=> setName(e.target.value)}
           />
           <input 
             className="form-control"
             value={age}
             onChange={e=> setAge(+e.target.value)}
            />
           <input 
             className="form-control"
             value={salary}
             onChange={e=> setSalary(+e.target.value)}
           />
           <button className="btn btn-info">Add</button>
        </form>
    </div>
  )
}

export default AddUser