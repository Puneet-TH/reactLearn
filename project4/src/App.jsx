import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    name : "awake ape",
    price : "42$",
    number : "346"
  }
    let obj2 = {
    name : "sleep ape",
    price : "45$",
    number : "347"
  }
  //can pass values inside cards and change then making diff cards from same format
  return (
    <>   
       <Card newObj = {obj}/>
       <Card newObj = {obj2}/>
    </>
  )
}

export default App
