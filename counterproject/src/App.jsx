import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { //can take any name for second one first is variable name
 let [counter,counterValue] = useState(15)
  const addValue = () => {
      if(counter >= 20) return counterValue(counter = 20)
    counterValue(counter += 1)  
  }
  const decreaseValue = ()=>{
    if(counter === 0) return counterValue(counter = 0)
     counterValue(counter -= 1)
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter value : {counter} </h2>

      <button onClick={addValue}>click me to increase</button>
      <button onClick= {decreaseValue}>click me to decrease</button>
    </>
  )
}

export default App
