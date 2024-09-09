import React from 'react'
import { connect } from 'react-redux'
import {add, remove} from './actions/actions'
import { useState } from 'react'

const App = ({list, add, remove}) => {
  const [item, setItem] = useState('')
  const handleAddItem= ()=>{
    add(item)
    setItem('')
  }

  const removeItem=()=>{
    remove()
  }
  return (
    <>

<div>

  <ul>
      {list.map((item, index)=>(
        <li key={index}>
          {item}
        </li>
      ))}
  </ul>
  <br />
  <input type='text' value={item} onChange={(e)=>setItem(e.target.value)} />

  <br />
  <button onClick={handleAddItem}>Add Item</button>

  <br />
  <button onClick={removeItem}>Remove Item</button>
</div>
    </>
  )
}


const mapStateToProps =(state)=> (
   {
    list: state.list
  }
)
const mapDispatchToProps = {
  add,
  remove
}

export default connect(mapStateToProps, mapDispatchToProps)(App)