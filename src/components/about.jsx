import React from "react";
import {MdCode} from 'react-icons/md';
import { BsCodeSlash } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { GrReactjs } from "react-icons/gr";
import {
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobe,
  SiAdobeaftereffects,
  SiCsswizardry,
  SiJavascript,
  SiVuedotjs,
  SiFlutter,
  SiTailwindcss,
  SiBootstrap
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function About () {
    return (
       <div class='flex bg-zinc-600 h-screen xl:flex-col flex-col md:flex-col md:h-auto xl:h-auto'>

 
            <div className="h-1/2 w-full text-white">
                 <div className= 'flex object-fill h-1 items-center justify-center:left text-4xl pl-56 font-medium pt-16 p-16 md:flex md:w-max md:h-max md:text-4xl'>
                          Briefly me,
                </div>

             <div className="flex object-fill pb-1 items-center justify-center font-normal text-white text-2xl pl-36 pr-36">

                     <div className=" text-white text-1xl ml-12 md:text-base md:h-1 md:flex md:w-max"> 
                        I live in İzmir, Turkey and I'm 23. I am a 2nd year student of Computer Programming. I work on developing and editing new
                         ideas. I like to improve myself and learn new technologies. I believe
                         that teamwork is the key to do good all these things, we can do this
                         together. I love new creative things that might be in software and 
                         visual graphics. if you want to talk about anything
                         you can contact me...
                     </div> 
            </div>

            <div className="flex items-center justify-center text-white  text-2xl pt-16 font-bold md:flex md:items-center md:justify center md:w-max-screen md:text-sm md:max-w md:pt-80">
                    <Typewriter  
                        onInit={(typewriter) => {
                          typewriter
                             .typeString ("These are the programming languages, frameworks and programs that I know.")
                             .pauseFor(1000)
                             .start();
                         }}
                     />
             </div>

            <div className="flex items-center justify-center gap-20 pt-24 xl:grid xl:grid-col xl:h-screen xl:object-cover md:grid md:grid-col md:object-cover xl:mb-96">
                 <MdCode size="3em" color="purple" />{" "}
                    <SiJavascript size=" 3.5em" color="yellow" />{" "}
                    <FaNode size="4.2em" color="lime" />{" "}
                    <TiHtml5 size="3.5em" color="red" />{" "}
                    <SiCsswizardry size="3.5em" color="navy" />{" "}
                    <GrReactjs size="4em" color="purple" />
                    <SiTailwindcss size="4em" color="cyan" />{" "}
                    <SiBootstrap size="3.5em" color="blue" />{" "}
                    <SiAdobe size="3.5em" />{" "}
                    <SiAdobepremierepro size="3.5em" color="white" />{" "}
                    <SiAdobephotoshop size="3.5em" color="white" />{" "}
                    <SiAdobeaftereffects size="3.5em" color="white" />{" "}
                <BsCodeSlash size="3em" color="purple" />{" "}
            </div>

                 <div className="flex items-center justify-center text-white mt-24 text-2xl sm:display-none md:text-sm xl:object-cover xl:pt-[600px]">
                    <Typewriter  
                        onInit={(typewriter) => {
                          typewriter
                             .pauseFor(10000)
                             .typeString ("Currently learning and working on (especially for Vue)")
                             .start();
                         }}
                       />
                 </div>

             <div className="mt-12 flex items-center justify-center gap-20 object-cover 2xl:object-cover xl:object-cover xl:grid xl:grid-col xl:h-screen md:grid md:grid-col md:object-cover">
                 <MdCode size="3.1em" color="purple" />{" "}
                    <SiVuedotjs size="4.6em" color="green" />{" "}
                     <SiFlutter size="4.6em" color="black" />{" "}
                 <BsCodeSlash size="3.1em" color="purple" />{" "}
            </div>
    
     </div>
</div>

      );
}
export default About;
