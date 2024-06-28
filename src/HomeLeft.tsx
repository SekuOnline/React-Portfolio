import React from "react";

import Media from "./Media.tsx";

// import headShot from "./assets/high_quality_me-removebg-preview.png";
import headShot from "./assets/high quality me.jpg"
import emailIcon from "./assets/emailicon.png";

interface refProps{
    aboutRef: React.MutableRefObject<HTMLDivElement | null>;
    projectRef: React.MutableRefObject<HTMLDivElement | null>;
    // contactRef: React.MutableRefObject<HTMLDivElement | null>;
    // aboutRef: React.MutableRefObject<HTMLDivElement | null>;
}
function HomeLeft({aboutRef, projectRef}:refProps){
    return(

        <div className={"z-10 bg-TextColor fixed left-0 w-1/2 h-screen flex flex-col justify-center items-center max-h-fit"}>
            {/**/}
            <HeadShot/>
            <div className={"flex flex-col w-full h-1/5 items-center justify-evenly"}>
                {/*<HeadShot/>*/}
                <h1 className={"font-filsonHeader text-5xl  text-BackgroundLight"}>David Sedarous</h1>
                <h2 className={"font-museoHeader text-3xl text-gray-700"}>Ottawa-Based Junior Developer</h2>
                {/*<h2 className={"font-museoHeader text-3xl text-gray-500"}>Ottawa-Based Junior Developer</h2>*/}
                <Email/>
            </div>

            <div className={"flex flex-row w-full h-1/6 justify-evenly items-center just0f flex-wrap  "}>
                <button onClick={() => aboutRef?.current?.scrollIntoView({behavior: "smooth"})}
                        className={"text-white font-museoHeader text-xl border-0 bg-BackgroundLight min-w-36 w-48 outline-none focus:outline-none hover:bg-lightPurple hover:text-white shadow-md "}>
                    ABOUT
                </button>

                <button onClick={() => projectRef?.current?.scrollIntoView({behavior: "smooth"})}
                        className={"text-white font-museoHeader text-xl bg-BackgroundLight border-0 min-w-36 w-48 outline-none focus:outline-none hover:text-white hover:bg-lightPurple shadow-md"}>
                    PROJECTS
                </button>

            </div>

            <Media />



        </div>
    )
}

function HeadShot(){
    return(
        <div className={"w-fit h-auto"}>
            <img src={headShot} alt={"David Sedarous Headshot"} className={"rounded-full w-48 h-auto shadow-xl"}></img>
        </div>
    )
}

function Email(){
    return(
        <div className={"flex flex-row items-center justify-center h-fit"}>
            <img src={emailIcon} alt="Email icon" className="w-9 h-auto mt-1 flex-shrink-2 pr-2" />
            <a className={"text-xl text-gray-400 hover:text-lightPurple"} href={"mailto: sedarous.david@gmail.com" }>{'sedarous.david@gmail.com'}</a>
        </div>
    )
}

export default HomeLeft;