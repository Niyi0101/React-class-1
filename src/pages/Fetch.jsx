import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users, setUsers]=useState([]);
    const [name, setName]= useState('')
    const [email, setEmail]=useState('')

    const login = {
        name: name,
        email: email
    }
    const COMMENT ='https://jsonplaceholder.typicode.com/comments'
    const handleLogin = (e)=>{
        e.preventDefault();
        fetch(COMMENT, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(login)
        }).then((response)=>{
            console.log('response not okay', response)
        })
        .then((data)=>console.log(data))
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error)
        })
    }
    const URL= 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            setUsers(data)
            console.log(data)
        })
        .catch((err)=> console.log(err))
    }, [])
  return (
    <>
            <ul>
                {users.map((user, index)=>(
                    <li key={index}>
                        <p>{user.name}</p>
                        <p>{user.address.city}</p>
                        <p>No: {user.phone}</p>
                        <br/>
                    </li>
                ))}
            </ul>


                <form onSubmit={handleLogin}>

                    <label htmlFor='name'>First Name</label>
                    <br />
                    <input type='text' name='name' value={name}onChange={(e)=>setName(e.target.value)} />

                    <br />
                    <label htmlFor='email'>Email</label>
                    <br />
                    <input type='text' name='name' value={email} onChange={(e)=>setEmail(e.target.value)} />

                    <button type='submit' >Submit</button>
                </form>
    </>
  )
}

export default Fetch