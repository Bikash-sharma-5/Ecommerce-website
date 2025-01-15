import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from "react-router-dom";
import './style1.css'

function Explore() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/collection"); // Navigate to the target page
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after navigation
        }, 100); // Delay to ensure the page renders before scrolling
      };
  return (
    <div>
      <div className='w-screen h-[800px] ' class="bg-[url('./assets/8.jpg')] flex justify-center flex-col align-middle w-screen h-[800px]  bg-cover bg-center" >
     
   <div className='flex font-outfit justify-center text-white text-[70px]'>Collections</div>
   <div   className='flex font-outfit justify-center text-white  align-middle  text-[50px]'><button  onClick={handleClick} class="outline outline-2 outline-white-500 px-4 py-2 rounded">Explore</button></div>
      </div>
      
    </div>
  )
}

export default Explore
