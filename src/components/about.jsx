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
import {BsArrowDownCircleFill} from "react-icons/bs";

function About () {
    return (
        <div class='flex bg-zinc-600 h-screen xl:flex-col'>

 
            <div className="h-1/2 w-full text-white  font-sans:ui-sans-serif " id="section2">
                 <div className= 'h-1/4 w-full text-4xl pl-64 font-medium pt-16 p-16'>
                          Briefly me,
                </div>

             <div className="h-1/2 pb-16 items-center justify-center font-normal text-white text-2xl pl-36 pr-36">

                     <h3 className=" text-white mt-12 text-1xl ml-12"> 
                        I live in İzmir, Turkey and I'm 23. I am a 2nd year student of Computer Programming. I work on developing and editing new
                         ideas. I like to improve myself and learn new technologies. I believe
                         that teamwork is the key to do good all these things, we can do this
                         together. I love new creative things that might be in software and 
                         visual graphics. if you want to talk about anything
                         you can contact me...
                     </h3> 
                 
                 <div className="flex justify-center:left text-white mt-16 pl-12 font-bold ml-12 text-2xl">
                    <Typewriter  
                        onInit={(typewriter) => {
                          typewriter
                             .typeString ("These are the programming languages, frameworks and programs that I know.")
                             .pauseFor(1000)
                             .start();
                         }}
                       />
                </div>
            </div>

            <div className="flex items-center justify-center gap-20 pt-24">
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

                 <div className="flex justify-center text-white mt-24 text-2xl">
                    <Typewriter  
                        onInit={(typewriter) => {
                          typewriter
                             .pauseFor(10000)
                             .typeString ("Currently learning and working on (especially for Vue)")
                             .start();
                         }}
                       />
                 </div>

             <div className="mt-24 flex items-center justify-center gap-20 object-cover 2xl:object-cover xl:object-cover">
                 <MdCode size="3em" color="purple" />{" "}
                    <SiVuedotjs size="4.6em" color="green" />{" "}
                     <SiFlutter size="4.6em" color="black" />{" "}
                 <BsCodeSlash size="3em" color="purple" />{" "}
            </div>
         <div className='text-white absolute bottom-0 right-0 h-16 w-16' onClick={() => {
                     window.location.href= "#section3"
                   }}>  <BsArrowDownCircleFill size={40} />{" "} </div>
      
     </div>
</div>

      );
}
export default About;