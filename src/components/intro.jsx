import React from 'react';
import {AiFillInstagram} from "react-icons/ai"; 
import {BsArrowDownCircleFill} from "react-icons/bs";  
import Me from "../components/img/lightside.png";
import Typewriter from "typewriter-effect";
import {SiLinkedin,
        SiGithub } from "react-icons/si"; 

function Intro() {
  return (
 <div class="flex xl:flex-col">
  
    <div className= 'w-1/2 h-screen text-white font-sans:ui-sans-serif p-16 xl:w-full' id="section1"> 

        <h1 className='text-white-200 text-4xl px-32 mt-32 pt-36 pr-36 font-medium xl:flex items-center justify-center:left'>Hello There!</h1>  
        <h2 className='text-4xl pl-32 pt-6 pb-4 font-normal xl:flex items-center justify-center:left'>I'm Berkin Kınay</h2>
  
         <div className='w-full pl-48 text-white text-3xl xl:flex items-center justify-center:left'> 
            <Typewriter  
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString ("Front-End Dev.")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString ("Web Designer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString ("Videographer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString ("Software Designer")
                  .start();
              }}
            />
         </div>  
        <div className='text-white-200 text-base-1rem  px-24 pt-8 pb-4 pr-16 font-medium object-cover xl:flex items-center justify-center:left'>I love creating and working on a new idea and that's why I'm here</div>

    <div className='mt-24 flex items-center justify-center pr-48 gap-16'>
           <div className='text-black hover:dark:text-white pt-4 min-w-max min-h-max' onClick={() => {
                     window.location.href= "https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/"
                   }}> <SiLinkedin size={56}/> </div>

           <div className='text-black hover:dark:text-white pt-4 pl-2 min-w-max min-h-max' onClick={() => {
                     window.location.href= "https://github.com/developedbyven"
                   }}> <SiGithub size={58}/></div>

           <div className='text-black hover:dark:text-white pt-4 pr-2 min-w-max min-h-max' onClick={() => {
                      window.location.href= "https://www.instagram.com/berkinkinay/"
                   }}> <AiFillInstagram size={62}/></div>

      </div>
    </div>

       <div className='w-1/2 flex h-screen items-center pr-[90px] justify-center xl:w-full xl:pt-[120px]'>  
              <img class="h-96 w-96 bg-black " src={Me} alt ="" className="lightside" />    
      
             <div className='text-white absolute bottom-0 right-0 h-16 w-16' onClick={() => {
                     window.location.href= "#section3"
                   }}>  <BsArrowDownCircleFill size={40} />{" "} </div>
       </div>
   </div>
  );
}
export default Intro;