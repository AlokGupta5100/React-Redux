import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions'

function App() {
  const myState = useSelector((state) => state.changeTheNumber )
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">

      <h1>Increment/Decrement counter</h1>
      <h3>using React and Redux</h3>

      <div className='quantity'>
        <a className='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber(3))} ><span><button>-</button></span></a>
        <input name='quantity' type='text' className='quantity__input' readOnly value={myState} />
        <a className='quantity_plus' title='Increment' onClick={ () => dispatch(incNumber(5))}><span> <button>+</button></span></a>
      </div>
    </div>
    </>
  )
}

export default App
