// import { useState } from 'react'
import './App.css'
import React, {CSSProperties, useRef} from "react";

interface ProjectProps {
    title: string;
    subtitle: string;
    desc: string;
    github: string;
    src: string;
    alt?: string;
    style: CSSProperties;
    scroll?: React.MutableRefObject<HTMLDivElement | null>;
}

interface RefProp {
    scroll?: React.MutableRefObject<HTMLDivElement | null>;
}
interface NavbarProps{
    homeRef? : React.MutableRefObject<HTMLDivElement | null>;
    projectRef? : React.MutableRefObject<HTMLDivElement | null>;
}

function App() {
    const projectRef = useRef<HTMLDivElement | null>(null);
    const homeRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className="App">

            <Navbar homeRef={homeRef} projectRef={projectRef}/>

            <Home scroll={homeRef}/>


            <Project
                title={"Rune-Tactics Web App"}
                subtitle={"(Javascript, HTML, CSS, Node.JS)"}
                desc={`Rune-Tactics was developed for the digital card game Legends of Runeterra.
                The app takes up to three 'deck-codes' and transforms them into representations
                of each card contained in the deck using the game's public API. \
                The website was served to the game's digital community with over 360k players,
                and was eventually taken down due to upkeep costs.`}
                github={"https://github.com/SekuOnline/Rune-Tactics"}
                src={"/src/assets/RT2.png"}
                alt={"Rune-Tactics demo image"}
                style={{backgroundColor: "#131836", color: "#FFFFFF"}}
                scroll={projectRef}

            ></Project>

        </div>
    )
}

function Navbar({homeRef, projectRef}: NavbarProps) {
    return (
        <div className="Navbar">
            <button onClick={() => homeRef?.current?.scrollIntoView({behavior: "smooth"})}>
                Home
            </button>

            <p>About</p>
            <button onClick={() => projectRef?.current?.scrollIntoView({behavior: "smooth"})}>
                Projects
            </button>
            {/*<p>Contact</p>*/}

        </div>
    )
}


function Home({scroll}: HomeProps) {
    return (
        <div className="Home" ref={scroll}>
            <h1>David Sedarous</h1>
            <h2>Ottawa-Based Software Developer</h2>
            {/*<TechStack/>*/}
        </div>
    )
}

function Project({title, subtitle, desc, github, src, alt, style, scroll}: ProjectProps) {
    return (
        <div className="Project" style={style} ref={scroll}>
            <div className="Project-Text">
                <h1><a href={github}>{title}</a></h1>
                <h2>{subtitle}</h2>
                <p>{desc}</p>

            </div>
            <img src={src} alt={alt}></img>

        </div>

    )
}


export default App
