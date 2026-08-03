import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color ,setColor] = useState("olive")

  return(
    <div className='w-full h-screen duration-200' style={{backgroundColor:color }}>
      <h1 className='flex justify-center '>I love u kaju</h1>
      <div className='fixed flex flex-wrap justify-center bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 insert-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl px-3 py-2 rounded-4xl'>
          <button onClick = {() => setColor("red")} className='outline-none border-black-10 rounded-4xl px-4' style={{backgroundColor : "red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl px-3 py-2 rounded-4xl'>
          <button onClick = {() => setColor("green")} className='outline-none border-black-10 rounded-4xl px-4' style={{backgroundColor : "green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-2xl px-3 py-2 rounded-4xl'>
          <button onClick = {() => setColor("blue")} className='outline-none border-black-10 rounded-4xl px-4' style={{backgroundColor : "blue"}}>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
