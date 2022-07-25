import React from "react";
import Hi from "../components/img/hellothere.png";
import {BsArrowUpCircleFill} from "react-icons/bs";

function Lastpart () {
    return ( 

        <div class= "flex h-screen xl:flex-col md:flex-col md:h-auto xl:h-auto">
     
           <div className="w-1/2 flex bg-zinc-400 h-screen items-center justify-center p-48 2xl:w-full md:flex md:items-center md:justify-center md:p-12" id="parthree">
                 <img class="bg-black rounded-[40px]" src={Hi} alt ="" className="hellothere" /> 
           </div>
       
               <div className="w-1/2 object-cover flex h-screen items-center justify-center pl-64 text-2xl text-white p-56 2xl:w-auto 2xl:object-cover md:flex md:items-center md:justify-center md:text-base md:p-10 xl:items-center xl:justify-center xl:text-lg 2xl:items-center 2xl:justify-center 2xl:text-xl "> 
                     I love computer science, I am working for become a good developer by continuing in a line 
                     that makes life easier and takes it forward in the light of new developing technologies.
                     First, everything is an idea to build something and I design it by using codes.
                     I know what I must and wanna do better.    
               </div>

          <div class="flex w-full h-48 bg-black text-white items-center justify-center flex-col absolute mt-[761px] 2xl:w-full xl:mt-[1564px] sm:flex sm:items-center sm:justify-center">
                    
                 <div className="pt-2 text-2xl md:text-xl">Get in touch at &#8595;</div>
                          <div class="font-medium text-4xl text-purple-500 hover:text-slate-300 hover:ease-out duration-150 mt-1 md:text-2xl" onClick={() => {
                               window.location.href="mail" 
                                    }}> helloberkin@gmail.com</div>            
                                    <div className="text-white text-sm mt-4 gap-2 md:flex md:text-xs md:items-center md:justify-center sm:text-xs">Tips About Me: My nickname is "Ventunos" this is fully version and shorter one is "ven". That is why I use this one for my github account.</div>
          
                          <div className="text-white text-sm gap-4 mt-8 md:text-xs"> &copy; 2022 Copyright. This website created by 
                              <button class="font-medium text-xx text-purple-500 hover:text-white hover:ease-out duration-150 gap-4"
                                onClick={() => {
                                   window.location.href="https://github.com/developedbyven" 
                               }}> 'ven</button>     
                                        . All Rights Reserved.</div>     
                                     

                <div className='text-white absolute bottom-0 right-0 h-16 w-16 animate-bounce md:h-12 md:hidden' onClick={() => {
                     window.location.href="#partone"
                          }}>  <BsArrowUpCircleFill size={40} />{" "} </div>
         </div>           
</div> 
     );
}

export default Lastpart;
