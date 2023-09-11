import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './users'
import Friends from './friends'

function App() {
 function handleClick(){
  alert('btn clicked');
 }

  return (
    <>
      <h1>React core concept</h1>
      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>

      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
