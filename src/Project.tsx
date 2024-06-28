import RT from "./assets/RT transparent.png";


interface props{
    title:string;
    stack: string;
    desc:string;
    img?: string;
    alt?: string;
    git: string;

}
function Projects() {return(
    <div
        className={"flex flex-col h-fit w-full justify-between items-center bg-gradient-to-b from-Background to-BackgroundDark py-4 "}>
        <div className={"w-11/12 flex flex-col"}>
            <h1 className={"text-Primary text-4xl font-filsonHeader mb-1"}>

                Projects
            </h1>
            <div className={"w-1/3 h-0 border-Accent border mb-10 -ml-1"}></div>
        </div>


        <Project
            title={"Rune-Tactics Web App"}
            stack={"HTML ⋅ CSS ⋅ JS ⋅ NODE.JS ⋅ GCP"}
            desc={`Rune-Tactics was developed for the digital card game Legends of Runeterra.
                    The app takes up to three 'deck-codes' and transforms them into representations
                    of each card contained in the deck using the game's public API. \
                    The website was served to the game's digital community with over 360k players using Google Cloud Platform, and received praise for its utility on x/Twitter.`}
            git={"https://github.com/SekuOnline/Rune-Tactics"}
            img={RT}
            alt={"Rune-Tactics Image"}

        ></Project>

        <ProjectNoImg
            title={"Tournament Card Game (TDD Practice)"}
            stack={"JAVA ⋅ JUNIT5 ⋅ GIT"}
            desc={`Completed at Carleton University as part of a Software Quality Analysis class. \
            Based on a description of the card game, developed use cases to break down into basic requirements for testing. \
            Followed test-driven development standards to incrementally create unit-test and code pairs uploaded to Github. \
            Utilized JUnit 5 to create automated acceptance test suites to ensure 100% test coverage. 
            `}
            git={"https://github.com/SekuOnline/Tournament-Game-TDD"}
        >
        </ProjectNoImg>

        <ProjectNoImg
            title={"Language Testing App"}
            stack={"PYTHON ⋅ PYSIMPLEGUI"}
            desc={"A basic language-testing app. Uses manually inputted .JSON files to add language pairs for translation. Uses mock-flashcards to quiz the user on the given translation pairs."}
            git={"https://github.com/SekuOnline/LanguageTester"}
        ></ProjectNoImg>


    </div>
)
}

function Project({title, stack, desc, git, img, alt}: props) {
    return (
        <div className={"flex flex-col w-full min-h-1/2 justify-center items-center mb-36"}>

            <div className={"w-11/12 flex flex-col justify-center"}>

                <a className={"text-3xl text-Primary font-filsonHeader hover:text-Accent w-fit  mb-2"} href={git}>{title}</a>
                <h2 className={"text-2xl text-Secondary font-museoHeader mb-4"}>{stack}</h2>
                <img src={img} alt={alt}
                     className={"w-fit h-fit min-h-0 min-w-0 mb-6 shadow-xl rounded-xl border-8 border-BackgroundDark bg-BackgroundDark"}></img>
                <p className={"text-md text-TextColor"}>{desc}</p>
            </div>
        </div>
    )
}

function ProjectNoImg({title, stack, desc, git}: props) {
    return (
        <div className={"flex flex-col w-full min-h-1/2 justify-center items-center mb-36"}>

            <div className={"w-11/12 flex flex-col justify-center"}>

                <a className={"text-3xl text-Primary font-filsonHeader hover:text-Accent w-fit  mb-2"} href={git}>{title}</a>
                <h2 className={"text-2xl text-Secondary font-museoHeader mb-4"}>{stack}</h2>

                <p className={"text-md text-TextColor"}>{desc}</p>
            </div>
        </div>
    )
}


export default Projects;