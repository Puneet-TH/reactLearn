import { useCallback, useState ,useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numsAllowed, setnumsAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const[password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numsAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*{}"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)  
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numsAllowed, charAllowed, setPassword])
  
  useEffect(() =>{
    passwordGenerator()
  },[length, numsAllowed, charAllowed, passwordGenerator])
 
  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <> 
       <h1 className='text-4xl text-center font-bold text-white'>Password Generator</h1>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-15 text-yellow-700 bg-gray-800'>
        <h1 className='text-white text-center'>Password generator</h1>
        <div className= 'className = "flex shadow rounded-lg overflow-hidden mb-4"'>
          <input
           type="text"
          value={password}
          className='outline-none w-full py-1 px-3 text-amber-5 bg-amber-100 ' 
          placeholder='password' 
          readOnly
          ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 cursor-pointer  shrink-1 active:scale-90 transition-transform'>copy</button>
          
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}} />
              <label>length: {length}</label>
            </div>
            <input type="checkbox"
          defaultChecked={numsAllowed}
          id="numberInput"
          onChange={() => {
              setnumsAllowed((prev) => !prev);
          }}
             />
              <label htmlFor="numberInput">Numbers</label>
               <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )//prev value jobhi hogi uska ulta callback fired calue if we do setcharallowed(true) toh ahr baar true hojaega
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
          </div>
       </div>
    </>
  )
}

export default App


