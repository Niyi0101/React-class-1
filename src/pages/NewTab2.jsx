import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewTab2 = () => {
    const[users, setUsers]=useState([])
const [name, setName] = useState('')
const [password, setPassword] =useState('')
const login = {
    name: name,
    password: password
}


// const [edit, setEdit]
    const URL= 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
        const Fetch = async ()=> {
           try{
            const response = await axios.get(URL)
            console.log(response.data)
            setUsers(response.data)
        }
        catch(e){
            // console.log(e)
            console.log(e.message)
            // alert(e.message)
        } 
        }
        Fetch()
        
    }, [])

    const handleSubmit =(e)=>{
        e.preventDefault()
        try{
            axios.post(URL,login)
        }
        catch(e) {
            console.log(e)
        }
    }
    // const handleEdit =(e)=>{
    //     e.preventDefault()

    // }

  return (
    <>

            <ul>
                {users.map((user, index)=>(
                    <li key={index}>
                           <p>{user.name}</p>
                        <p>{user.address.city}</p>
                        <p>No: {user.phone}</p>
                        <br />

                    </li>
                ))}
            </ul>


            <form onSubmit={handleSubmit}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                        
                        <label htmlFor='name'>Password</label>
                        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button type='submit'>Submit</button>
                        </form>
    </>
  )
}

export default NewTab2