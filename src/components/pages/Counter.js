import React, { useState } from 'react'
import Button from './Button'
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';

function Counter(){
    let [count,setCount]=useState(0);
    const increment = () => {
      setCount(count++);
    }
    const decrement = () => {
      setCount(count--);
    }
    const reset = () => {
        count=0;
        setCount(count);
    }
    return (
        <div>
             <ResponsiveAppBar/>
        <h1>Counter Application</h1>
        <h4>Count : {count}</h4>
        <Button onClick={increment} value="+" style={{color:'white',backgroundColor:'blue'}} />
        <Button onClick={reset} value="=" style={{color:'black',backgroundColor:'yellow'}}/>
        <Button onClick={decrement} value="-" style={{color:'white',backgroundColor:'red'}}/>
        </div>
    )
}

export default Counter