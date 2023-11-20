import React from 'react'
import { Link } from 'react-router-dom'
import rect from './logos/rect.svg'
import crc from './logos/cricle.svg'
import crcCl from './logos/crlCrc.svg'
import main from './logos/main.svg'
import logom from './logos/logom.svg'
import pit from './logos/pit.svg'
import logo from './logos/2691429-laptop-helping-and-business-people-training-with-mentor-teaching-or-learning.-computer-happy-and-expert-coaching-group-leader-explaining-to-employees-interns-or-workers-with-project-in-office-.jpg'
function Card2() {
  return (
    <div  style={{}}>
      <div>
        <Link to='/'>
        <h1 className='text-center p-5'>CARD 1</h1>
        </Link>
      </div>
      <div className='border rounded-5  grad m-5' style={{padding:"300px", }}>
          <div style={{height:"1170px", width:"3500px", marginTop:"350px", margin:"auto", backgroundColor:"rgba(1, 19, 43, 1)"}} className='border rounded-4'>

           <img src={rect} style={{width:"450px"}} alt="" />
           <img src={crc} className='' style={{position:"absolute", left:"2995px",top:"500px", width:"1450px",zIndex:"0"}} alt="" />
           <img src={logo} className='' style={{position:"absolute", left:"3150px", width:"1300px",zIndex:"1", borderRadius:"40% 0 30% 50%"}} alt="" />
           <img src={crcCl} className='' style={{position:"absolute", left:"2997px",top:"500px", width:"1450px",}} alt="" />
           <img src={pit} className='' style={{position:"absolute", left:"1090px",top:"600px", width:"330px",zIndex:"2"}} alt="" />
           </div>
          </div>
          <img src={main} style={{position:"relative", top:"-1450px", left:"1050px", width:"400px"}} alt="" />
          <div style={{position:"relative", top:"-1800px", left:"1700px",}} >
            <h2 className='' style={{fontSize:"100px",fontWeight:"bolder",  color:"white"}}><span style={{color:"#fa851e"}}>WEB BANNER </span> DESIGN</h2>
            <h4 className='lh-base' style={{fontSize:"50px",textDecoration:"underline", color:"white",}}>Free Graphic Design Tutorial</h4>
          </div>

          <div>
            <div className="d-flex justify-content-start align-items-center " style={{position:"relative",top:"-1600px", zIndex:"2", left:"1300px",}}>
                <div className='px-5' style={{fontSize:"50px", fontWeight:"bolder", color:"white",borderRight:"20px solid white" }}>
                  <div className=' my-4 d-flex'>
                  <svg style={{backgroundColor:"white", borderRadius:"50%", width:"120px", height:"120px", padding:"25px"}} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fa851e" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>                    <p className='mx-5'>Pedagadi, 3-36/ vizag pin:531173</p>
                  </div>
                  <div className=' my-4 d-flex'>
                  <svg style={{backgroundColor:"white", borderRadius:"50%", width:"120px", height:"120px", padding:"25px"}} xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fa851e" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>                    <p className='mx-5'>ashokkumarpasala99@gmail.com</p>
                  </div>
                  <div className=' my-4 d-flex'>
                  <svg style={{backgroundColor:"white", borderRadius:"50%", width:"120px", height:"120px", padding:"25px"}} xmlns="http://www.w3.org/2000/svg" className='' width="60" height="60" fill="#fa851e" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>                    <p className='mx-5'>+91 8639462553 / +91 9705653988</p>
                  </div>
                </div>
                 <div style={{position:"absolute", top:"-450px", left:"-170px",}}>
                <img src={logom} style={{width:"250px",}} alt="" />
                 <h5 className='fs-3 m-2 fw-bold'>GRAPHIC <span style={{color:"lightgrey"}}>Family</span></h5>
                 </div>

                <div className='p-5 ' style={{color:"white", fontSize:"50px"}}>
                    <div className=' d-flex'>
                  <input style={{width:"50px", color:"#fa851e"}} className=' mx-4' type="checkbox" />
                   <h4 className='fs-1 lh-base'>Web Banner Design</h4>
                    </div>
                    <div className=' d-flex'>
                  <input style={{width:"50px", color:"#fa851e"}} className=' mx-4' type="checkbox" />
                   <h4 className='fs-1 lh-base'>Logo Design</h4>
                    </div>
                    <div className=' d-flex'>
                  <input style={{width:"50px", color:"#fa851e"}} className=' mx-4' type="checkbox" />
                   <h4 className='fs-1 lh-base'>Bussiness Card Design</h4>
                    </div>
                    <div className=' d-flex'>
                  <input style={{width:"50px", color:"#fa851e"}} className=' mx-4' type="checkbox" />
                   <h4 className='fs-1 lh-base'>Flyer Design</h4>
                    </div>
                    <div className=' d-flex'>
                  <input style={{width:"50px", color:"#fa851e"}} className=' mx-4' type="checkbox" />
                   <h4 className='fs-1 lh-base'>Roll Up Banners</h4>
                    </div>
                </div>
            </div>
          </div>
        </div>

  )
}

export default Card2
