import React from 'react';
import {AiFillInstagram} from "react-icons/ai"; 
import {BsArrowDownCircleFill} from "react-icons/bs";  
import Me from "../components/img/lightside.png";
import Typewriter from "typewriter-effect";
import {SiLinkedin,
        SiGithub } from "react-icons/si"; 

function Intro() {
  return (
<div class="flex xl:flex-col md:flex-col">

<div className= 'w-1/2 h-screen text-white p-16 md:h-auto md:items-center xl:w-full xl:h-auto xl:items-center xl:justify-center 2xl:h-auto' id="partone"> 
      <div class="xl:p-96 xl:pl-48"></div>
        <h1 className='text-white-200 text-4xl pt-72 pl-[130px] font-medium xl:flex items-center justify-center:left '>Hello There!</h1>    
        <h2 className='text-4xl pl-32 pt-8 pb-6 font-normal items-center justify-center:left md:flex md:w-max md:h-full md:text-3xl'>I'm Berkin Kınay</h2>
  
         <div className='w-full pl-48 text-white text-3xl items-center justify-center:left md:flex md:w-max md:h-max md:pl-[160px] max-w-max'> 
            <Typewriter  
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString ("Front-End Dev.")
                  .pauseFor(4000)
                  .deleteAll()
                  .typeString ("Web Developer")
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
        <div className='mb-12 text-white-200 text-base-1rem  px-24 pt-8 pb-4 pr-16 font-medium object-cover xl:flex items-center justify-center:left md:flex md:w-max md:text-xs md:h-max md:pl-[100px] 2xl:mb-24'>I love creating and working on a new idea and that's why I'm here</div>

    <div className='flex 2xl:p-24 2xl:pt-12 items-center justify-center gap-16 md:w-full md:h-max md:items-center md:justify-center md:grid md:grid-col md:p-24 md:object-cover 2xl:object-cover '>
           <div className='text-black hover:dark:text-white pt-4  pl-2min-w-max min-h-max' onClick={() => {
                     window.location.href= "https://www.linkedin.com/in/berkin-k%C4%B1nay-04a137228/"
                   }}> <SiLinkedin size={62}/> </div>

           <div className='text-black hover:dark:text-white pt-4 pl-2 min-w-max min-h-max' onClick={() => {
                     window.location.href= "https://github.com/developedbyven"
                   }}> <SiGithub size={58}/></div>

           <div className='text-black hover:dark:text-white pt-4 pr-2 min-w-max min-h-max' onClick={() => {
                      window.location.href= "https://www.instagram.com/berkinkinay/"
                   }}> <AiFillInstagram size={62}/></div>
      </div>
    </div>

    <div className='md:!flex md:h-auto md:w-auto md:object-cover md:pt-64 md:absolute top-0 3xl:!hidden'> 
              <img class="md:h-96 md:w-96 md:bg-black " src={Me} alt ="" className="lightside" />    
    </div>

    <div className='w-1/2 flex h-screen items-center pr-[90px] justify-center xl:w-full xl:absolute top-0 xl:p-10 md:hidden'> 
              <img class="h-96 w-96 bg-black " src={Me} alt ="" className="lightside" />    
   </div>
       
       <div className='text-white absolute bottom-0 right-0 h-16 w-16 animate-bounce md:absolute-0 md:right-0 md:h-12' onClick={() => {
                     window.location.href="#parthree"
                   }}>  <BsArrowDownCircleFill size={40} />{" "} </div>
   </div>
  );
}
export default Intro;
      
