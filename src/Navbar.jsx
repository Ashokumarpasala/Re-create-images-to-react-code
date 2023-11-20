import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    
    <div className='d-flex justify-content-around p-5' style={{width:"100%"}}>
<nav class="navbar ">
  <div class="container-fluid">
    <h1>CARD 2</h1>
  </div>
</nav>

<nav class="navbar ">
  <div class="container-fluid">
    <Link to='/card2'>
    
  <h1>CARD 1</h1>
    </Link>
  </div>
</nav>
    </div>
<div className="conatiner-xl m-5 p-5">
     <Card />
    </div>
    
    </>
    
  )
}

export default Navbar
