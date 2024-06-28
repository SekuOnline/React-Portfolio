// import React from "react";

// interface props{
//     desc : string
// }

// import Skills from "./Skills";

function About(){
    return(
        <div className="flex flex-col w-full h-screen items-center justify-evenly">
            {/*<div className="flex flex-row flex-wrap">*/}
            <div className={"flex flex-col justify-between w-11/12 h-fit"}>

                <section>
                    <h1 className={"font-filsonHeader text-3xl mb-1 text-Primary w-fit"}>About Me</h1>
                    <div className={"w-1/3 border-Accent border mb-6 -ml-1"}></div>
                    <h2 className={"text-offWhite text-2xl"}> ⋅ Computer Science (Honours) @ Carleton University</h2>
                    <h2 className={"text-offWhite text-2xl"}>⋅ SWE | Cloud | Web Developer </h2>

                    <h3 className={"text-offWhite text-2xl mb-10"}>⋅ Seeking Fall 2024 Internships</h3>
                    {/*<p className={"text-offWhite text-lg"}>David Sedarous is a Software Engineer and Carleton University*/}
                    {/*    honors graduate seeking out new ways to utilize programming to improve the lives of others.<br/><br/> David*/}
                    {/*    is a self-driven, diligent,*/}
                    {/*    and passionate programmer dedicated to exploring intuitive ways to solve complex problems.*/}
                    {/*</p>*/}

                    <p className={"text-offWhite text-lg"}>
                        Hi! I'm David, an aspiring developer of software, cloud, and web services.

                        Throughout my life I've always felt a strong pull towards helping others wherever I can.
                        Applying this to my career, I'm hoping to use my skills to develop systems that users find
                        accessible and valuable.

                        <br/><br/>
                        Currently, I spend my spare time volunteering at Technolgap, a Canadian student / alumni run
                        non-profit organization. Technolgap seeks to empower women and non-binary individuals throughout
                        their education.
                    </p>
                </section>


                {/*<section>*/}
                {/*    <h1 className={"font-museoHeader text-2xl mb-3 text-Primary"}> Software: Design | Engineering | Testing</h1>*/}
                {/*    <p className={"text-offWhite text-lg"}>*/}
                {/*        */}
                {/*    </p>*/}

                {/*</section>*/}
                {/*<section></section>*/}
                {/*    <h1 className={"font-filsonHeader text-3xl mb-3 text-Primary mx-1"}>Ottawa, Canada</h1>*/}
                {/*</div>*/}

                {/*<h3 className={"font-museoBody text-2xl mb-10 text-Primary"}>@ Carleton University</h3>*/}

            </div>

            {/*<Skills/>*/}



        </div>
    )
}

export default About;