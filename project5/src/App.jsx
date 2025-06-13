import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button  onClick={()=> setColor("red")}
          className='Outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: 'red'}}>
            red
          </button>
          <button  onClick={()=> setColor("green")}
          className='Outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: 'green'}}>
            green
          </button>
          <button  onClick={()=> setColor("blue")}
          className='Outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: 'blue'}}>
            blue
          </button>
          <button  onClick={()=> setColor("yellow")}
          className='Outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: 'yellow'}}>
            yellow
          </button>
          <button  onClick={()=> setColor("pink")}
          className='Outline-none px-4 rounded-full text-white shadow-lg' style = {{backgroundColor: 'pink'}}>
            pink
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
