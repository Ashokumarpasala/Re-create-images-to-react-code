import React from 'react'
import card1 from './images/10e254ed8323b836e2575a18f7036352.jpg'
import card2 from './images/1600w-Kq5rbgTd5lE.webp'
import card3 from './images/1600w-LqUfJRUvvrI.webp'
import card4 from './images/1600w-QVp1RiA6iSk.webp'
import card5 from './images/1600w-rU-gq1vTReM.webp'
import card6 from './images/19_3.jpg'
import card12 from './images/slides-html.jpg'
import card13 from './images/sample-return-policy-ecommerce-stores-04.webp'
import card14 from './images/modern+mystic.jpeg'
import card7 from './images/27_1_1.jpg'
import card8 from './images/maxresdefault.jpg'
import card9 from './images/sample-return-policy-ecommerce-stores-04.webp'
import card10 from './images/maxresdefault.jpg'
import card11 from './images/800w-kT0DGrL2mPM.webp'
import mark from './images/bookmark-fill.svg'

function Card() {
  return (
    <div >
        <div className=' num text-center' style={{position:"relative", top:"900px", right:"-15px", zIndex:"2"}}>
            <h2 className=''>190</h2>
            <h3>DESIGN IDEAS</h3>
            <h1>WEB <br /> BANNER</h1>
            <h2>98 % <br />OFF</h2>
        </div>
        <div className=' numb text-center' style={{position:"relative", top:"300px", right:"-750px", zIndex:"2", color:"black"}}>
            <div className=''>

            <h4 className='fs-1 fw-bold '>39900 </h4>
            <p className='fw-bold'>TEMPLATES</p>
            </div>
            
        </div>
    <div className='border border-dark mx-auto' style={{width:"1800px", height:"1000px", overflow:"hidden", backgroundColor:"black"}}>
      <div className="d-flex justify-content-evenly">
        <img className='border' style={{opacity:"0.20", width:"280px", height:"140px"}} src={card1} alt="" />
        <img className='border' style={{opacity:"0.10", width:"280px", height:"140px"}} src={card2} alt="" />
      </div>
      <div className='my-5 d-flex justify-content-around'>
      <img className='border rounded-4' style={{opacity:"0.10", width:"280px", height:"140px"}} src={card4} alt="" />
      <img className='border rounded-4' style={{opacity:"0.150", width:"280px", height:"140px"}} src={card5} alt="" />
      </div>
      <div className='my-5 d-flex justify-content-between'>
      <img className='border rounded-4' style={{opacity:"0.20", width:"280px", height:"140px"}} src={card3} alt="" />
      <img className='border rounded-4' style={{opacity:"0.10", width:"280px", height:"140px"}} src={card9} alt="" />
      </div>
      <div className='my-5 d-flex justify-content-around'>
      <img className='border' style={{opacity:"0.20", width:"280px", height:"140px"}} src={card5} alt="" />
      <img className='border rounded-4' style={{opacity:"0.15", width:"280px", height:"140px"}} src={card2} alt="" />
      </div>
      <div className='my-5 d-flex justify-content-evenly'>
      <img className='border rounded-4' style={{opacity:"0.20", width:"280px", height:"140px"}} src={card6} alt="" />
      <img className='border rounded-4' style={{opacity:"0.15", width:"280px", height:"140px"}} src={card1} alt="" />
      </div>

<div style={{position:"relative",top:"-1000px"}}>
<div style={{zIndex:"3"}}>
    <div className="d-flex justify-content-between" >
        <img className='border rounded-4' style={{opacity:"", width:"500px", height:"250px"}} src={card3} alt="" />
        <img className='border rounded-4' style={{opacity:"", width:"380px", height:"190px"}} src={card8} alt="" />
      </div>
      <div className="d-flex justify-content-end">

      <img className='' style={{ width: "600px", height: "300px", transform: "rotate(90deg)", position:"relative", left:"180px" }} src={mark} alt="" />
      </div>
      <div className='my-5'></div>
      <div className="d-flex justify-content-between" >
        <img className='border' style={{opacity:"0.85", width:"450px", height:"210px"}} src={card7} alt="" />
        <img className='border ' style={{opacity:"", width:"380px", height:"190px"}} src={card11} alt="" />
     
      </div>

</div>
</div>

<div style={{position:"relative",top:"-1500px"}}>
<div style={{zIndex:"4"}}>
    <div className="d-flex justify-content-between m-5 p-5" >
        <img className='border rounded-4' style={{opacity:"0.85", width:"420px", height:"210px"}} src={card10} alt="" />
        <img className='border rounded-4' style={{opacity:"0.95", width:"380px", height:"190px"}} src={card1} alt="" />
      </div>
      <div className="d-flex justify-content-end">
      <img className='border  m-5' style={{opacity:"0.65", width:"480px", height:"250px"}} src={card14} alt="" />

      </div>
      <div className='my-5'></div>
     
</div>
</div>

<div style={{position:"relative",top:"-1800px"}}>
<div style={{zIndex:"4"}}>
    <div className='p-2'></div>
    <div className="d-flex justify-content-between" >
        <img className='border rounded-4' style={{opacity:"", width:"500px", height:"280px"}} src={card13} alt="" />
        <img className='border rounded-4' style={{opacity:"0.70", width:"650px", height:"280px",}} src={card12} alt="" />
      </div>
</div>
</div>
<div style={{position:"relative",top:"-2700px"}}>
<div style={{zIndex:"2"}}>
    <div className='p-2'></div>
    <div className="d-flex justify-content-start" >
        <img className='border rounded-4' style={{opacity:"", width:"430px", height:"240px"}} src={card12} alt="" />
      </div>
</div>
</div>

<div style={{position:"relative",top:"-2240px", left:"-400px"}}>
<div style={{zIndex:"2"}}>
    <div className='p-2'></div>
    <div className="d-flex justify-content-center" >
        <img className='border rounded-4' style={{opacity:"", width:"480px", height:"240px"}} src={card14} alt="" />
      </div>
</div>
</div>


    </div>
    </div>
  )
}

export default Card
