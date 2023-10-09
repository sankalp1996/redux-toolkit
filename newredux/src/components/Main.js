import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { doIncrement,doDecrement } from '../slices/CounterSlice';

const Main = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state=>state.counter)
  
  return (
   <>
       <div className='container'>
            
            <button className='btn btn-primary m-3' name="incr" onClick={()=>dispatch(doIncrement(1))}>+</button>
            <span>{counterValue}</span>

            <button className='btn btn-primary m-3' name="decr" onClick={()=>dispatch(doDecrement(1))}>-</button>
        </div>

   </>
  )
}

export default Main
