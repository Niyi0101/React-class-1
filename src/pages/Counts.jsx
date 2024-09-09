import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions/CountAction'
import { useNavigate } from 'react-router-dom'

const Counts = ({count, increment, decrement, reset}) => {

  return (
    <>
        <div>
            <p>{count}</p>
            <br />
            <button onClick={increment}>+</button>
            <br />
            <button onClick={decrement}>-</button>
            <br />
            <button onClick={reset}>RESET</button>
        </div>
    </>
  )
}
const mapStateToProps = (state) => (
  {
    count: state.count
   }
)
 
  
const mapDispatchToProps = {

   increment,
   decrement,
   reset,
}

export default connect (mapStateToProps, mapDispatchToProps)(Counts)