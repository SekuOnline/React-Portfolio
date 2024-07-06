// import { useState } from 'react'
import './App.css'
// import React, {CSSProperties, useRef} from "react";
import HomeLeft from "./HomeLeft.tsx";
import Projects from "./Project.tsx";
import About from "./About.tsx";
// import Skills from "./Skills.tsx";
// import Contact from "./Contact.tsx";
import React, {useRef} from "react";



function App(){
    const aboutRef : React.MutableRefObject<HTMLDivElement | null>  = useRef<HTMLDivElement | null>(null);
    const projectRef : React.MutableRefObject<HTMLDivElement | null>  = useRef<HTMLDivElement | null>(null);
    // const educationRef : React.MutableRefObject<HTMLDivElement>  = useRef(HTMLDivElement);
    // const contactRef : React.MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    return(
        <div className={"w-full flex flex-row-reverse bg-gray-100"}>

            {/*<div className={"w-1/2"}></div>*/}
            {/*/!*Left Side */}
            <HomeLeft
                aboutRef={aboutRef}
                projectRef={projectRef}
                // contactRef={contactRef}
            ></HomeLeft>

            {/*Right Side*/}

            <div className={"flex flex-col w-1/2 h-fit bg-Background items-center"}>
                {/*Gradients*/}

                {/*Top Gradient*/}
                {/*<div className={"fixed w-1/2 h-1/4 bg-gradient-to-b from-BackgroundDark to-Background right-0 top-0"}></div>*/}

                {/*Bottom Gradient*/}
                {/*<div className={"fixed w-1/2 h-1/3 bg-gradient-to-b from-Background to-BackgroundLight bottom-0 right-0 opacity-60"}></div>*/}

                <div className={"z-10 "}>
                    <div ref={aboutRef} className={"flex flex-col items-center justify-center bg-gradient from-Background to-BackgroundDark"}>
                        <About/>
                    </div>


                    {/*Projects*/}
                    <div ref={projectRef}>
                        <Projects/>
                    </div>



                    {/*End of RS*/}
                </div>
            </div>


            {/*    End of App*/}
        </div>
    )
}


export default App
