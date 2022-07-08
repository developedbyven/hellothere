import React from "react";
import Hi from "../components/img/hellothere.png";
import {BsArrowUpCircleFill} from "react-icons/bs";

function Lastpart () {
    return ( 

        <div class= "flex font-sans:ui-sans-serif h-screen 2xl:flex-col">
     
           <div className="w-1/2 flex bg-zinc-400 h-screen items-center justify-center p-48 2xl:w-full" id="section3">
                 <img class="bg-black rounded-[40px] object-cover" src={Hi} alt ="" className="hellothere" /> 
           </div>
       
               <div className="w-1/2 object-cover flex h-screen items-center justify-center pl-64 text-2xl text-white p-80 2xl:w-full 2xl:object-cover"> 
                     I love computer science, I am working for become a good developer by continuing in a line 
                     that makes life easier and takes it forward in the light of new developing technologies.
                     First, everything is an idea to build something and I design it by using codes.
                     I know what I must and wanna do better.    
               </div>

          <div class="flex w-full h-48 bg-black text-white items-center justify-center flex-col absolute mt-[761px] 2xl:w-full 2xl:mt-[1600px]">
                    
                 <div className="pt-2 text-2xl">Get in touch at &#8595;</div>
                          <div class="font-medium text-4xl text-purple-500 hover:text-slate-300 hover:ease-out duration-150 mt-1" onClick={() => {
                               window.location.href="mail" 
                                    }}> helloberkin@gmail.com</div>            
                                    <div className="text-white text-sm mt-4 gap-2">Tips About Me: My nickname is "Ventunos" this is fully version and shorter one is "ven". That is why I use this one for my github account.</div>
          
                          <div className="text-white text-sm gap-4 mt-8"> &copy; 2022 Copyright. This website created by 
                              <button class="font-medium text-xx text-purple-500 hover:text-white hover:ease-out duration-150 gap-4"
                                onClick={() => {
                                   window.location.href="https://github.com/developedbyven" 
                               }}> 'ven</button>     
                                        . All Rights Reserved.</div>     
                                        <div class="relative h-32 w-32"></div>

                <div className='text-white absolute bottom-0 right-0 h-16 w-16' onClick={() => {
                     window.location.href= "#section1"
                          }}>  <BsArrowUpCircleFill size={40} />{" "} </div>
         </div>           
</div> 
     );
}

export default Lastpart;